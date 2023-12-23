import express from "express";
import {
  createRequest,
  getMyProjectRequestMember,
  RequestByProjectID,
  addFromRequest,
  changeStatus,
} from "../controllers/RequestCotroller.js";

const router = express.Router();

router.get("/requestMember/:as", getMyProjectRequestMember);
router.get("/requestProjectDetail/:as", RequestByProjectID);
router.post("/createRequest", createRequest);
router.post("/addNewMEM", addFromRequest);
router.patch("/changeStatus/:as", changeStatus);

export default router;
