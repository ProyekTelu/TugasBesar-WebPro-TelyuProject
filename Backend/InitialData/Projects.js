import Project from "../models/ProjectModel.js";
import User from "../models/UserModel.js";

const Projects = async () => {
  try {
    const user = await User.findOne({
      where: {
        email: "mzakyf@telkomuniversity.ac.id",
      },
    });

    if (!user) return;

    const userID = user.userID;

    const startProject = "2023-10-25 08:30:00"; // YYYY-MM-DD HH:MM:SS
    const endProject = "2024-02-25 11:30:00"; // YYYY-MM-DD HH:MM:SS
    const openUntil = "2023-12-05 10:30:00"; // YYYY-MM-DD HH:MM:SS
    const totalMember = 10;

    await Project.create({
      title: "Project kehidupan pangan",
      projectOwnerID: userID,
      description:
        "Menghijaukan pertanian untuk masyarakat indonesia khusus sukabirus sukapura",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Platform E-learning",
      projectOwnerID: userID,
      description:
        "Proyek ini bertujuan untuk meningkatkan pengalaman belajar secara daring melalui pengembangan platform e-learning yang interaktif dan user-friendly.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Aplikasi Mobile",
      projectOwnerID: userID,
      description:
        "Proyek ini fokus pada pengembangan aplikasi mobile untuk memudahkan akses informasi dan interaksi pengguna dengan layanan yang tersedia.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Penelitian Inovasi Teknologi",
      projectOwnerID: userID,
      description:
        "Proyek penelitian ini bertujuan untuk mengembangkan teknologi inovatif yang dapat meningkatkan efisiensi dan kualitas dalam berbagai sektor industri.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Sistem Manajemen Inventaris",
      projectOwnerID: userID,
      description:
        "Proyek ini bertujuan untuk mengembangkan sistem manajemen inventaris yang efisien untuk memantau dan mengelola stok barang secara real-time.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Aplikasi Analisis Data",
      projectOwnerID: userID,
      description:
        "Proyek ini akan fokus pada pengembangan aplikasi untuk menganalisis data besar dan menghasilkan informasi yang berguna untuk pengambilan keputusan.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Sistem Keamanan Cyber",
      projectOwnerID: userID,
      description:
        "Proyek ini bertujuan untuk mengembangkan sistem keamanan cyber yang handal untuk melindungi informasi penting dari serangan cyber yang merugikan.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Teknologi Kesehatan",
      projectOwnerID: userID,
      description:
        "Proyek ini akan fokus pada pengembangan teknologi inovatif dalam bidang kesehatan untuk meningkatkan layanan dan pemantauan kesehatan masyarakat.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Platform E-commerce",
      projectOwnerID: userID,
      description:
        "Proyek ini bertujuan untuk mengembangkan platform e-commerce yang dapat menyediakan pengalaman belanja online yang mudah dan menyenangkan bagi pengguna.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });

    await Project.create({
      title: "Pengembangan Platform E-pinjem",
      projectOwnerID: userID,
      description:
        "Proyek ini bertujuan untuk mengembangkan platform e-pinjem yang dapat menyediakan pengalaman pinjem kelas dengan mudah.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
    });
  } catch (err) {
    console.log(err);
  }
};

export default Projects;
