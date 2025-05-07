import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

const NewsDetailPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <h2>جزئیات خبر شماره {id}</h2>
      <p>
        در اینجا اطلاعات کامل خبر با آیدی {id} نمایش داده خواهد شد. این بخش می‌تواند از سرور یا دیتابیس بارگذاری شود.
      </p>
    </Container>
  );
};

export default NewsDetailPage;
