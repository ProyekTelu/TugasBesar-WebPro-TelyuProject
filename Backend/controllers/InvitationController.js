import {Op, Sequelize} from "sequelize";
import Invitation from "../models/InvitationModel.js";
import User from "../models/UserModel.js";
import { getUsersByNomorInduk } from "./UserController.js";
import Project from "../models/ProjectModel.js";

export const createInvitation = async (req, res) => {
  try {
    const [invitation, created] = await Invitation.findOrCreate(
      {
        where : {
          senderID: req.body.senderID,
          roleID: req.body.roleID,
          receiverID: req.body.receiverID,
          projectID: req.body.projectID,
          status : "waiting",
          message : req.body.message 
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
    const invitation = await Invitation.findAll({});
    res.status(200).json(invitation)
  } catch (error) {
    res.status(500).json({message : "failed to get all data"}, error)
  }
}

export const getInvitationsByUserID = async (req, res) => {
  try {
    const reqUserID = req.params.userID
    const invitation = await Invitation.findAll({
      where : {
        [Op.or]: [
          { senderID: reqUserID },
          { receiverID: reqUserID }
        ]
      },
      include : [
        {
          model : Project,
          attributes : ["title"]
        },
        {
          model : User,
          as : "sender",
          attributes : ["firstName", "lastName"],
        },
        {
          model : User,
          as : "receiver",
          attributes : ["firstName", "lastName"],
        }
      ],
      order: [
        ['status', 'DESC']
      ]
    })
    res.status(200).json(invitation)
  } catch (error) {
    res.status(500).json({message : "failed to get all data"}, error)
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
    if (req.body.status === "rejected") return res.status(200).json({message : "Invitation has been rejected", invitation}); 
    req.body.userID = req.body.receiverID
    next();
  } catch (error) {
    res.status(500).json({message : "failed to update the status"}, error)   
  }
}








