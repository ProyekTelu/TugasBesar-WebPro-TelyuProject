import express from "express";
import {
  createRequest,
  getMyProjectRequestMember,
} from "../controllers/RequestCotroller.js";

const router = express.Router();

router.get("/requestMember/:as", getMyProjectRequestMember);
router.post("/createRequest", createRequest);

export default router;
