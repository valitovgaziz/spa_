const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');


const logDir = path.join(__dirname, 'logs');

// Проверяем, существует ли папка logs, и создаем её, если нет
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Настройка Winston
const logger = winston.createLogger({
  level: 'info', // Уровень логирования
  format: winston.format.combine(
    winston.format.timestamp(), // Добавляем временную метку
    winston.format.json() // Формат вывода (JSON)
  ),
  transports: [
    // Логи ошибок в отдельный файл
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    // Все логи в отдельный файл
    new winston.transports.File({ filename: 'logs/combined.log' }),
    // Ротация логов
    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    // Вывод в консоль (только для разработки)
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

// Логирование необработанных исключений и промисов
logger.exceptions.handle(
  new winston.transports.File({ filename: 'logs/exceptions.log' })
);
logger.rejections.handle(
  new winston.transports.File({ filename: 'logs/rejections.log' })
);

// Экспортируем логгер
module.exports = logger;