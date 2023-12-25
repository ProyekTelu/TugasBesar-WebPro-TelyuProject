import express from "express";
import {
  createRequest,
  getMyProjectRequestMember,
  RequestByProjectID
} from "../controllers/RequestCotroller.js";

const router = express.Router();

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/cv');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});

const upload = multer({ storage: storage });

router.get("/requestMember/:as", getMyProjectRequestMember);
router.get("/requestProjectDetail/:as", RequestByProjectID);
//router.post("/createRequest", createRequest);
router.post('/createRequest', upload.single('cv'), createRequest);

export default router;
