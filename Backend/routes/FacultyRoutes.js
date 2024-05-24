import express from "express";
import { getAllFaculty, getAllFacultyMajor } from "../controllers/FacultyController.js";
const router = express.Router();

export const maxDuration = 50;
router.get("/faculty", getAllFaculty);
router.get("/landing", getAllFaculty);
router.get("/faculty-major", getAllFacultyMajor)

export default router;
