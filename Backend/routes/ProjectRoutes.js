import express from "express";
import {
  createProject,
  getNewestProjects,
  getAllOpenRequestProjects,
  getMyProjectsLecturer,
  getProjectByProjectID,
  getMyProjectsStudent,
  testGetProjectAPI,
  createProjectMember,
  editProjectDesc,
  editProjectTitle,
} from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/newestProjects", getNewestProjects);
router.get("/openRequestProjects", getAllOpenRequestProjects);
router.get("/student/projects/:userID", getMyProjectsStudent);
router.get("/lecturer/projects/:userID", getMyProjectsLecturer);
router.get("/project/:projectID", getProjectByProjectID);
router.post("/projects", createProject);
router.get("/testProjectAPI/:projectID", testGetProjectAPI);
router.post("/projectMember", createProjectMember);
router.put("/projects/:projectID/description", editProjectDesc);
router.put("/projects/:projectID/title", editProjectTitle);

export default router;
