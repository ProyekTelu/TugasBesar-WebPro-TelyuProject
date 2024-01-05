import User from "../models/UserModel.js";
import argon2 from "argon2";
import path from "path";
import fs from "fs/promises";

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
      lectureCode: "",
      facultyCode: "FIF",
      majorCode: "SE",
      kelas: "SE-45-02",
      phoneNumber: "0897228290299",
      // photoProfileImage: imageName1,
      // photoProfileUrl: url1,
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
      // photoProfileImage: imageName1,
      // photoProfileUrl: url1,
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
      // photoProfileImage: imageName2,
      // photoProfileUrl: url2,
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
      // photoProfileImage: imageName2,
      // photoProfileUrl: url2,
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
      // photoProfileImage: imageName1,
      // photoProfileUrl: url1,
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
      // photoProfileImage: imageName1,
      // photoProfileUrl: url1,
      role: "student",
    });
  } catch (e) {
    console.error("Failed to add initial User data:", e);
  }
};

export default Users;
