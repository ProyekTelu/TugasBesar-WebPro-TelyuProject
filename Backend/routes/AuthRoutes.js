import express from "express";
import { checkMail, login } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/login", login);
router.post("/checkMail", checkMail);

export default router;
