import User from "../models/UserModel.js";

export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      nomorInduk: req.body.nomorInduk,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  if (user.role !== "admin") return res.status(403).json({ msg: "You are not admin" });
  next();
};

export const dosenAndAdminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      nomorInduk: req.body.nomorInduk,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  if (user.role !== "admin" && user.role !== "dosen") return res.status(403).json({ msg: "You are not admin or lecturer" });
  next();
};
