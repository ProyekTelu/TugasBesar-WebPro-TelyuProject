import express from "express";
import { getNewestProjects } from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/newestProjects", getNewestProjects);

export default router;
