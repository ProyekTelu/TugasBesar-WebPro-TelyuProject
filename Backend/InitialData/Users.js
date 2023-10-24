import User from "../models/UserModel.js";
import argon2 from "argon2";

const Users = async () => {
  try {
    const password = "ambasing123";

    const hashedPassword = await argon2.hash(password);

    await User.create({
      nomorInduk: "1234567890",
      firstName: "Zaky Admin",
      lastName: "Admin",
      email: "mzakyf@admin.ac.id",
      password: hashedPassword,
      gender: "Male",
      kodeDosen: "",
      kodeFakultas: "FIF",
      kodeProdi: "SE",
      kelas: "SE-45-02",
      role: "admin",
    });

    await User.create({
      nomorInduk: "1302213067",
      firstName: "Muhammad Zaky",
      lastName: "Fathurahim",
      email: "mzakyf@student.telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Male",
      kodeDosen: "",
      kodeFakultas: "FIF",
      kodeProdi: "SE",
      kelas: "SE-45-02",
      role: "mahasiswa",
    });
  } catch (e) {
    console.error("Failed to add initial User data:", e);
  }
};

export default Users;
