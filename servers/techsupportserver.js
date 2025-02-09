const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

app.post('/support', async (req, res) => {
    const { email, text } = req.body;
    try {
        const result = await pool.query('INSERT INTO posts (email, text) VALUES ($1, $2) RETURNING *', [email, text]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

app.get('/support', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts;');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

app.listen(port, '0.0.0.0', () => {
    console.log("Server is running on port ${port}");
});