import User from "../models/UserModel.js";

const Users = async () => {
  try {
    await User.create({
      nomorInduk: "1234567890",
      firstName: "Zaky Admin",
      lastName: "Admin",
      email: "mzakyf@admin.ac.id",
      password: "ambasing123",
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
      password: "ambasing123",
      gender: "Male",
      kodeDosen: "",
      kodeFakultas: "FIF",
      kodeProdi: "SE",
      kelas: "SE-45-02",
      role: "mahasiswa",
    });
  } catch (e) {
    console.error("Gagal menambahkan data awal User:", e);
  }
};

export default Users;
