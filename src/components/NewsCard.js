import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const NewsCard = ({ image, title, summary }) => {
  return (
    <Card className="news-card">
      {image && <CardImg top src={image} alt={title} />}
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{summary}</CardText>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
