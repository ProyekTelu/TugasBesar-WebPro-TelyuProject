import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.nim) {
    return res.status(404).json({ msg: "Please login to your account" });
  }

  const user = await User.findOne({
    where: {
      nim: req.session.nim,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });

  req.nim = user.nim;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      nim: req.session.nim,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  if (user.role !== "admin")
    return res.status(403).json({ msg: "You are not admin" });
  next();
};

export const dosenAndAdminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      nim: req.session.nim,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  if (user.role !== "admin" && user.role !== "dosen")
    return res.status(403).json({ msg: "You are not admin or lecturer" });
  next();
};
