const config = require("config");
const mongoose = require("mongoose");
const dbURI = config.get("Database.uri");
const { logger } = require("./winston");

module.exports = function() {
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
  // When successfully connected
  mongoose.connection.on("connected", function() {
    logger.info("Mongoose default connection open to " + dbURI);
  });
  // If the connection throws an error
  mongoose.connection.on("error", function(err) {
    logger.info("Mongoose default connection error: " + err);
  });
  // When the connection is disconnected
  mongoose.connection.on("disconnected", function() {
    logger.info("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      logger.info(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit(0);
    });
  });
};
