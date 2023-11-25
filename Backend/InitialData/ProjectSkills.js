import ProjectSkill from "../models/ProjectSkillModel.js";

const ProjectSkills = async () => {
  try {
    await ProjectSkill.create({
      projectID: 1,
      skillID: 1,
    });

    await ProjectSkill.create({
      projectID: 1,
      skillID: 2,
    });
    await ProjectSkill.create({
      projectID: 1,
      skillID: 3,
    });

    await ProjectSkill.create({
      projectID: 1,
      skillID: 4,
    });

    await ProjectSkill.create({
      projectID: 1,
      skillID: 5,
    });

    await ProjectSkill.create({
      projectID: 1,
      skillID: 6,
    });

    await ProjectSkill.create({
      projectID: 2,
      skillID: 7,
    });

    await ProjectSkill.create({
      projectID: 2,
      skillID: 4,
    });
    await ProjectSkill.create({
      projectID: 2,
      skillID: 2,
    });

    await ProjectSkill.create({
      projectID: 2,
      skillID: 1,
    });

    await ProjectSkill.create({
      projectID: 2,
      skillID: 9,
    });

    await ProjectSkill.create({
      projectID: 2,
      skillID: 8,
    });

    await ProjectSkill.create({
      projectID: 3,
      skillID: 2,
    });

    await ProjectSkill.create({
      projectID: 3,
      skillID: 4,
    });
    await ProjectSkill.create({
      projectID: 3,
      skillID: 5,
    });
  } catch (e) {
    console.log(e);
  }
};

export default ProjectSkills;
