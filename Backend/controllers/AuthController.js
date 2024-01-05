import User from "../models/UserModel.js";
import argon2d from "argon2";
import dotenv from "dotenv";
import argon2 from "argon2";
import Faculty from "../models/FacultyModel.js";
import Major from "../models/majorModel.js";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
dotenv.config();

const capitalize = (str) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase());
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email.toLowerCase(),
      },
    });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const passwordSesuai = await argon2d.verify(
      user.password,
      req.body.password
    );

    if (!passwordSesuai) return res.status(400).json({ msg: "Wrong password" });

    const faculty = await Faculty.findOne({
      where: {
        code: user.facultyCode,
      },
    });

    if (!faculty) return res.status(400).json({ msg: "Faculty Not Found" });

    var majorName = null;

    if (user.role === "student") {
      const major = await Major.findOne({
        where: {
          code: user.majorCode,
        },
      });

      if (!major) return res.status(400).json({ msg: "Major Not Found" });

      majorName = major.name;
    }

    const userData = {
      userID: user.userID,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      photoProfileUrl: user.photoProfileUrl,
      photoProfileName: user.photoProfileName,
      photoProfileImage: user.photoProfileImage,
      email: user.email,
      gender: user.gender,
      lectureCode: user.lectureCode,
      facultyCode: user.facultyCode,
      facultyName: faculty.name,
      majorCode: user.majorCode,
      majorName: majorName,
      kelas: user.kelas,
      role: user.role,
    };

    const secretKey = "KKAOKSOA922K32NNAMBASINGK2K2IKA2Bassaj9J2";

    const token = jwt.sign(userData, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const signup = async (req, res) => {
  const {
    phoneNumber,
    firstName,
    lastName,
    email,
    password,
    gender,
    lectureCode,
    facultyCode,
    majorCode,
    kelas,
    role,
  } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      phoneNumber: phoneNumber,
      firstName: capitalize(firstName),
      lastName: capitalize(lastName),
      email: email.toLowerCase(),
      password: hashPassword,
      gender: gender,
      lectureCode: lectureCode === null ? null : lectureCode.toUpperCase(),
      facultyCode: facultyCode,
      majorCode: majorCode,
      kelas: kelas,
      role: role,
    });
    res.status(201).json({ msg: "Sign Up Complete" });
  } catch (error) {
    console.log(error.message);
  }
};

export const checkMail = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    console.log(error.message);
  }
};
