import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Email tidak ditemukan" });
    }

    const passwordSesuai = password === user.password;

    if (!passwordSesuai) {
      return res.status(401).json({ error: "Password atau Email tidak benar" });
    }

    const secretKey = "telyu-project-skuy";
    const algorithm = "HS256";

    const userData = {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
      gender: user.gender,
    };

    const token = jwt.sign(userData, secretKey, {
      algorithm: algorithm,
      expiresIn: "1m",
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
