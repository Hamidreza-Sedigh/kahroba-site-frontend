import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const HotNewsList = ({ items }) => {
  return (
    <>
      <h5 className="section-title">اخبار داغ</h5>
      {items.map((text, index) => (
        <Card key={index} className="hot-news-card">
          <CardBody>
            <CardText>{text}</CardText>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default HotNewsList;
