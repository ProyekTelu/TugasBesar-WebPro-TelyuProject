import express from "express";
// import cors from "cors";
import dotenv from "dotenv";

import fileUpload from "express-fileupload";
import db from "./config/Database.js";

//route
import UserRoute from "./routes/UserRoutes.js";
import AuthRoute from "./routes/AuthRoutes.js";
import FacultyRoute from "./routes/FacultyRoutes.js";
import MajorRoute from "./routes/MajorRoutes.js";
import ProjectRoute from "./routes/ProjectRoutes.js";
import RequestRoute from "./routes/RequestRoutes.js";
import InvitationRoute from "./routes/InvitationRoutes.js";
import ProjectMemberRoute from "./routes/ProjectMemberRoutes.js";

//initial data import
import FacultyAndMajor from "./InitialData/FacultyAndMajor.js";
import Projects from "./InitialData/Projects.js";
import Roles from "./InitialData/Roles.js";
import Skills from "./InitialData/Skills.js";
import Users from "./InitialData/Users.js";
import ProjectRoles from "./InitialData/ProjectRoles.js";
import ProjectSkills from "./InitialData/ProjectSkills.js";
import ProjectMembers from "./InitialData/ProjectMembers.js";
import Invitations from "./InitialData/Invitations.js";
import RequestIntial from "./InitialData/requestInitial.js";

import path from "path";
import fs from "fs";
import { getAllUsers } from "./controllers/UserController.js";

dotenv.config();

const app = express();

// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//   })
// );

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

allowCors(handler);

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(UserRoute);
app.use(AuthRoute);
app.use(FacultyRoute);
app.use(MajorRoute);
app.use(ProjectMemberRoute);
app.use(ProjectRoute);
app.use(RequestRoute);
app.use(InvitationRoute);

const router = express.Router();

router.get("/users", getAllUsers);

//kumpulan inisial data
const initializeData = async () => {
  await db.sync();
  await FacultyAndMajor();
  await Users();
  await Skills();
  await Roles();
  await Projects();
  await ProjectRoles();
  await ProjectSkills();
  await ProjectMembers();
  await Invitations();
  await RequestIntial();
  fs.readdir(`./public/images`, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join("./public/images", file);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file ${file}:`, err);
        } else {
          console.log(`File ${file} deleted successfully.`);
        }
      });
    });
  });
};

app.get("/", (req, res) => {
  res.send("Selamat datang di tel-u Project");
});

//fungsi menjalankan inisial data
const runInisialData = async () => {
  await db.drop();
  await initializeData().then(() => {
    console.log("Inisialisasi Berhasil");
  });
};

// menjalankan fungsi untuk inisial data
// runInisialData();

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => console.log("server listening on port " + PORT));
