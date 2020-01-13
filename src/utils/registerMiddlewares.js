const config = require("config");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const blacklist = config.get("IP.blacklist");

const corsOptions = {
  origin: function(origin, callback) {
    if (blacklist.indexOf(origin) == -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200
};
function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
}
module.exports = function(app) {
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(compression({ filter: shouldCompress }));
  app.use(cors(corsOptions)); // You can also blacklist or blacklist IP's
  app.use(multer().single("file")); // Can be changed according for multiple files also
};
