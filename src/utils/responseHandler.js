// Can write your own custom response handler here
module.exports = function({ res, data = null, statusCode }) {
  const responseObject = {
    code: statusCode,
    message: httpStatusResponseMessages[statusCode],
    data
  };
  res.status(statusCode).send(responseObject);
};

const httpStatusResponseMessages = {
  400: "BadRequest",
  401: "Unauthorized",
  200: "Success",
  201: "Created"
};

// Take refrence from down below

// const codes = [
//   ["BadRequest", "error", 400],
//   ["Unauthorized", "error", 401],
//   ["PaymentRequired", "error", 402],
//   ["Forbidden", "error", 403],
//   ["NotFound", "error", 404],
//   ["MethodNotAllowed", "error", 405],
//   ["NotAcceptable", "error", 406],
//   ["RequestTimeout", "error", 408],
//   ["Conflict", "error", 409],
//   ["UnprocessableEntity", "error", 422],
//   ["TooManyRequests", "error", 429],
//   ["ServerError", "error", 500],
//   ["NotImplemented", "error", 501],
//   ["BadGateway", "error", 502],
//   ["ServiceUnavailable", "error", 503],
//   ["OK", "success", 200],
//   ["Created", "success", 201],
//   ["Accepted", "success", 202],
//   ["NoContent", "success", 204],
//   ["ResetContent", "success", 205],
//   ["PartialContent", "success", 206],
//   ["Default", "error", 500]
// ];
