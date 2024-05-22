import express from "express";
import { getAllFaculty } from "../controllers/FacultyController.js";
const router = express.Router();

export const maxDuration = 50;
router.get("/faculty", getAllFaculty);
router.get("/landing", getAllFaculty);

export default router;
