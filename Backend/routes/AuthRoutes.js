import express from "express";
import { login, logOut } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/login", login);
router.delete("/logout", logOut);

export default router;
