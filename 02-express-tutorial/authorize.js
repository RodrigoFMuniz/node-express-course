const authorize = (req, res, next) => {
  console.log('AUTHORIZE');
  next();
};

module.exports = authorize;
