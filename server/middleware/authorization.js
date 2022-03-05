// const { sendError } = require('../utils/helper');
const jwt = require('jsonwebtoken');

exports.authorize = (req, res, next) => {
  try {
    // Get the token from the header of the req
    const jwtToken = req.header('token');

    // if there is no token
    if (!jwtToken) {
      res.status(403);
      throw new Error('Not Authorized');
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = payload.user_id;
    //console.log(payload);

    next();
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
};
