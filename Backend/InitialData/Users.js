import User from "../models/UserModel.js";
import argon2 from "argon2";
import fs from "fs/promises";

const Users = async () => {
  try {
    const password = "123";

    const hashedPassword = await argon2.hash(password);

    var profileImage = null;

    var profileImage2 = null;

    try {
      const profileImageBuffer = await fs.readFile("img/hasnan.png");
      profileImage = profileImageBuffer;
      const profileImageBuffer2 = await fs.readFile("img/ijadAril.jpg");
      profileImage2 = profileImageBuffer2;
    } catch (error) {
      console.error("Failed to read profile image file:", error);
    }

    await User.create({
      firstName: "Zaky Admin",
      lastName: "Admin",
      email: "mzakyf@admin.ac.id",
      password: hashedPassword,
      gender: "Male",
      lectureCode: "",
      facultyCode: "FIF",
      majorCode: "SE",
      kelas: "SE-45-02",
      phoneNumber: "0897228290299",
      photoProfile: profileImage,
      role: "admin",
    });
    await User.create({
      firstName: "Muhammad Zaky",
      lastName: "Fathurahim",
      email: "mzakyf@student.telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Male",
      lectureCode: "",
      facultyCode: "FIF",
      majorCode: "SE",
      phoneNumber: "0897228290232",
      kelas: "SE-45-02",
      photoProfile: profileImage,
      role: "student",
    });

    await User.create({
      firstName: "Zaky Dosen",
      lastName: "Fathurahim",
      email: "mzakyf@telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Male",
      lectureCode: "MZF",
      facultyCode: "FTE",
      majorCode: null,
      phoneNumber: "0897228290232",
      kelas: "",
      photoProfile: profileImage2,
      role: "lecturer",
    });

    await User.create({
      firstName: "Budi",
      lastName: "Santoso",
      email: "budisantoso@student.telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Male",
      lectureCode: "",
      facultyCode: "FIF",
      majorCode: "SE",
      kelas: "SE-45-02",
      phoneNumber: "081234567890",
      photoProfile: profileImage2,
      role: "student",
    });

    await User.create({
      firstName: "Ani",
      lastName: "Wahyuni",
      email: "aniwahyuni@student.telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Female",
      lectureCode: "",
      facultyCode: "FIF",
      majorCode: "SE",
      kelas: "SE-45-01",
      phoneNumber: "087654321098",
      photoProfile: profileImage,
      role: "student",
    });

    await User.create({
      firstName: "Citra",
      lastName: "Dewi",
      email: "citradewi@student.telkomuniversity.ac.id",
      password: hashedPassword,
      gender: "Female",
      lectureCode: "",
      facultyCode: "FTE",
      majorCode: "TT",
      kelas: "EE-45-03",
      phoneNumber: "085432109876",
      photoProfile: profileImage,
      role: "student",
    });
  } catch (e) {
    console.error("Failed to add initial User data:", e);
  }
};

export default Users;
