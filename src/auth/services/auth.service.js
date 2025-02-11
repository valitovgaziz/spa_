// src/services/auth.service.js
import axios from 'axios';

const API_URL = 'https://yalarba.ru/api';

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  console.log(credentials);
  return response.data;
};

const checkAuth = async (token) => {
  const response = await axios.get(`${API_URL}/auth/check`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { login, checkAuth };