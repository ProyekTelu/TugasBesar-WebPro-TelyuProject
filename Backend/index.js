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
import User from "./models/UserModel.js";

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

app.get("/", async (req, res) => {
  try {
    const response = await User.findAll({
      where: {
        role: "student",
      },
      attributes: { exclude: ["photoProfile"] },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email.toLowerCase(),
      },
    });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const passwordSesuai = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordSesuai) return res.status(400).json({ msg: "Wrong password" });

    const faculty = await Faculty.findOne({
      where: {
        code: user.facultyCode,
      },
    });

    if (!faculty) return res.status(400).json({ msg: "Faculty Not Found" });

    var majorName = null;

    if (user.role === "student") {
      const major = await Major.findOne({
        where: {
          code: user.majorCode,
        },
      });

      if (!major) return res.status(400).json({ msg: "Major Not Found" });

      majorName = major.name;
    }

    const userData = {
      userID: user.userID,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      photoProfileUrl: user.photoProfileUrl,
      photoProfileName: user.photoProfileName,
      photoProfileImage: user.photoProfileImage,
      email: user.email,
      gender: user.gender,
      lectureCode: user.lectureCode,
      facultyCode: user.facultyCode,
      facultyName: faculty.name,
      majorCode: user.majorCode,
      majorName: majorName,
      kelas: user.kelas,
      role: user.role,
    };

    const secretKey = "KKAOKSOA922K32NNAMBASINGK2K2IKA2Bassaj9J2";

    const token = jwt.sign(userData, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token, user: userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
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
