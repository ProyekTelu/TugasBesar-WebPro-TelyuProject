import express from "express";
import {
  createRequest,
  getMyProjectRequestMember,
  RequestByProjectID
} from "../controllers/RequestCotroller.js";

const router = express.Router();

router.get("/requestMember/:as", getMyProjectRequestMember);
router.get("/requestProjectDetail/:as", RequestByProjectID);
router.post("/createRequest", createRequest);

export default router;
