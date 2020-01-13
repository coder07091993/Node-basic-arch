const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const appRoot = require("app-root-path");
require("winston-daily-rotate-file");
const logDir = `${appRoot}/logs`;
const { winstonOptions } = require(`../constant/${process.env.NODE_ENV ||
  "default"}`);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const logger = createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.DailyRotateFile(winstonOptions.file),
    new transports.Console(winstonOptions.console)
  ],
  exitOnError: false
});

function logRoutes(router) {
  router.stack.forEach(r => {
    Object.keys(r.route.methods).forEach(method => {
      logger.info(`Path:${r.route.path} - Method:${method}`);
    });
  });
}

module.exports = { logger, logRoutes };
