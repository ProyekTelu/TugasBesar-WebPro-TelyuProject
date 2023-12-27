import Project from "../models/ProjectModel.js";
import ProjectRole from "../models/ProjectRoleModel.js";
import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";
import ProjectSkill from "../models/ProjectSkillModel.js";
import Skill from "../models/SkillModel.js";
import { literal } from "sequelize";

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
    roleTags,
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

    // Process roles and skills
    await Promise.all(
      roleTags.map(async (roleName) => {
        const [role, created] = await Role.findOrCreate({
          where: { name: roleName },
        });

        // Role is created, associate with the project
        await ProjectRole.create({
          roleID: role.roleID,
          projectID: projectID,
        });

        return role.roleID;
      }),
      skillTags.map(async (skillName) => {
        const [skill, created] = await Skill.findOrCreate({
          where: { name: skillName },
        });

        // Skill is created, associate with the project
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
      order: [["projectID", "ASC"]],
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

export const getAllOpenRequestProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [["projectID", "DESC"]],
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
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};
