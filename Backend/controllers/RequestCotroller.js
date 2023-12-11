import Faculty from "../models/FacultyModel.js";
import Request from "../models/RequestModel.js";
import Project from "../models/ProjectModel.js";
import User from "../models/UserModel.js";
import skill from "../models/SkillModel.js"
import ProjectSkillModel from "../models/ProjectModel.js";
import Role from "../models/RoleModel.js";

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
      return res.status(400).json({ msg: "Request already exists for this project and role." });
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
    console.error('Error creating request:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const getMyProjectRequestMember = async (req, res) => {
  try {
    const response = await Project.findAll({
      where: {
        projectOwnerID: req.params.id,
      },

      include:[
        {
          model:Request,
          attributes: ["status", "cv","message","requestID"],
              include:{
                model:skill,
                attributes: ["skillID","name"],
              },
        },
      ]

      // include: {
      //   model: Request,
      // },,

    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }

};


export const getPendingRequest = async (req,res)=>{
  try{

 
    // const userID =  req.params.userID;
    const reqPendingRequst = await Project.findAll({
      // where:{
      //     status:"pending"
      // },  

        include:{
          model:Request,
            
            
    }
    });
     
     res.status(200).json(reqPendingRequst);
    
  }
    catch (error) {
      res.status(500).json({ message: "Failed to fetch projects", error });
  }


};

   // const projectOwnerID = req.params.projectOwnerID ;
    // const { requestID ,userID,roleID, message, cv,projectID, status} = req.body;

//where :{
  //       status: "pending",
  //     },
  //     include:{
  //       Project

  //     }
  //     where: {
  //       requestID,
  //       projectOwnerID: projectOwnerID,
  //       userID,
  //       projectID,
  //       roleID,
  //       message,
  //       cv,
  //       status: "pending"

  //     },include:Project
  //     include:[{
  //       model:Project,
  //       where:{projectOwnerID: projectOwnerID},

  //     },
  //   ],

  //   include: [
  //     {
  //     model:Project,
  //     where:{projectID: projectID},
  //     attributes:["title"],
  //   },
  // ],

