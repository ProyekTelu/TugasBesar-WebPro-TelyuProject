import ProjectMember from "../models/ProjectMemberModel.js";

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
            res.status(409).json({
                message: "Record already exists"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "failed to add new member",
            error: error,
            body: req.body,
        });
    }
};