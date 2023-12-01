import express from "express";
import {
  getNewestProjects,
  getAllOpenRequestProjects,
  getMyProjectsLecturer,
  getProjectByProjectID,
  getMyProjectsStudent,
} from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/newestProjects", getNewestProjects);
router.get("/openRequestProjects", getAllOpenRequestProjects);
router.get("/student/projects/:userID", getMyProjectsStudent);
router.get("/lecturer/projects/:userID", getMyProjectsLecturer);
router.get("/project/:projectID", getProjectByProjectID);

export default router;
