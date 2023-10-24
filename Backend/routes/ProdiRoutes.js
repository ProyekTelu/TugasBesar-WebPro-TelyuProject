import express from "express";
import {
  getAllProdi,
  getProdiByKodeFakultas,
} from "../controllers/ProdiController.js";
const router = express.Router();
router.get("/prodi", getAllProdi);
router.get("/prodi/:kodeFakultas", getProdiByKodeFakultas);

export default router;
