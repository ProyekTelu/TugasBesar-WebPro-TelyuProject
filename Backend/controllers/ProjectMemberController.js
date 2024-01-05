import ProjectMember from "../models/ProjectMemberModel.js";

export const getAllProjectMember = async(req, res) => {
    try {
        const response = await ProjectMember.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: "Error to get all project member data",
            error
        })
    }
}

export const createProjectMember = async (req, res) => {
    try {
        const [createProjectMember, isNotCreated] = await ProjectMember.findOrCreate({
            where: {
                userID: req.body.userID,
                roleID: req.body.roleID,
                projectID: req.body.projectID,
            },
        });
        if (isNotCreated) {
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

export const deleteProjectMember = async(req, res) => {
    try {
        const response = await ProjectMember.destroy(
            {
                where: {
                    projectMemberID : req.params.projectMemberID
                }
            }
        );
        res.status(200).json({
            message: `Success to delete ${req.params.projectMemberID}`,
            response
        });
    } catch (error) {
        res.status(200).json({
            message: `Failedto delete ${req.params.projectMemberID}`,
            error
        });
    }
}