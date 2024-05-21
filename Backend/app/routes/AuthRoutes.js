import express from "express";
import { checkMail, login, signup } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/checkMail", checkMail);

export default router;
