import invitation from "../models/InvitationModel.js";

export const inviteStudent = async (req, res) => {
  try {
    const alreadyInvited = await invitation.findOne({
      where: {
        roleID: req.body.roleID,
        receiverID: req.body.studentID,
        projectID: req.body.projectID,
      },
    });

    if (alreadyInvited) {
      return res.status(404).json("already invited");
    }

    await invitation.create({
      senderID: req.body.projectOwnerID,
      roleID: req.body.roleID,
      receiverID: req.body.studentID,
      projectID: req.body.projectID,
    });

    res.status(200).json("Invitation has been sent");
  } catch (error) {
    res.status(400).json("Failed to create invitation");
  }
};
