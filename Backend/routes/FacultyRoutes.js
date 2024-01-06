import express from "express";
import { getAllFaculty } from "../controllers/FacultyController.js";
const router = express.Router();
router.get("/faculty", getAllFaculty);
router.get("/landing", getAllFaculty);

export default router;
