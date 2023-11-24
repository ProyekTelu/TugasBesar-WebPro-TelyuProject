import ProjectRole from "../models/ProjectRoleModel.js";
import Project from "../models/ProjectModel.js";
import Role from "../models/RoleModel.js";

const ProjectRoles = async () => {
  try {
    const project1 = await Project.findOne({
      where: { title: "Project kehidupan pangan" },
    });

    const project2 = await Project.findOne({
      where: { title: "Pengembangan Platform E-learning" },
    });

    const role1 = await Role.findOne({
      where: { name: "Front-End Developer" },
    });
    const role2 = await Role.findOne({
      where: { name: "Back-End Developer" },
    });
    const role3 = await Role.findOne({
      where: { name: "Admin" },
    });

    await ProjectRole.create({
      quantity: 2,
      projectID: project1.projectID,
      roleID: role1.roleID,
    });

    await ProjectRole.create({
      quantity: 2,
      projectID: project1.projectID,
      roleID: role2.roleID,
    });

    await ProjectRole.create({
      quantity: 1,
      projectID: project1.projectID,
      roleID: role3.roleID,
    });

    await ProjectRole.create({
      quantity: 1,
      projectID: project2.projectID,
      roleID: role1.roleID,
    });

    await ProjectRole.create({
      quantity: 1,
      projectID: project2.projectID,
      roleID: role2.roleID,
    });

    await ProjectRole.create({
      quantity: 3,
      projectID: project2.projectID,
      roleID: role3.roleID,
    });
  } catch (err) {
    console.log(err);
  }
};

export default ProjectRoles;
