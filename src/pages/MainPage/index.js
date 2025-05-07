import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsCard    from '../../components/NewsCard';
import HotNewsList from '../../components/HotNewsList';
import '../../App.css';

const MainPage = () => {
  const hotNews = [
    'زلزله شدید در شمال کشور',
    'نرخ دلار به بالاترین میزان رسید'
  ];

  return (
    <Container fluid>
      <Row>
        {/* ستون اصلی سمت چپ */}
        <Col md="10" className="main-column">
          <h2 className="section-title">اخبار روز</h2>

          <NewsCard
            image="https://via.placeholder.com/800x400"
            title="تیتر خبر اول"
            summary="متنی کوتاه درباره خبر اول جهت آشنایی سریع با موضوع..."
          />

          <NewsCard
            image="https://via.placeholder.com/800x400"
            title="تیتر خبر دوم"
            summary="خلاصه‌ای از خبر دوم که مخاطب را جذب می‌کند..."
          />
        </Col>

        {/* ستون جانبی سمت راست */}
        <Col md="2" className="side-column">
          <HotNewsList items={hotNews} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
