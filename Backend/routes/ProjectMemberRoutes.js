import express from "express";
import { createProjectMember, getAllProjectMember } from "../controllers/ProjectMemberController.js";


const router = express.Router();

router.get("/projectMember", getAllProjectMember);
router.post("/projectMember", createProjectMember);

export default router;