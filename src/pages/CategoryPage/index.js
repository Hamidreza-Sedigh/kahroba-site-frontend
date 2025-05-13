import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'reactstrap';
import CategoryMenu from '../../components/CategoryMenu';
import NewsCard from '../../components/NewsCard';
import { getNewsByCategory } from '../../services/api';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getNewsByCategory(categoryName)  // استفاده از تابع جدید
      .then((res) => {
        console.log(res.data)
        setNewsList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('خطا در واکشی اخبار:', err);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <Container fluid dir="rtl">
      <CategoryMenu />
      <h2 className="mb-4 text-center">اخبار دسته: {categoryName}</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner color="primary" />
          <p>در حال بارگذاری اخبار...</p>
        </div>
      ) : (
        <Row>
          {console.log("NEWS TO RENDER:", newsList)}
          {newsList.map((news) => (
            <Col key={news._id} md="4" className="mb-4">
              <NewsCard news ={{
                ...news
              }}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CategoryPage;
