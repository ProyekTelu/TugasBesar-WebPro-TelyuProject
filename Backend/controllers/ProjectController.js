import Project from "../models/ProjectModel.js";
import ProjectRole from "../models/ProjectRoleModel.js";
import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";
import ProjectSkill from "../models/ProjectSkillModel.js";
import Skill from "../models/SkillModel.js";
import { literal } from "sequelize";
import ProjectMember from "../models/ProjectMemberModel.js";

export const createProject = async (req, res) => {
  const {
    projectTitle,
    currentUserId,
    description,
    startDate,
    endDate,
    opreqDate,
    maxMembers,
    groupChatLink,
    skillTags,
    roles,
  } = req.body;

  try {
    const newProject = await Project.create({
      title: projectTitle,
      projectOwnerID: currentUserId,
      description: description,
      startProject: startDate,
      endProject: endDate,
      openUntil: opreqDate,
      totalMember: maxMembers,
      groupLink: groupChatLink,
      projectStatus: "Open Request",
    });

    const projectID = newProject.projectID;

    await Promise.all(
      roles.map(async (roleData) => {
        const [role, created] = await Role.findOrCreate({
          where: { name: roleData.name },
        });
        await ProjectRole.create({
          roleID: role.roleID,
          projectID: projectID,
          quantity: roleData.quantity || 1, // Set default quantity to 1 if not specified
        });

        return role.roleID;
      }),
      skillTags.map(async (skillName) => {
        const [skill, created] = await Skill.findOrCreate({
          where: { name: skillName },
        });

        await ProjectSkill.create({
          skillID: skill.skillID,
          projectID: projectID,
        });

        return skill.skillID;
      })
    );

    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error during project creation:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

export const getNewestProjects = async (req, res) => {
  try {
    const newestProjects = await Project.findAll({
      limit: 3,
      order: [["projectID", "DESC"]],
      where: {
        projectStatus: "Open Request",
      },
      include: [
        {
          model: User,
          as: "projectOwner",
          attributes: ["userID", "firstName", "lastName", "email"],
        },
        {
          model: ProjectRole,
          attributes: ["roleID"],
          include: {
            model: Role,
            attributes: ["name"],
          },
        },
        {
          model: ProjectSkill,
          attributes: ["skillID"],
          include: {
            model: Skill,
            attributes: ["name"],
          },
        },
        {
          model: ProjectMember,
          attributes: ["userID"],
          include: [
            {
              model: User,
              attributes: ["firstName", "lastName", "email", "photoProfileUrl"],
            },
            {
              model: Role,
              attributes: ["name"],
            },
          ],
        },
      ],
      attributes: {
        include: [
          [
            literal(`(
              SELECT COUNT(*)
              FROM projectMember
              WHERE ProjectMember.projectID = Project.projectID
            )`),
            "projectMemberCount",
          ],
        ],
      },
    });

    res.status(200).json(newestProjects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch newest projects", error });
  }
};

export const editProjectDesc = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.description = req.body.newDescription;
    await project.save();

    return res
      .status(200)
      .json({ message: "Project description updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update project description", error });
  }
};

export const editProjectStartProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.startProject = req.body.newStartProject;
    await project.save();

    return res
      .status(200)
      .json({ message: "Project start project updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update project start project", error });
  }
};

export const editProjectEndProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.endProject = req.body.newEndProject;
    await project.save();

    return res
      .status(200)
      .json({ message: "Project end project updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update project end project", error });
  }
};

export const editProjectStatus = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.projectStatus = req.body.newStatus;
    await project.save();

    return res
      .status(200)
      .json({ message: "Project status updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update project status", error });
  }
};

export const editProjectOpenUntil = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.openUntil = req.body.newOpenUntil;
    await project.save();

    return res
      .status(200)
      .json({ message: "Project open until updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update project open until", error });
  }
};

export const editProjectTitle = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.title = req.body.newTitle;
    await project.save();

    return res
      .status(200)
      .json({ message: "Project title updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update project title", error });
  }
};

export const editProjectLink = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.groupLink = req.body.newLink;
    await project.save();

    return res
      .status(200)
      .json({ message: "Project group link updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update project group link", error });
  }
};

export const getAllOpenRequestProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [["projectID", "DESC"]],
      where: {
        projectStatus: "Open Request",
      },
      include: {
        model: User,
        as: "projectOwner",
        attributes: ["firstName", "lastName"],
      },
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

export const getMyProjectsStudent = async (req, res) => {
  try {
    const userId = req.params.userID;
    const projects = await Project.findAll({
      include: [
        {
          model: ProjectMember,
          where: { userID: userId },
          include: {
            model: Role,
            attributes: ["name"],
          },
        },
        {
          model: User,
          as: "projectOwner",
          attributes: ["firstName", "lastName"],
        },
      ],
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

export const getMyProjectsLecturer = async (req, res) => {
  try {
    const userId = req.params.userID;
    const projects = await Project.findAll({
      include: [
        {
          model: ProjectMember,
          include: {
            model: Role,
            attributes: ["name"],
          },
        },
        {
          model: User,
          as: "projectOwner",
          where: { userID: userId },
          attributes: ["firstName", "lastName"],
        },
      ],
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

export const getProjectByProjectID = async (req, res) => {
  try {
    const project = await Project.findOne({
      where: {
        projectID: req.params.projectID,
      },
      include: [
        {
          model: User,
          as: "projectOwner",
          attributes: [
            "userID",
            "firstName",
            "lastName",
            "email",
            "photoProfileUrl",
          ],
        },
        {
          model: ProjectRole,
          attributes: ["roleID", "quantity"],
          include: {
            model: Role,
            attributes: ["name"],
          },
        },
        {
          model: ProjectSkill,
          attributes: ["skillID"],
          include: {
            model: Skill,
            attributes: ["name"],
          },
        },
        {
          model: ProjectMember,
          include: [
            {
              model: User,
              attributes: ["firstName", "lastName", "email", "photoProfileUrl"],
            },
            {
              model: Role,
              attributes: ["name"],
            },
          ],
        },
      ],
      attributes: {
        include: [
          [
            literal(`(
              SELECT COUNT(*)
              FROM projectMember
              WHERE ProjectMember.projectID = Project.projectID
            )`),
            "projectMemberCount",
          ],
        ],
      },
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

export const createProjectMember = async (req, res) => {
  try {
    const [createProjectMember, created] = await ProjectMember.findOrCreate({
      where: {
        userID: req.body.userID,
        roleID: req.body.roleID,
        projectID: req.body.projectID,
      },
    });
    if (created) {
      res.status(201).json({
        message: "User has been succesfully added to the project",
        createProjectMember,
      });
    } else {
      res.status(409).json({ message: "Record already exists" });
    }
  } catch (error) {
    res.status(500).json({
      message: "failed to add new member",
      error: error,
      body: req.body,
    });
  }
};

export const testGetProjectAPI = async (req, res) => {
  try {
    const testGetProjectAPI = await ProjectMember.findAll({
      where: {
        projectID: req.params.projectID,
      },
    });
    res.status(200).json(testGetProjectAPI);
  } catch (error) {
    res.status(500).json({ message: "error dummy", error });
  }
};

export const deleteProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectID);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await project.destroy();
    res.status(200).json("Project deleted");
  } catch (error) {
    res.status(500).json({ message: "API error", error });
  }
};
