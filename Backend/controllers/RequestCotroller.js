import Faculty from "../models/FacultyModel.js";
import Request from "../models/RequestModel.js";
import Project from "../models/ProjectModel.js";
import User from "../models/UserModel.js";
import skill from "../models/SkillModel.js";
import ProjectSkillModel from "../models/ProjectModel.js";
import Role from "../models/RoleModel.js";
import ProjectMember from "../models/ProjectMemberModel.js";
import { updateUser } from "./UserController.js";
export const changeStatus = async (req,res) =>{
   try{
    const{status} = req.body;
    await Request.update({
      status,
    },
    {
      where:{
        requestID: req.params.as
      }
    }
    );

    const updateStatus = await Request.findOne({
      where:{
        requestID : req.params.as
      },
      attributes:["status"]
    });
    res.status(200).json(updateStatus);
  }catch (error){
    res.status(500).json({ message: "User failed to be updated", error });
  }


}
export const addFromRequest = async (req,res) =>{
 try{

  const{projectID,userID,roleID} = req.body;
  const newMem = await ProjectMember.create({
    
    userID,
    roleID,
    projectID,

  });
  res.status(201).json(newMem);
 }catch(err){
   console.error("error add Member :", err)
   res.status(500).json({ msg: "Internal Server Error" });
 }


}
export const createRequest = async (req, res) => {
  try {
    const { userID, projectID, roleID, message, cv } = req.body;

    const existingRequest = await Request.findOne({
      where: {
        userID,
        projectID,
        roleID,
        status: "pending",
      },
    });

    if (existingRequest) {
      return res
        .status(400)
        .json({ msg: "Request already exists for this project and role." });
    }

    const newRequest = await Request.create({
      userID,
      projectID,
      roleID,
      message,
      cv,
    });

    res.status(201).json(newRequest);
  } catch (error) {
    console.error("Error creating request:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const RequestByProjectID = async (req, res)=>{
  try{
  const response = await Project.findAll({
    where: {
      projectID: req.params.as,
    },
   include:[{
    model: Request,
      include:[{
        model: User,
        attributes: ["firstName", "lastName"],
      }]
  
   }]
})
res.status(200).json(response);
  }catch(err){
    res.status(500).json({ msg: err.message });
  }
}
export const getMyProjectRequestMember = async (req, res) => {
  try {
    const response = await Project.findAll({
      where: {
        projectOwnerID: req.params.as,
      },

      include: [
        {
          model: Request,
          where:{
              status : "pending"
          },
          include:[ {


            model: User,
            attributes: ["firstName", "lastName"],
          },
          {
            model:Role,
            attributes: ["roleID","name"],
          }
        ],
        },
      ],

      // include: {
      //   model: Request,
      // },,
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
