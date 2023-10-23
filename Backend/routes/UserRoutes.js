import express from "express";
import { adminOnly, dosenAndAdminOnly } from "../Middleware/AuthUser.js";
import {
  createUser,
  deleteUserByNomorInduk,
  getAllUsers,
  getUsersByNomorInduk,
  updateUserByNomorInduk,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", dosenAndAdminOnly, getAllUsers);
router.get("/users/:nomorInduk", getUsersByNomorInduk);
router.post("/users", createUser);
router.patch("/users/:nomorInduk", updateUserByNomorInduk);
router.delete("/users/:nomorInduk", adminOnly, deleteUserByNomorInduk);

export default router;
