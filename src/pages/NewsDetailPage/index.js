import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'reactstrap';
import { getNewsById } from '../../services/api';
import ReactHtmlParser from 'react-html-parser';


const NewsDetailPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsById(id)
      .then((res) => {
        setNews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('خطا در دریافت خبر:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center my-5" dir="rtl">
        <Spinner color="primary" />
        <p>در حال بارگذاری خبر...</p>
      </Container>
    );
  }

  if (!news) {
    return (
      <Container className="text-center my-5" dir="rtl">
        <p>خبر مورد نظر یافت نشد.</p>
      </Container>
    );
  }

  return (
    <Container className="my-4" dir="rtl">
      <h2 className="mb-3">{news.title}</h2>
      <p className="text-muted">{new Date(news.date).toLocaleDateString('fa-IR')}</p>
      <p className="lead">{news.description}</p>
      <hr />
      <div className="news-body" dir="rtl" >{ ReactHtmlParser(news.map(ns => (ns.passage))) }</div>
      <div>{ReactHtmlParser(news.passage)}</div>
    </Container>
  );
};

export default NewsDetailPage;
