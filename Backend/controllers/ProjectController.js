import Project from "../models/ProjectModel.js";
import ProjectRole from "../models/ProjectRoleModel.js";
import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";

export const getNewestProjects = async (req, res) => {
  try {
    const newestProjects = await Project.findAll({
      limit: 3,
      order: [["projectID", "ASC"]],
      include: [
        {
          model: User,
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
      ],
    });
    res.status(200).json(newestProjects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch newest projects", error });
  }
};
