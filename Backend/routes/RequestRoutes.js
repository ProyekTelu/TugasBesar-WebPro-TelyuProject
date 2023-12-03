import express from "express";
import { getMyProjectRequestMember } from "../controllers/RequestCotroller.js";

const router = express.Router();

router.get("/requestMember/:id", getMyProjectRequestMember);

export default router;
