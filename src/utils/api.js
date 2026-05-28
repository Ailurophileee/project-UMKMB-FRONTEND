// src/utils/api.js
import axios from 'axios';

const API = axios.create({
 // baseURL: 'http://localhost:5000/api', // sesuaikan dengan base URL backend-mu
 baseURL: import.meta.env.VITE_API_URL || 'project-umkmb-backend-production.up.railway.app/api'
});

// 1. Request Interceptor: Otomatis menyisipkan token ke setiap request BE
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 2. Response Interceptor: 🔥 MENANGKAP TOKEN EXPIRED SECARA OTOMATIS
API.interceptors.response.use(
  (response) => response, // Jika request sukses, teruskan saja
  (error) => {
    // Jika backend mengembalikan status 401 atau 403 karena token hangus/invalid
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.warn('Sesi Anda telah berakhir (Token Expired). Mengalihkan ke halaman login...');
      
      localStorage.removeItem('accessToken'); // Hapus token busuk dari storage
      localStorage.removeItem('user');  // Hapus data user jika ada
      
      // Tendang paksa user kembali ke halaman login di browser
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default API;