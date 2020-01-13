const fs = require("fs");
const path = require("path");
module.exports = function(router) {
  const directoryPath = path.join(__dirname, "../routes");
  try {
    const files = fs.readdirSync(directoryPath);
    files.forEach(function(file) {
      require(`${directoryPath}/${file}`)(router);
    });
  } catch (error) {
    throw "Unable to register routes";
  }
};
