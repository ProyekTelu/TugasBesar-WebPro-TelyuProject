import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: [
        "nim",
        "firstName",
        "lastName",
        "email",
        "gender",
        "kodeDosen",
        "fakultas",
        "prodi",
        "kelas",
        "role",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUsersByNim = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        nim: req.params.nim,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  const {
    nim,
    firstName,
    lastName,
    email,
    password,
    gender,
    kodeDosen,
    fakultas,
    prodi,
    kelas,
    role,
  } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      nim: nim,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      gender: gender,
      kodeDosen: kodeDosen,
      fakultas: fakultas,
      prodi: prodi,
      kelas: kelas,
      role: role,
    });
    res.status(201).json({ msg: "Sign Up Complete" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserByNim = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUserByNim = async (req, res) => {
  try {
    await User.destroy(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};
