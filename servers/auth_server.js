const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const morganLogger = require('./serverLoggers/morganLogger.js');


const app = express();
const PORT = 6000;
const SECRET_KEY = '89044513447896254393432085332044367'; // Замените на свой секретный ключ

const allowedOrigins = [
    'https://yalarba.ru',
    'http://localhost:5173'
]

// Middleware
app.use(morganLogger);
app.use(bodyParser.json());
app.use(cors({
    origin: (origin, callback) => {
        // Разрешить запросы без origin (например, от мобильных приложений или Postman)
        if (!origin) return callback(null, true);

        // Проверить, есть ли домен в списке разрешенных
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
    credentials: true, // Разрешить учетные данные
}));


// Обработка preflight-запросов
app.options('/api/auth/login', cors());

// Подключение к PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});


// Регистрация
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Проверка, существует ли пользователь с таким email
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Хеширование пароля
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создание нового пользователя
        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );

        res.status(201).json({ message: 'User registered successfully', email: newUser.rows[0].email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Авторизация
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Поиск пользователя по email
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Проверка пароля
        const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Создание JWT токена
        const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, { expiresIn: '1h' });


        // Установка HTTP-only куки
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,                   // Обязательно для sameSite: 'none'
            sameSite: 'strict',             // Защита от CSRF
            maxAge: 1000 * 60 * 60 * 24,    // Время жизни куки (1 день)
        });

        const userData = {
            id: user.rows[0].id,
            name: user.rows[0].username,
            email: user.rows[0].email
        }

        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Эндпоинт для проверки токенов
app.get('/check', async (req, res) => {
    try {
        // Извлекаем токен из заголовка Authorization
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).send({ message: 'No token provided' });
        }

        // Разделяем строку на части: Bearer и сам токен
        const token = authorizationHeader.split(' ')[1];

        // Проверяем токен
        const decodedToken = jwt.verify(token, SECRET_KEY);

        // Если всё хорошо, отправляем положительный ответ
        res.send({ message: 'Token is valid', userId: decodedToken.userId });
    } catch (err) {
        // Если произошла ошибка, возвращаем сообщение об ошибке
        res.status(401).send({ message: err.message });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})