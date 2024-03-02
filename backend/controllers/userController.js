import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utiils/generateToken.js";

// @desc Auth user and get token
// @route POST api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Auth user and get token
// @route POST api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});

// @desc Logout user/ clear cookie
// @route POST api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc Get user profile
// @route POST api/users
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.json("get User Profile");
});

// @desc update user profile
// @route PUT api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.json("update User Profile");
});

// @desc Get Users
// @route GET api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.json("get Users");
});

// @desc Get user by id
// @route GET api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.json("get User By Id");
});

// @desc Delete user
// @route DELETE api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.json("delete User");
});

// @desc update user
// @route PUT api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.json("update User");
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUserById,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
};
