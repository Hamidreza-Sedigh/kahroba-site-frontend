import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fa'; // برای نمایش به زبان فارسی
import relativeTime from 'dayjs/plugin/relativeTime';

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
      <Card className="shadow-sm mb-3">
        {image && (
          <img src={image} className="card-img-top" alt={title} style={{ maxHeight: '200px', objectFit: 'cover' }} />
        )}
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description ? description.slice(0, 100) + '...' : 'متن موجود نیست'}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};


export default NewsCard;
