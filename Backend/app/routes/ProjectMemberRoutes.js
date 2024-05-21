import express from "express";
import { createProjectMember, deleteProjectMember, getAllProjectMember } from "../controllers/ProjectMemberController.js";

const router = express.Router();

router.get("/projectMember", getAllProjectMember);
router.post("/projectMember", createProjectMember);
router.delete("/projectMember/:projectMemberID", deleteProjectMember);

export default router;