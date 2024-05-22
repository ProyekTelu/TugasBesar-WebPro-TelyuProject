import express from "express";
import {
  getAllMajor,
  getMajorByFacultyCode,
} from "../controllers/MajorController.js";

const router = express.Router();

export const maxDuration = 50;
router.get("/major/:facultyCode", getMajorByFacultyCode);
router.get("/major", getAllMajor);

export default router;
