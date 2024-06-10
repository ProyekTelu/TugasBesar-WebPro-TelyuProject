import Faculty from "../models/FacultyModel.js";
import Request from "../models/RequestModel.js";
import Project from "../models/ProjectModel.js";
import User from "../models/UserModel.js";
import skill from "../models/SkillModel.js";
import ProjectSkillModel from "../models/ProjectModel.js";
import Role from "../models/RoleModel.js";
import ProjectMember from "../models/ProjectMemberModel.js";
import path from "path";
import { updateUser } from "./UserController.js";
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

export const downloadPdf = async (req, res) => {
  try {
    const requestId = req.params.id;

    // Cari request berdasarkan ID
    const request = await Request.findOne({
      where: { requestID: requestId },
      attributes: ["cv"],
    });

    if (!request) {
      return res.status(404).json({ msg: "Request not found" });
    }

    const cvBuffer = request.cv;
    if (!cvBuffer) {
      return res.status(404).json({ msg: "CV not found" });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=cv_${requestId}.pdf`
    );
    res.send(cvBuffer);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

export const changeStatus = async (req, res) => {
  try {
    const { status } = req.body;
    await Request.update(
      {
        status,
      },
      {
        where: {
          requestID: req.params.as,
        },
      }
    );

    const updateStatus = await Request.findOne({
      where: {
        requestID: req.params.as,
      },
      attributes: ["status"],
    });
    res.status(200).json(updateStatus);
  } catch (error) {
    res.status(500).json({ message: "User failed to be updated", error });
  }
};

export const addFromRequest = async (req, res) => {
  try {
    const { projectID, userID, roleID } = req.body;
    const newMem = await ProjectMember.create({
      userID,
      roleID,
      projectID,
    });
    res.status(201).json(newMem);
  } catch (err) {
    console.error("error add Member :", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const createRequest = async (req, res) => {
  let fileUrl = null;

  console.log(req.body);

  try {
    const existingRequest = await Request.findOne({
      where: {
        userID: req.body.userID,
        projectID: req.body.projectID,
        roleID: req.body.roleID,
      },
    });

    if (existingRequest) {
      return res
        .status(409)
        .json({ msg: "Request for the same role already exists" });
    }

    if (req.files && req.files.cv) {
      const file = req.files.cv;
      const ext = path.extname(file.name);
      const fileSize = file.data.length;
      const fileName = `requestDocument/${file.md5}${ext}`;
      const allowedType = [".pdf", ".docx"];

      if (!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Type must be pdf or docx" });
      }

      if (fileSize > 100000000) {
        return res.status(422).json({ msg: "File must be less than 100 MB" });
      }

      const fileUpload = bucket.file(fileName);
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      blobStream.on("error", (err) => {
        return res.status(500).json({ msg: err.message });
      });

      blobStream.on("finish", async () => {
        fileUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
        try {
          await Request.create({
            userID: req.body.userID,
            projectID: req.body.projectID,
            roleID: req.body.roleID,
            message: req.body.message,
            cv: fileUrl,
            status: "pending",
          });
          res.status(201).json({ msg: "Request created Successfully" });
        } catch (error) {
          console.log(error.message);
          res.status(500).json({ msg: error.message });
        }
      });

      blobStream.end(file.data);
    } else {
      await Request.create({
        userID: req.body.userID,
        projectID: req.body.projectID,
        roleID: req.body.roleID,
        message: req.body.message,
        cv: fileUrl,
        status: "pending",
      });
      res.status(201).json({ msg: "Request created Successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
};

export const RequestByProjectID = async (req, res) => {
  try {
    const response = await Project.findAll({
      where: {
        projectID: req.params.as,
      },
      include: [
        {
          model: Request,
          include: [
            {
              model: User,
              attributes: ["firstName", "lastName"],
            },
          ],
        },
      ],
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getMyProjectRequestMember = async (req, res) => {
  try {
    const response = await Project.findAll({
      where: {
        projectOwnerID: req.params.as,
      },

      include: [
        {
          model: Request,
          where: {
            status: "pending",
          },
          include: [
            {
              model: User,
              attributes: ["firstName", "lastName"],
            },
            {
              model: Role,
              attributes: ["roleID", "name"],
            },
          ],
        },
      ],

      // include: {
      //   model: Request,
      // },,
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const existingRequest = async (req, res) => {
  try {
    const { userID, projectID } = req.params;

    const existingRequest = await Request.findOne({
      where: {
        userID,
        projectID,
        status: "pending",
      },
    });

    res.json({ isRequested: !!existingRequest });
  } catch (error) {
    console.error("Error checking request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
