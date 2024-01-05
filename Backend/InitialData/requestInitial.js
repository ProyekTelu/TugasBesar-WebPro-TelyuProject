import User from "../models/UserModel.js";
import Project from "../models/ProjectModel.js";
import Request from "../models/RequestModel.js";
import Role from "../models/RoleModel.js";


const request = async () => {
    const projectOwner = await Project.findOne({
        where:{
            // projectOwnerID : "130816702",
            projectID : 1,
        },

    

    });
    
    const User1 = await User.findOne({
        where :{
            firstname : "Ani",
        }
    }) 

    const User2= await User.findOne({
        where :{
            firstname : "Citra",
        }
    }) 
    
    const Roles = await Role.findOne({
            where:{
                roleID: 12,
            }
    })

    await Request.create({
        requestID : 5,
        userID : User1.userID,
        projectID : projectOwner.projectID,
        message : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        cv : null,
        status : "pending",
        roleID: Roles.roleID,

    })

    await Request.create({
        requestID : 6,
        userID : User2.userID,
        projectID : projectOwner.projectID,
        message : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        cv : null,
        status : "pending",
        roleID: Roles.roleID,

    })
};

export default request;