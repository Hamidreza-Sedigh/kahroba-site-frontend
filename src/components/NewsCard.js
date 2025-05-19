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
    image, 
    category,
    sourceName
  } = news;

  return (
    <Link to={`/news/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Card className="shadow-sm mb-3 news-card position-relative">
          {/* {image ? (
            <img
              src={image}
              className="card-img-top"
              alt={title}
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
          ) : (
            <div
              style={{
                height: '200px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888'
              }}
            >
              تصویر موجود نیست
            </div>
          )} */}

          {/* برچسب دسته‌بندی */}
          {category && (
            <span 
              className="badge bg-primary position-absolute top-0 start-0 m-2"
              style={{ zIndex: 10 }}
            >      
              {category}
            </span>
          )}

          {/* برچسب منبع خبر */}
          {/* {sourceName && (
            <span className="badge bg-secondary position-absolute bottom-0 end-0 m-2">
              {sourceName}
            </span>
          )} */}

          <CardBody className="pt-4">
            <CardTitle tag="h5" className="fs-6">{title}</CardTitle>
            <CardText className="text-muted fs-6">{description ? description.slice(0, 100) + '...' : 'متن موجود نیست'}</CardText>
            {sourceName && (
              <div className="text-end">
                <span className="badge bg-secondary">{sourceName}</span>
              </div>
            )}
          </CardBody>
        </Card>
      </motion.div>
    </Link>
  );
};


export default NewsCard;
