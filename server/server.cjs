const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Настройка подключения к PostgreSQL
const pool = new Pool({
  user: 'postgres', // Замените на ваше имя пользователя
  host: 'localhost',
  database: 'postgres', // Замените на имя вашей базы данных
  password: 'postgres', // Замените на ваш пароль
  port: 5432,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Маршрут для получения отзывов
app.get('/api/reviews', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

// Маршрут для добавления отзыва
app.post('/api/reviews', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).send('Текст отзыва обязателен');
  }

  try {
    const result = await pool.query(
      'INSERT INTO reviews (text) VALUES ($1) RETURNING *',
      [text]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});