module.exports = function(app) {
  const swaggerUi = require("swagger-ui-express");
  const swaggerDocument = require("../swagger.json");
  if (process.env.NODE_ENV != "production")
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
