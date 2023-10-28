import Fakultas from "../models/FakultasModel.js";
import Prodi from "../models/ProdiModel.js";

const FakultasAndProdi = async () => {
  try {
    await Fakultas.create({
      nama: "Teknik Elektro",
      kode: "FTE",
    });

    await Fakultas.create({
      nama: "Informatika",
      kode: "FIF",
    });

    await Fakultas.create({
      nama: "Rekayasa Industri",
      kode: "FRI",
    });

    await Fakultas.create({
      nama: "Ilmu Terapan",
      kode: "FIT",
    });

    await Fakultas.create({
      nama: "Industri Kreatif",
      kode: "FIK",
    });

    await Fakultas.create({
      nama: "Ekonomi dan Bisnis",
      kode: "FEB",
    });

    await Fakultas.create({
      nama: "Komunikasi dan Bisnis",
      kode: "FKB",
    });

    await Prodi.create({
      nama: "Teknik Elektro",
      kode: "TE",
      program: "S1",
      kodeFakultas: "FTE",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Teknik Elektro",
      kode: "MTE",
      program: "S2",
      kodeFakultas: "FTE",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Teknik Telekomunikasi",
      kode: "TT",
      program: "S1",
      kodeFakultas: "FTE",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Teknik Fisika",
      kode: "TF",
      program: "S1",
      kodeFakultas: "FTE",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Teknik Komputer",
      kode: "TK",
      program: "S1",
      kodeFakultas: "FTE",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Teknik Biomedis",
      kode: "TB",
      program: "S1",
      kodeFakultas: "FTE",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Informatika",
      kode: "IF",
      program: "S1",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Informatika",
      kode: "MIF",
      program: "S2",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Informatika",
      kode: "DIF",
      program: "S3",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Ilmu Forensik",
      kode: "MFS",
      program: "S2",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Teknologi Informasi",
      kode: "TI",
      program: "S1",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Rekayasa Perangkat Lunak",
      kode: "SE",
      program: "S1",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Informatika PJJ",
      kode: "IFP",
      program: "S1",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });

    await Prodi.create({
      nama: "Data Science",
      kode: "DS",
      program: "S1",
      kodeFakultas: "FIF",
      tahunBerdiri: 2000,
    });
  } catch (error) {
    console.error("Gagal menambahkan data awal Fakultas & Prodi:", error);
  }
};

export default FakultasAndProdi;
