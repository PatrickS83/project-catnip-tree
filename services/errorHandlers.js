const notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
};

module.exports = { notFound, errorHandler };
