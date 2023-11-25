import Faculty from "../models/FacultyModel.js";
import Major from "../models/majorModel.js";

const FacultyAndMajor = async () => {
  try {
    await Faculty.create({
      name: "Teknik Elektro",
      code: "FTE",
    });

    await Faculty.create({
      name: "Informatika",
      code: "FIF",
    });

    await Faculty.create({
      name: "Rekayasa Industri",
      code: "FRI",
    });

    await Faculty.create({
      name: "Ilmu Terapan",
      code: "FIT",
    });

    await Faculty.create({
      name: "Industri Kreatif",
      code: "FIK",
    });

    await Faculty.create({
      name: "Ekonomi dan Bisnis",
      code: "FEB",
    });

    await Faculty.create({
      name: "Komunikasi dan Bisnis",
      code: "FKB",
    });

    await Major.create({
      name: "Teknik Elektro",
      code: "TE",
      degree: "S1",
      facultyCode: "FTE",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Teknik Elektro",
      code: "MTE",
      degree: "S2",
      facultyCode: "FTE",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Teknik Telekomunikasi",
      code: "TT",
      degree: "S1",
      facultyCode: "FTE",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Teknik Fisika",
      code: "TF",
      degree: "S1",
      facultyCode: "FTE",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Teknik Komputer",
      code: "TK",
      degree: "S1",
      facultyCode: "FTE",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Teknik Biomedis",
      code: "TB",
      degree: "S1",
      facultyCode: "FTE",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Informatika",
      code: "IF",
      degree: "S1",
      facultyCode: "FIF",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Informatika",
      code: "MIF",
      degree: "S2",
      facultyCode: "FIF",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Informatika",
      code: "DIF",
      degree: "S3",
      facultyCode: "FIF",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Ilmu Forensik",
      code: "MFS",
      degree: "S2",
      facultyCode: "FIF",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Teknologi Informasi",
      code: "TI",
      degree: "S1",
      facultyCode: "FIF",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Rekayasa Perangkat Lunak",
      code: "SE",
      degree: "S1",
      facultyCode: "FIF",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Informatika PJJ",
      code: "IFP",
      degree: "S1",
      facultyCode: "FIF",
      yearAppear: 2000,
    });

    await Major.create({
      name: "Data Science",
      code: "DS",
      degree: "S1",
      facultyCode: "FIF",
      yearAppear: 2000,
    });
  } catch (error) {
    console.error("Gagal menambahkan data awal Faculty & Major:", error);
  }
};

export default FacultyAndMajor;
