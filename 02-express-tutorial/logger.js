// req => middleware => res
const logger = (req, res, next) => {
  const { method } = req;
  const { url } = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
 
  req.values = { method, url, time }
  // res.send('Middleware')
  next();
};

module.exports = { logger };
