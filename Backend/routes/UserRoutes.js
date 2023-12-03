import express from "express";
import { adminOnly, dosenAndAdminOnly } from "../Middleware/AuthUser.js";
import {
  createUser,
  deleteAllUsers,
  deleteUserByNomorInduk,
  getAllStudent,
  getAllUsers,
  getUsersByNomorInduk,
  updateUserByNomorInduk,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/student", getAllStudent);
router.get("/users/:userID", getUsersByNomorInduk);
router.post("/users", createUser);
router.patch("/users/:userID", updateUserByNomorInduk);
router.delete("/users/:userID", adminOnly, deleteUserByNomorInduk);
router.delete("/users",deleteAllUsers);

export default router;
