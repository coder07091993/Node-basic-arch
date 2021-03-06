const appRoot = require("app-root-path");
module.exports = {
  winstonOptions: {
    file: {
      level: "info",
      filename: `${appRoot}/logs/%DATE%-app.log`,
      datePattern: "YYYY-MM-DD",
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false
    },
    console: {
      level: "debug",
      handleExceptions: true,
      json: false,
      colorize: true
    }
  }
};
