import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import fileUpload from "express-fileupload";
import db from "./config/Database.js";

import UserSkill from "./models/UserSkillModel.js";
import Invitation from "./models/InvitationModel.js";
import Request from "./models/RequestModel.js";

//route
import UserRoute from "./routes/UserRoutes.js";
import AuthRoute from "./routes/AuthRoutes.js";
import FacultyRoute from "./routes/FacultyRoutes.js";
import MajorRoute from "./routes/MajorRoutes.js";
import ProjectRoute from "./routes/ProjectRoutes.js";
import RequestRoute from "./routes/RequestRoutes.js";

//initial data import
import FacultyAndMajor from "./InitialData/FacultyAndMajor.js";
import Projects from "./InitialData/Projects.js";
import Roles from "./InitialData/Roles.js";
import Skills from "./InitialData/Skills.js";
import Users from "./InitialData/Users.js";
import ProjectRoles from "./InitialData/ProjectRoles.js";
import ProjectSkills from "./InitialData/ProjectSkills.js";
import ProjectMembers from "./InitialData/ProjectMembers.js";

dotenv.config();

const app = express();
app.use(fileUpload());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(UserRoute);
app.use(AuthRoute);
app.use(FacultyRoute);
app.use(MajorRoute);
app.use(ProjectRoute);
app.use(RequestRoute);

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
};

//fungsi menjalankan inisial data
const runInisialData = async () => {
  await db.drop();
  await initializeData().then(() => {
    console.log("Inisialisasi Berhasil");
  });
};

// menjalankan fungsi untuk inisial data
 //runInisialData();

app.listen(process.env.APP_PORT, () =>
  console.log("server listening on port " + process.env.APP_PORT)
);
