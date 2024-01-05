import ProjectMember from "../models/ProjectMemberModel.js";
import User from "../models/UserModel.js";

const ProjectMembers = async () => {
  try {
    const user1 = await User.findOne({
      where: {
        email: "mzakyf@student.telkomuniversity.ac.id",
      },
    });

    await ProjectMember.create({
      userID: user1.userID,
      roleID: 12,
      projectID: 1,
    });

    await ProjectMember.create({
      userID: user1.userID,
      roleID: 4,
      projectID: 2,
    });

    await ProjectMember.create({
      userID: user1.userID,
      roleID: 2,
      projectID: 3,
    });

    const user2 = await User.findOne({
      where: {
        email: "budisantoso@student.telkomuniversity.ac.id",
      },
    });

    await ProjectMember.create({
      userID: user2.userID,
      roleID: 1,
      projectID: 1,
    });
  } catch (e) {
    console.log(e);
  }
};



export default ProjectMembers;
