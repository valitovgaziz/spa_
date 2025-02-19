// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yalarba.ru/',
  withCredentials: true, // Это важно для работы с HTTP-only куки
});

export default instance;