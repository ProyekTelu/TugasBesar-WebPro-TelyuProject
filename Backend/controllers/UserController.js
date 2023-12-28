import User from "../models/UserModel.js";
import argon2 from "argon2";
import { Op, Sequelize, where } from "sequelize";
import Invitation from "../models/InvitationModel.js";
import Project from "../models/ProjectModel.js";
import path from "path";
import fs from "fs";

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: { exclude: ["photoProfile"] },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllStudent = async (req, res) => {
  try {
    const response = await User.findAll({
      where: {
        role: "student",
      },
      attributes: { exclude: ["photoProfile"] },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getUsersByNomorInduk = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        userID: req.params.userID,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  const {
    nomorInduk,
    firstName,
    lastName,
    email,
    password,
    gender,
    kodeDosen,
    kodeFakultas,
    kodeProdi,
    kelas,
    role,
  } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      nomorInduk: nomorInduk,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      gender: gender,
      kodeDosen: kodeDosen,
      kodeFakultas: kodeFakultas,
      kodeProdi: kodeProdi,
      kelas: kelas,
      role: role,
    });
    res.status(201).json({ msg: "Sign Up Complete" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserByNomorInduk = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUserByNomorInduk = async (req, res) => {
  try {
    await User.destroy({
      where: {
        userID: req.params.userID,
      },
    });
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    await User.destroy({
      where: {},
    });
    res.status(200).json("All Users Have Been Deleted");
  } catch (error) {
    console.log(error);
  }
};

export const searchStudent = async (req, res) => {
  try {
    const searchText = req.params.searchQuery;

    const users = await User.findAll({
      where: {
        role: "Student",
        [Op.or]: [
          { firstName: { [Op.like]: `%${searchText}%` } },
          { lastName: { [Op.like]: `%${searchText}%` } },
          { email: { [Op.like]: `%${searchText}%` } },
        ],
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      userID: req.params.userID,
    },
  });

  if (!user) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";

  if (req.files === null) {
    fileName = user.image;
  } else {
    const file = req.files.file;
    console.log(file);
    // const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });

    // if (fileSize > 5000000)
    //   return res.status(422).json({ msg: "Image must be less than 5 MB" });

    // const filepath = `./public/images/${user.image}`;
    // fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const { firstName, lastName, phoneNumber } = req.body;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await User.update(
      {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        photoProfileName: fileName,
        photoProfileImage: fileName,
        photoProfileUrl: url,
      },
      {
        where: {
          userID: req.params.userID,
        },
      }
    );
    const updatedUser = await User.findOne({
      where: {
        userID: req.params.userID,
      },
      attributes: [
        "firstName",
        "lastName",
        "phoneNumber",
        "photoProfileName",
        "photoProfileImage",
        "photoProfileUrl",
      ],
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "User failed to be updated", error });
  }
};
