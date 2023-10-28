import express from "express";
import { getAllFakultas } from "../controllers/FakultasController.js";
const router = express.Router();
router.get("/fakultas", getAllFakultas);

export default router;
