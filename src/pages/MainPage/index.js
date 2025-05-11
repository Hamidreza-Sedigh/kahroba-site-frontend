import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { fetchLatestNews } from '../../services/api';
import CategoryMenu from '../../components/CategoryMenu';
import NewsCard from '../../components/NewsCard';
import HotNewsList from '../../components/HotNewsList';
import './MainPage.css';

const MainPage = () => {
  const [latestNews, setLatestNews] = useState([]);
  const hotNews = [
    'زلزله شدید در شمال کشور',
    'نرخ دلار به بالاترین میزان رسید'
  ];


  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchLatestNews();
        console.log("DATA:", data); // test
        setLatestNews(data);  // الان آرایه درسته، بدون ارور map
      } catch (err) {
        console.error("خطا در دریافت اخبار:", err);
      }
    };

    loadNews();
  }, []);
  

  return (
    <Container fluid className="main-page rtl">
      <CategoryMenu /> {/* منوی دسته‌بندی در بالا */}
      <Row>
        
        <Col md="9" className="news-list">
          {latestNews && latestNews.length > 0 ? (
            latestNews.map((newsItem) => (
              <NewsCard key={newsItem._id} news={newsItem} />
            ))
          ) : (
            <p>در حال بارگذاری اخبار...</p>
          )}
        </Col>

        <Col md="3" className="sidebar">
          <HotNewsList items={hotNews} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
