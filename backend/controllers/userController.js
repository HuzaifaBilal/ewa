import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
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

const registerUser = asyncHandler(async (req, res) => {
  res.json("register User");
});
const logoutUser = asyncHandler(async (req, res) => {
  res.json("logout User");
});
const getUserProfile = asyncHandler(async (req, res) => {
  res.json("get User Profile");
});
const updateUserProfile = asyncHandler(async (req, res) => {
  res.json("update User Profile");
});
const getUsers = asyncHandler(async (req, res) => {
  res.json("get Users");
});
const getUserById = asyncHandler(async (req, res) => {
  res.json("get User By Id");
});
const deleteUser = asyncHandler(async (req, res) => {
  res.json("delete User");
});
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
