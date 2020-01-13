const express = require("express");
const app = express();
const http = require("http");
const router = express.Router();

require("./src/index")(app, router); // Configuring all the middlewares , routes
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
