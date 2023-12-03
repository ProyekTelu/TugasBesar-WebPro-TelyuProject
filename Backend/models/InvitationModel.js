import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Project from "./ProjectModel.js";

const { DataTypes } = Sequelize;

const Invitation = db.define(
  "Invitation",
  {
    invitationID: {
      primaryKey: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    senderID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receiverID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Invitation.belongsTo(User, {
  foreignKey: "senderID",
  as: "sender",
  targetKey: "userID",
});

Invitation.belongsTo(User, {
  foreignKey: "receiverID",
  as: "receiver",
  targetKey: "userID",
});

Invitation.belongsTo(Project, {
  foreignKey: "projectID",
  targetKey: "projectID",
});

export default Invitation;
