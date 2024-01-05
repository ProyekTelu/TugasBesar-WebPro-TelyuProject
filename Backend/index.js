import express from "express";
import cors from "cors";
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

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
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

//fungsi menjalankan inisial data
const runInisialData = async () => {
  await db.drop();
  await initializeData().then(() => {
    console.log("Inisialisasi Berhasil");
  });
};

// menjalankan fungsi untuk inisial data
// runInisialData();

app.listen(process.env.APP_PORT, () =>
  console.log("server listening on port " + process.env.APP_PORT)
);
