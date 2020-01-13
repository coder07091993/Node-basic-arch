const { responseHandler } = require("../../utils");
module.exports = function(req, res) {
  responseHandler({ statusCode: 200, res, data: null });
};
