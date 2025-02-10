const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

app.get('/saveReg', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM reviews;');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

app.post('/getByid', async(req, res) => {
    const { text } = req.body;
    try {
        const result = await pool.query('INSERT INTO reviews (text) VALUES ($1) RETURNING *', [text]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});

app.put('/', async(req, res) => {
    const { text } = req.body;
    try {
        const result = await pool.query('INSERT INTO reviews (text) VALUES ($1) RETURNING *', [text]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});


app.listen(port, '0.0.0.0', () => {
    console.log("Server is running on port ${port}");
});
