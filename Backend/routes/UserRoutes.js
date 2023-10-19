import express from "express";
import {
  verifyUser,
  adminOnly,
  dosenAndAdminOnly,
} from "../Middleware/AuthUser.js";
import {
  createUser,
  deleteUserByNim,
  getAllUsers,
  getUsersByNim,
  updateUserByNim,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", verifyUser, dosenAndAdminOnly, getAllUsers);
router.get("/users/:nim", verifyUser, getUsersByNim);
router.post("/users", createUser);
router.patch("/users/:nim", verifyUser, updateUserByNim);
router.delete("/users/:nim", verifyUser, adminOnly, deleteUserByNim);

export default router;
