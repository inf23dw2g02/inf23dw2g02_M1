const auth = function (req, res, next) {
  if (req.isAuthenticated() || req.path === '/auth/github/callback') {
    return next();
  }
  res.redirect("/login");
};

module.exports = auth;