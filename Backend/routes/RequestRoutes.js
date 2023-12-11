import express from "express";
import { createRequest, getMyProjectRequestMember, getPendingRequest} from "../controllers/RequestCotroller.js";

const router = express.Router();

router.get("/requestMember/:id", getMyProjectRequestMember);
router.post("/createRequest", createRequest);
router.get("/requstmember/requst/:projectID", getPendingRequest);


export default router;
