const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const logger = require('./serverLoggers/winstonLogger.js');
const morganLogger = require('./serverLoggers/morganLogger.js');

const app = express();
const port = 4000;

app.use(cors());
app.use(morganLogger);
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

app.post('/support', async (req, res) => {
    logger.info("req body = " + req.body);
    const { email, text } = req.body;
    try {
        const result = await pool.query('INSERT INTO posts (email, text) VALUES ($1, $2) RETURNING *', [email, text]);
        logger.info("result.rows = " + result.rows);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

app.get('/support', async (req, res) => {
    logger.info("req body = " + req.body);
    try {
        const result = await pool.query('SELECT * FROM posts;');
        logger.info("result.rows = " + result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log("Server is running on port ${port}");
});