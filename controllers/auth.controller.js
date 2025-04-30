const asyncHandler = require('../utils/asyncHandler');
const authService = require('../services/auth.service');

exports.register = asyncHandler(async (req, res) => {
  const token = await authService.registerUser(req.body);
  res.status(201).json({ success: true, token });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const token = await authService.loginUser(email, password);
  res.status(200).json({ success: true, token });
});

exports.getMe = asyncHandler(async (req, res) => {
  const user = await authService.getCurrentUser(req.user.id);
  res.status(200).json({ success: true, data: user });
});