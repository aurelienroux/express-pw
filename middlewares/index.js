const logger = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`logger function`);
  next();
};

function requestTime(req, res, next) {
  req.requestTime = Date.now();
  next();
}

module.exports = { logger, requestTime };
