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
            status : "waiting"
        });
    
        await Invitation.create({
            senderID: lecturerUser,
            roleID : 1,
            receiverID : studentUser2,
            projectID: 2,
            status : "waiting"
        });
        
        await Invitation.create({
            senderID: lecturerUser,
            roleID : 4,
            receiverID : studentUser3,
            projectID: 3,
            status : "waiting"
        });

        await Invitation.create({
            senderID: lecturerUser,
            roleID : 5,
            receiverID : studentUser4,
            projectID: 4,
            status : "waiting"
        });
    } catch (e) {
        console.error("Failed to add initial Invitation data:", e);
    }
    
};

export default Invitations; 