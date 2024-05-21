import Skill from "../models/SkillModel.js";

const Skills = async () => {
  try {
    await Skill.create({ name: "JavaScript" });
    await Skill.create({ name: "Python" });
    await Skill.create({ name: "HTML" });
    await Skill.create({ name: "CSS" });
    await Skill.create({ name: "React" });
    await Skill.create({ name: "Node.js" });
    await Skill.create({ name: "SQL" });
    await Skill.create({ name: "MongoDB" });
    await Skill.create({ name: "Git" });
    await Skill.create({ name: "Angular" });

    console.log("Initial Skills added successfully!");
  } catch (e) {
    console.log("Error: " + e.message);
  }
};

export default Skills;
