import express from "express";
import { adminOnly, dosenAndAdminOnly } from "../Middleware/AuthUser.js";
import {
  createUser,
  deleteAllUsers,
  deleteUserByNomorInduk,
  getAllStudent,
  getAllUsers,
  updateUserByNomorInduk,
  searchStudent,
  updateUser,
  getUserById,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/students", getAllStudent);
router.get("/users/:userID", getUserById);
router.post("/users", createUser);
router.patch("/users/:userID", updateUserByNomorInduk);
router.delete("/users/:userID", adminOnly, deleteUserByNomorInduk);
router.delete("/users", deleteAllUsers);
router.get("/students/search/:searchQuery/:projectID", searchStudent);
router.put("/user/:userID", updateUser);

export default router;
