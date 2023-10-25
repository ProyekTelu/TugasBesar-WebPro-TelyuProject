import User from "../models/UserModel.js";
import argon2d from "argon2";
import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const passwordSesuai = await argon2d.verify(
      user.password,
      req.body.password
    );

    if (!passwordSesuai) return res.status(400).json({ msg: "Wrong password" });

    const userData = {
      nomorInduk: user.nomorInduk,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      kodeDosen: user.kodeDosen,
      fakultas: user.fakultas,
      prodi: user.prodi,
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
