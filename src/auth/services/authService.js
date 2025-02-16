// src/auth/services/auth.service.js
import axios from 'axios';

const login = async (credentials) => {
  const response = await axios.post('/auth/login', credentials, {
    'Content-Type': 'application/json'
  });
  return response.data;
};

const checkAuth = async (token) => {
  const response = await axios.get('/auth/check', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { login, checkAuth };