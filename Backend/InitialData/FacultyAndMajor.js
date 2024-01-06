import Faculty from "../models/FacultyModel.js";
import Major from "../models/majorModel.js";

const FacultyAndMajor = async () => {
  try {
    await Faculty.create({
      name: "Teknik Elektro",
      code: "FTE",
      description : "Fakultas Teknik Elektro (FTE) merupakan fakultas terbesar dan tertua di Telkom University yang memiliki komitmen untuk terus mengembangkan penelitian, pendidikan, dan enterpreneurship dalam bidang teknik elektro dan teknik fisika, dengan berbasiskan teknologi informasi sehingga dapat menjadi fakultas yang berstandar internasional."
    });

    await Faculty.create({
      name: "Informatika",
      code: "FIF",
      description : "Program studi sarjana informatika universitas telkom sebagai bagian yang tidak terpisahkan dari universitas telkom yang memiliki visi menjadi World Class University, program studi sarjana informatika juga memiliki visi untuk menjadi program studi kelas dunia yang berperan aktif dalam pengembangan ilmu pengetahuan. di bidang informatika."
    });

    await Faculty.create({
      name: "Rekayasa Industri",
      code: "FRI",
      description : "Fakultas Rekayasa Industri (FRI) merupakan salah satu Fakultas pertama yang terbentuk di Universitas Telkom. Terdapat lima program studi yang telah terakreditasi nasional, beberapa program studi diantaranya telah terakreditasi Unggul dan A. Selain itu terdapat program studi yang telah terakreditasi internasional dari IABEE.",
    });

    await Faculty.create({
      name: "Ilmu Terapan",
      code: "FIT",
      description : "Fakultas Ilmu Terapan (FIT) Telkom Univerisity merupakan satu dari tujuh fakultas di Universitas Telkom yang fokus pada Pendidikan vokasi. Untuk menunjang kompetensi lulusan yang terampil serta match dengan kebutuhan industri, maka kurikulum pendidikan vokasi didesain menjadi 60% praktek dan 40% teori. Selain itu mahasiswa juga akan dibekali dengan sertifikasi kompetensi baik nasional maupun internasional."
    });

    await Faculty.create({
      name: "Industri Kreatif",
      code: "FIK",
      description : "Fakultas Industri Kreatif merupakan salah satu fakultas di Universitas Telkom yang bergerak dalam bidang pendidikan Seni Rupa dan Desain yang fokus pada pengembangan pendidikan di sektor Industri Kreatif. Fakultas Industri Kreatif Universitas Telkom memiliki 5 program studi S1 (Sarjana) dan 1 program studi S2 (Magister)."
    });

    await Faculty.create({
      name: "Ekonomi dan Bisnis",
      code: "FEB",
      description : "Fakultas Ekonomi dan Bisnis (FEB) merupakan satu dari tujuh fakultas yang ada di dalam Universitas Telkom. Fakultas Ekonomi dan Bisnis Telkom University hadir untuk menjawab segenap tantangan yang muncul dari perkembangan teknologi digital dengan merumuskan konsep education 4.0 yang akan menjawab tuntutan dari industry 4.0."
    });

    await Faculty.create({
      name: "Komunikasi dan Bisnis",
      code: "FKB",
      description : "Fakultas Komunikasi dan Bisnis adalah salah satu Fakultas di Universitas Telkom yang mengedepankan pendidikan di bidang komunikasi dan bisnis, sampai saat ini Fakultas Komunikasi dan Bisnis sudah memiliki 3 Program Studi yaitu Program Studi Ilmu Komunikasi, Administrasi Bisnis dan Hubungan Masyarakat (Digital Public Relations)."
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
