import express from "express";
import {
  createRequest,
  getMyProjectRequestMember,
  RequestByProjectID,
  existingRequest,
  addFromRequest,
  changeStatus,
} from "../controllers/RequestCotroller.js";
import Request from "../models/RequestModel.js";
const router = express.Router();
import { downloadPdf } from "../controllers/RequestCotroller.js";

export const maxDuration = 50;

router.get("/requestMember/:as", getMyProjectRequestMember);
router.get("/requestProjectDetail/:as", RequestByProjectID);
router.get("/existingRequest/:userID/:projectID", existingRequest);
router.post("/createRequest", createRequest);
router.post("/addNewMEM", addFromRequest);
router.patch("/changeStatus/:as", changeStatus);
router.get('/request/:id/download', downloadPdf);

export default router;
