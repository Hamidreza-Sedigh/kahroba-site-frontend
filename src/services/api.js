import axios from 'axios';

// ایجاد یک نمونه axios برای تنظیمات پایه
const api = axios.create({
  baseURL: 'http://localhost:8000/api',  // آدرس پایه API
  headers: {
    'Content-Type': 'application/json',
  },
});

// تابع برای دریافت اخبار بر اساس دسته‌بندی
export const getNewsByCategory = (category) => {
  return api.get(`/news?category=${category}`);
};

export const getNewsById = (id) => {
  return api.get(`/news/${id}`);
};


export default api;
