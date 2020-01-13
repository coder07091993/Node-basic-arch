const {
  registerMiddlewares,
  registerRoutes,
  logger,
  logRoutes,
  initDBConnection,
  swagger
} = require("./utils/");

module.exports = function(app, router) {
  registerMiddlewares(app);
  initDBConnection();
  registerRoutes(router);
  logRoutes(router);
  app.use("/", router);
  swagger(app);
  app.use(function(err, req, res, next) {
    logger.error(
      `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
        req.method
      } - ${req.ip}`
    );
    res
      .status(err.status || 500)
      .send({ message: "Server Error", data: null, code: err.status || 500 });
  });
};
