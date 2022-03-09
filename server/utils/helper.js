exports.sendError = (res, error, status = 401) => {
  //throw Error({ error: error });
  res.status(status).json({ error: error });
};
