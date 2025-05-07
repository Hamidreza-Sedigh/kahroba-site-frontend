import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ image, title, summary, id }) => {
  return (
    <Card className="news-card">
      {image && <CardImg top src={image} alt={title} />}
      <CardBody>
        <CardTitle tag="h5">
          <Link to={`/news/${id}`}>{title}</Link> {/* ← لینک به جزئیات */}
        </CardTitle>
        <CardText>{summary}</CardText>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
