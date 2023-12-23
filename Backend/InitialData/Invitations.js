import Invitation from "../models/InvitationModel.js";
import User from "../models/UserModel.js";

const Invitations = async () => {
    try {

        const lecturer = await User.findOne({
            where: {
                email: "mzakyf@telkomuniversity.ac.id",
            },
        });

        const student1 = await User.findOne({
            where: {
                email: "aniwahyuni@student.telkomuniversity.ac.id",
            },
        });

        const student2 = await User.findOne({
            where: {
                email: "budisantoso@student.telkomuniversity.ac.id",
            },
        });

        const student3 = await User.findOne({
            where: {
                email: "citradewi@student.telkomuniversity.ac.id",
            },
        });

        const student4 = await User.findOne({
            where: {
                email: "mzakyf@student.telkomuniversity.ac.id",
            },
        });

        if (!lecturer || !student1) return;
        
        const lecturerUser = lecturer.userID;
        const studentUser1 = student1.userID;
        const studentUser2 = student2.userID;
        const studentUser3 = student3.userID;
        const studentUser4 = student4.userID;

        await Invitation.create({
            senderID: lecturerUser,
            roleID : 3,
            receiverID : studentUser1,
            projectID: 1,
            status : "waiting",
            message : "I trust this message finds you in good health and high spirits. I am reaching out to you with an exciting opportunity that I believe aligns perfectly with your skills and expertise.\n\nOur team is currently working on a project called \"[Project Name],\" and after careful consideration, I am impressed by your abilities and would be honored to have you on board.\n\nHere are some key details about the project:\n\n- **Project Name:** [Project Name]\n- **Project Description:** [Brief description of the project]\n- **Intended Role for You:** [Your intended role in the project]\n\nYour unique talents and capabilities would undoubtedly contribute significantly to our project's success. I am extending an invitation for you to join us as a valued team member.\n\nShould you be interested in exploring this opportunity further, kindly let me know, and I will send you a formal invitation. Feel free to reach out if you have any questions or require additional information about the project.\n\nI am enthusiastic about the prospect of working together and creating something exceptional. Looking forward to your positive response!"
        });

        await Invitation.create({
            senderID: lecturerUser,
            roleID : 3,
            receiverID : studentUser1,
            projectID: 2,
            status : "waiting",
            message : "I trust this message finds you in good health and high spirits. I am reaching out to you with an exciting opportunity that I believe aligns perfectly with your skills and expertise.\n\nOur team is currently working on a project called \"[Project Name],\" and after careful consideration, I am impressed by your abilities and would be honored to have you on board.\n\nHere are some key details about the project:\n\n- **Project Name:** [Project Name]\n- **Project Description:** [Brief description of the project]\n- **Intended Role for You:** [Your intended role in the project]\n\nYour unique talents and capabilities would undoubtedly contribute significantly to our project's success. I am extending an invitation for you to join us as a valued team member.\n\nShould you be interested in exploring this opportunity further, kindly let me know, and I will send you a formal invitation. Feel free to reach out if you have any questions or require additional information about the project.\n\nI am enthusiastic about the prospect of working together and creating something exceptional. Looking forward to your positive response!"
        });

        await Invitation.create({
            senderID: lecturerUser,
            roleID : 3,
            receiverID : studentUser1,
            projectID: 3,
            status : "waiting",
            message : "I trust this message finds you in good health and high spirits. I am reaching out to you with an exciting opportunity that I believe aligns perfectly with your skills and expertise.\n\nOur team is currently working on a project called \"[Project Name],\" and after careful consideration, I am impressed by your abilities and would be honored to have you on board.\n\nHere are some key details about the project:\n\n- **Project Name:** [Project Name]\n- **Project Description:** [Brief description of the project]\n- **Intended Role for You:** [Your intended role in the project]\n\nYour unique talents and capabilities would undoubtedly contribute significantly to our project's success. I am extending an invitation for you to join us as a valued team member.\n\nShould you be interested in exploring this opportunity further, kindly let me know, and I will send you a formal invitation. Feel free to reach out if you have any questions or require additional information about the project.\n\nI am enthusiastic about the prospect of working together and creating something exceptional. Looking forward to your positive response!"
        });

        await Invitation.create({
            senderID: lecturerUser,
            roleID : 4,
            receiverID : studentUser1,
            projectID: 1,
            status : "waiting",
            message : "I trust this message finds you in good health and high spirits. I am reaching out to you with an exciting opportunity that I believe aligns perfectly with your skills and expertise.\n\nOur team is currently working on a project called \"[Project Name],\" and after careful consideration, I am impressed by your abilities and would be honored to have you on board.\n\nHere are some key details about the project:\n\n- **Project Name:** [Project Name]\n- **Project Description:** [Brief description of the project]\n- **Intended Role for You:** [Your intended role in the project]\n\nYour unique talents and capabilities would undoubtedly contribute significantly to our project's success. I am extending an invitation for you to join us as a valued team member.\n\nShould you be interested in exploring this opportunity further, kindly let me know, and I will send you a formal invitation. Feel free to reach out if you have any questions or require additional information about the project.\n\nI am enthusiastic about the prospect of working together and creating something exceptional. Looking forward to your positive response!"
        });
    
        await Invitation.create({
            senderID: lecturerUser,
            roleID : 1,
            receiverID : studentUser2,
            projectID: 2,
            status : "waiting",
            message : "I trust this message finds you in good health and high spirits. I am reaching out to you with an exciting opportunity that I believe aligns perfectly with your skills and expertise.\n\nOur team is currently working on a project called \"[Project Name],\" and after careful consideration, I am impressed by your abilities and would be honored to have you on board.\n\nHere are some key details about the project:\n\n- **Project Name:** [Project Name]\n- **Project Description:** [Brief description of the project]\n- **Intended Role for You:** [Your intended role in the project]\n\nYour unique talents and capabilities would undoubtedly contribute significantly to our project's success. I am extending an invitation for you to join us as a valued team member.\n\nShould you be interested in exploring this opportunity further, kindly let me know, and I will send you a formal invitation. Feel free to reach out if you have any questions or require additional information about the project.\n\nI am enthusiastic about the prospect of working together and creating something exceptional. Looking forward to your positive response!"
        });
        
        await Invitation.create({
            senderID: lecturerUser,
            roleID : 4,
            receiverID : studentUser3,
            projectID: 3,
            status : "waiting",
            message : "I trust this message finds you in good health and high spirits. I am reaching out to you with an exciting opportunity that I believe aligns perfectly with your skills and expertise.\n\nOur team is currently working on a project called \"[Project Name],\" and after careful consideration, I am impressed by your abilities and would be honored to have you on board.\n\nHere are some key details about the project:\n\n- **Project Name:** [Project Name]\n- **Project Description:** [Brief description of the project]\n- **Intended Role for You:** [Your intended role in the project]\n\nYour unique talents and capabilities would undoubtedly contribute significantly to our project's success. I am extending an invitation for you to join us as a valued team member.\n\nShould you be interested in exploring this opportunity further, kindly let me know, and I will send you a formal invitation. Feel free to reach out if you have any questions or require additional information about the project.\n\nI am enthusiastic about the prospect of working together and creating something exceptional. Looking forward to your positive response!"
        });

        await Invitation.create({
            senderID: lecturerUser,
            roleID : 5,
            receiverID : studentUser4,
            projectID: 4,
            status : "waiting",
            message : "I trust this message finds you in good health and high spirits. I am reaching out to you with an exciting opportunity that I believe aligns perfectly with your skills and expertise.\n\nOur team is currently working on a project called \"[Project Name],\" and after careful consideration, I am impressed by your abilities and would be honored to have you on board.\n\nHere are some key details about the project:\n\n- **Project Name:** [Project Name]\n- **Project Description:** [Brief description of the project]\n- **Intended Role for You:** [Your intended role in the project]\n\nYour unique talents and capabilities would undoubtedly contribute significantly to our project's success. I am extending an invitation for you to join us as a valued team member.\n\nShould you be interested in exploring this opportunity further, kindly let me know, and I will send you a formal invitation. Feel free to reach out if you have any questions or require additional information about the project.\n\nI am enthusiastic about the prospect of working together and creating something exceptional. Looking forward to your positive response!"
        });
    } catch (e) {
        console.error("Failed to add initial Invitation data:", e);
    }
    
};

export default Invitations; 