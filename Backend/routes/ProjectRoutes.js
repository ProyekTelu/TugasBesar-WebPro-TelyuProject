import express from "express";
import {
  getNewestProjects,
  getAllOpenRequestProjects,
  getMyProjects,
} from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/newestProjects", getNewestProjects);
router.get("/openRequestProjects", getAllOpenRequestProjects);
router.get("/projects/:userID", getMyProjects);

export default router;
