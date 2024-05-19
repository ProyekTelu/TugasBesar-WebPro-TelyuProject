import express from "express";
import {
  createProject,
  getNewestProjects,
  getAllOpenRequestProjects,
  getMyProjectsLecturer,
  getProjectByProjectID,
  getMyProjectsStudent,
  editProjectDesc,
  editProjectTitle,
  editProjectStartProject,
  editProjectEndProject,
  editProjectStatus,
  editProjectOpenUntil,
  editProjectLink,
  deleteProjectById,
  createProjectMember,
  testGetProjectAPI,
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
router.delete("/projects/:projectID", deleteProjectById);
router.put("/projects/:projectID/description", editProjectDesc);
router.put("/projects/:projectID/title", editProjectTitle);
router.put("/projects/:projectID/startProject", editProjectStartProject);
router.put("/projects/:projectID/endProject", editProjectEndProject);
router.put("/projects/:projectID/status", editProjectStatus);
router.put("/projects/:projectID/openUntil", editProjectOpenUntil);
router.put("/projects/:projectID/link", editProjectLink);

export default router;
