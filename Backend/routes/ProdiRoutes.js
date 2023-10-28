import express from "express";
import {
  getAllProdi,
  getProdiByKodeFakultas,
} from "../controllers/ProdiController.js";
const router = express.Router();
router.get("/prodi/:kodeFakultas", getProdiByKodeFakultas);
router.get("/prodi", getAllProdi);

export default router;
