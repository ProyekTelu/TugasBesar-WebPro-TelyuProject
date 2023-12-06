import express from "express";
import { inviteStudent } from "../controllers/InvitationController.js";
const router = express.Router();
router.post("/invite", inviteStudent);

export default router;
