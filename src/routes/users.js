const { user } = require("../controllers");
module.exports = function(router) {
  router.get("/user/sign-in", user.signIn);
  router.get("/user/sign-out", user.signOut);
};
