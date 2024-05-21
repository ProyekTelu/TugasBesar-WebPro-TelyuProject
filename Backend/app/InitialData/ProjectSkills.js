import Project from "../models/ProjectModel.js";
import ProjectSkill from "../models/ProjectSkillModel.js";

const ProjectSkills = async () => {
  try {
    const project1 = await Project.findOne({
      where: { title: "Pengembangan Platform E-pinjem" },
    });

    const project2 = await Project.findOne({
      where: { title: "Pengembangan Platform E-commerce" },
    });

    const project3 = await Project.findOne({
      where: { title: "Pengembangan Teknologi Kesehatan" },
    });
    await ProjectSkill.create({
      projectID: project1.projectID,
      skillID: 1,
    });

    await ProjectSkill.create({
      projectID: project1.projectID,
      skillID: 2,
    });
    await ProjectSkill.create({
      projectID: project1.projectID,
      skillID: 3,
    });

    await ProjectSkill.create({
      projectID: project1.projectID,
      skillID: 4,
    });

    await ProjectSkill.create({
      projectID: project1.projectID,
      skillID: 5,
    });

    await ProjectSkill.create({
      projectID: project1.projectID,
      skillID: 6,
    });

    await ProjectSkill.create({
      projectID: project2.projectID,
      skillID: 7,
    });

    await ProjectSkill.create({
      projectID: project2.projectID,
      skillID: 4,
    });
    await ProjectSkill.create({
      projectID: project2.projectID,
      skillID: 2,
    });

    await ProjectSkill.create({
      projectID: project2.projectID,
      skillID: 1,
    });

    await ProjectSkill.create({
      projectID: project2.projectID,
      skillID: 9,
    });

    await ProjectSkill.create({
      projectID: project2.projectID,
      skillID: 8,
    });

    await ProjectSkill.create({
      projectID: project3.projectID,
      skillID: 2,
    });

    await ProjectSkill.create({
      projectID: project3.projectID,
      skillID: 4,
    });
    await ProjectSkill.create({
      projectID: project3.projectID,
      skillID: 5,
    });
  } catch (e) {
    console.log(e);
  }
};

export default ProjectSkills;
