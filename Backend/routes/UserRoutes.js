import express from "express";
import {
  createUser,
  getUsers,
  getUsersById,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);

export default router;
