import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fa'; // برای نمایش به زبان فارسی
import relativeTime from 'dayjs/plugin/relativeTime';
import { motion } from 'framer-motion';

dayjs.extend(relativeTime);
dayjs.locale('fa');

const NewsCard = ({ news }) => {
  if (!news) return null;

  const {
    _id,
    title,
    description,
    image
  } = news;

  return (
    <Link to={`/news/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Card className="shadow-sm mb-3 news-card">
          {image && (
            <img src={image} className="card-img-top" alt={title} style={{ maxHeight: '200px', objectFit: 'cover' }} />
          )}
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText>{description ? description.slice(0, 100) + '...' : 'متن موجود نیست'}</CardText>
          </CardBody>
        </Card>
      </motion.div>
    </Link>
  );
};


export default NewsCard;
