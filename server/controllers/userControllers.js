const User = require('../model/User');
const { sendError } = require('../utils/helper');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const found = await User.findOne({ email });

    if (found) return sendError(res, 'This email already exists', 400);

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email.trim() || !password.trim()) {
    return sendError(res, 'Email or Password is missing', 400);
  }

  const user = await User.findOne({ email });
  if (!user) return sendError(res, 'User Does NOT Exist', 400);

  const isMatch = await user.comparePasswords(password);
  if (!isMatch) return sendError(res, 'Invalid Username or Password', 400);

  const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({
    success: true,
    user: {
      name: user.name,
      email: user.email,
      user_id: user._id,
      token,
    },
  });
};
