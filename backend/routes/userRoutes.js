import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUserById,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
} from "../controllers/userController";
import express from "express";

const router = express.Router();
router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);
export default router;