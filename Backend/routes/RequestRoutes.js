import express from "express";
import {
  createRequest,
  getMyProjectRequestMember,
  RequestByProjectID,
  existingRequest,
  addFromRequest,
  changeStatus,
} from "../controllers/RequestCotroller.js";
import path from "path";
import Request from "../models/RequestModel.js";
const router = express.Router();

router.get("/requestMember/:as", getMyProjectRequestMember);
router.get("/requestProjectDetail/:as", RequestByProjectID);
router.get("/existingRequest/:userID/:projectID", existingRequest);

//router.post("/createRequest", createRequest);
router.post("/createRequest", (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const file = req.files.cv;
  const ext = path.extname(file.name); //ambil type
  const name = file.name;
  const fileSize = file.data.length;
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/files/${fileName}`;
  const allowedType = [".pdf"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Type must be pdf" });
  if (fileSize > 10000000)
    return res.status(422).json({ msg: "Image must be less than 10 MB" });

  file.mv(`./public/files/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Request.create({
        userID: req.body.userID,
        projectID: req.body.projectID,
        roleID: req.body.roleID,
        message: req.body.message,
        cv: url,
        status: "pending",
      });
      res.status(201).json({ msg: "Request created Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
});
router.post("/createRequest", createRequest);
router.post("/addNewMEM", addFromRequest);
router.patch("/changeStatus/:as", changeStatus);

export default router;
