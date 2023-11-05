import User from "../models/UserModel.js";
import argon2 from "argon2";

const Users = async () => {
  try {
    const password = "123";

    const hashedPassword = await argon2.hash(password);

    await User.create({
      firstName: "Zaky Admin",
      lastName: "Admin",
      email: "mzakyf@admin.ac.id",
      password: hashedPassword,
      gender: "Male",
      kodeDosen: "",
      kodeFakultas: "FIF",
      kodeProdi: "SE",
      phoneNumber: "0897228290299",
      kelas: "SE-45-02",
      role: "admin",
    });
    await User.create({
      firstName: "Muhammad Zaky",
      lastName: "Fathurahim",
      email: "mzakyf@student.telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Male",
      kodeDosen: "",
      kodeFakultas: "FIF",
      kodeProdi: "SE",
      phoneNumber: "0897228290232",
      kelas: "SE-45-02",
      role: "student",
    });

    await User.create({
      firstName: "Zaky Dosen",
      lastName: "Fathurahim",
      email: "mzakyf@telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Male",
      kodeDosen: "MZF",
      kodeFakultas: "FTE",
      kodeProdi: "",
      phoneNumber: "0897228290232",
      kelas: "",
      role: "lecturer",
    });
  } catch (e) {
    console.error("Failed to add initial User data:", e);
  }
};

export default Users;
