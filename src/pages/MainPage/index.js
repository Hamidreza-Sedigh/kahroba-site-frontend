import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { fetchLatestNews } from '../../services/api';
import CategoryMenu from '../../components/CategoryMenu';
import NewsCard from '../../components/NewsCard';
import HotNewsList from '../../components/HotNewsList';
import { motion } from 'framer-motion';
import './MainPage.css';


const MainPage = () => {
  const [latestNews, setLatestNews] = useState([]);
  const hotNews = [
    'زلزله شدید در شمال کشور',
    'نرخ دلار به بالاترین میزان رسید'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // فاصله بین کارت‌ها
      },
    },
  };

  // انیمیشن برای هر کارت
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


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
      {/* <CategoryMenu /> */}
      <Row>
        {/* لیست اخبار */}
        <Col md="9" className="news-list">
          {latestNews && latestNews.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {latestNews.map((newsItem) => (
                <motion.div key={newsItem._id} variants={cardVariants}>
                  <NewsCard news={newsItem} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p>در حال بارگذاری اخبار...</p>
          )}
        </Col>

        {/* سایدبار اخبار داغ */}
        <Col md="3" className="sidebar">
          <HotNewsList items={hotNews} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
