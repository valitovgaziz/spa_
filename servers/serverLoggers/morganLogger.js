const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'logs');

// Проверяем, существует ли папка logs, и создаем её, если нет
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Создаем поток для записи логов в файл
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' });

// Настройка Morgan
const morganLogger = morgan('combined', { stream: accessLogStream });

// Экспортируем Morgan
module.exports = morganLogger;