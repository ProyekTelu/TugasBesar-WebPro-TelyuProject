import {Op} from "sequelize";
import Invitation from "../models/InvitationModel.js";
import User from "../models/UserModel.js";
import { getUsersByNomorInduk } from "./UserController.js";

export const createInvitation = async (req, res) => {
  try {
    const [invitation, created] = await Invitation.findOrCreate(
      {
        where : {
          senderID: req.body.senderID,
          roleID: req.body.roleID,
          receiverID: req.body.receiverID,
          projectID: req.body.projectID,
          status : req.body.status
        } 
      }
    )
    if (created) {
      res.status(201).json(invitation);   
    } else {
      res.status(409).json({ message: 'Record already exists' });      
    }
  } catch (error) {
    res.status(500).json({message : "failed to create invitation"}, error)
  }
}

export const getAllInvitations = async (req, res) => {
  try {
    const invitation = await Invitation.findAll()
    res.status(200).json(invitation)
  } catch (error) {
    res.status(500).json({message : "failed to get all data"}, error)
  }
}

export const getInvitationsByUserID = async (req, res) => {
  try {
    try {
      const invitation = await Invitation.findAll({
        where : {
          [Op.or]: [
            { senderID: req.params.userID },
            { receiverID: req.params.userID }
          ]
        }
      })
      res.status(200).json(invitation)
    } catch (error) {
      res.status(500).json({message : "failed to get all data"}, error)
    }
  } catch (error) {
    
  }
}

export const InvitationUpdated = async (req, res, next) => {
  try {
      const invitation = Invitation.update(
      {  
        status: req.body.status 
      }, {
      where: {
        invitationID : req.body.invitationID
      }
    });
    if (req.body.status === "rejected") return res.status(200).json({message : "Invitation has been rejected"}); 
    req.body.userID = req.body.receiverID
    next();
  } catch (error) {
    res.status(500).json({message : "failed to update the status"}, error)   
  }
}