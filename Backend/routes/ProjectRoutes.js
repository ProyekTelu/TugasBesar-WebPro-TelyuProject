import express from "express";
import {
  getNewestProjects,
  getAllProjects,
} from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/newestProjects", getNewestProjects);
router.get("/projects", getAllProjects);

export default router;
