import User from "../models/UserModel.js";
import argon2d from "argon2";

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
      nim: user.nim,
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

    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ msg: "cannot logout" });
    res.status(200).json({ msg: "logout complete" });
  });
};
