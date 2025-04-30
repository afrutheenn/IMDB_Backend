const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const config = require('../config/Config')

exports.registerUser = async (userData) => {
  let user = await User.findOne({ email: userData.email });
  if (user) {
    throw new ErrorResponse('User already exists', 400);
  }
  user = new User(userData);
  await user.save();
  return this.generateToken(user);
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new ErrorResponse('user not found', 401);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ErrorResponse('Invalid credentials', 401);
  }

  return this.generateToken(user);
};

exports.getCurrentUser = async (userId) => {
  return await User.findById(userId).select('-password');
};

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRE }
  );
};