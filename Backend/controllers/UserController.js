import User from "../models/UserModel.js";
import argon2 from "argon2";
import { Op } from "sequelize";

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
      attributes: { exclude: ["photoProfile"] },
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
