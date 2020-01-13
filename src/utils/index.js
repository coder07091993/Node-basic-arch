const initDBConnection = require("./db");
const { logger, logRoutes } = require("./winston");
const registerMiddlewares = require("./registerMiddlewares");
const registerRoutes = require("./registerRoutes");
const swagger = require("./swagger");
const responseHandler = require("./responseHandler");

module.exports = {
  initDBConnection,
  logRoutes,
  logger,
  registerMiddlewares,
  responseHandler,
  registerRoutes,
  swagger
};
