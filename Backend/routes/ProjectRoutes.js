import express from "express";
import {
  getNewestProjects,
  getAllOpenRequestProjects,
  getMyProjects,
  getProjectByProjectID,
} from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/newestProjects", getNewestProjects);
router.get("/openRequestProjects", getAllOpenRequestProjects);
router.get("/projects/:userID", getMyProjects);
router.get("/project/:projectID", getProjectByProjectID);

export default router;
