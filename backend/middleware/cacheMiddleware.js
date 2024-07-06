const redisClient = require('../redisClient');

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl || req.url;

  redisClient.get(key, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        redisClient.setex(key, 3600, JSON.stringify(body)); // cache for 1 hour
        res.sendResponse(body);
      };
      next();
    }
  });
};

module.exports = cacheMiddleware;
