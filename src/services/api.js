import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// ایجاد یک نمونه axios برای تنظیمات پایه
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// تابع برای دریافت اخبار بر اساس دسته‌بندی
export const getNewsByCategory = async (category) => {
  // const response = await api.get(`/news?category=${category}`);
  // return response.data.news; // فقط آرایه‌ی اخبار
  return api.get(`/news?category=${category}`);
};

export const getNewsById = (id) => {
  return api.get(`/news/${id}`);
};

export const fetchLatestNews = async () => {
  const response = await api.get(`/news/latest`);
  return response.data.news; // فقط آرایه اخبار رو بده
  //return api.get(`/news/latest`);
  
};


export default api;
