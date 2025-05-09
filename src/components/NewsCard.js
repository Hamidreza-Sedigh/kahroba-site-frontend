import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, title, summary, image }) => {
  return (
    <Link to={`/news/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className="h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={title} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{summary?.slice(0, 100)}...</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default NewsCard;
