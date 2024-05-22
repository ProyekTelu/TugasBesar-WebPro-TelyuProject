import express from "express";
import {
  InvitationUpdated,
  createInvitation,
  getAllInvitations,
  getInvitationsByUserID,
} from "../controllers/InvitationController.js";
import { createProjectMember } from "../controllers/ProjectMemberController.js";

const router = express.Router();

export const maxDuration = 50;

router.post("/invitation", createInvitation);
router.get("/invitation", getAllInvitations);
router.get("/invitation/:userID", getInvitationsByUserID);
router.post("/invitationResponse", InvitationUpdated, createProjectMember);

export default router;
