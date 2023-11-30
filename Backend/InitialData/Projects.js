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
        "Menghijaukan pertanian untuk masyarakat Indonesia, khususnya di daerah Sukabirus dan Sukapura, merupakan langkah penting untuk meningkatkan kualitas hidup petani, menciptakan lingkungan yang berkelanjutan, dan memberikan kontribusi pada ketahanan pangan nasional.",
      startProject: startProject,
      endProject: endProject,
      openUntil: openUntil,
      totalMember: totalMember,
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
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
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Open Request",
    });

    await Project.create({
      title: "Pengembangan Platform E-KTP",
      projectOwnerID: userID,
      description:
        "Proyek ini bertujuan untuk mengembangkan platform e-KTP yang dapat menyediakan pengalaman Ktp Lorem ipsum dolor sit amet.",
      startProject: "2021-10-25 02:30:00",
      endProject: "2022-08-12 08:30:00",
      openUntil: "2021-10-20 07:30:00",
      totalMember: 7,
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Finished",
    });

    await Project.create({
      title: "Pengembangan Platform Samsudin dolor sit amet lorem ipsum",
      projectOwnerID: userID,
      description:
        "Proyek ini bertujuan untuk mengembangkan samsudin dolor sit amet lorem ipsum.",
      startProject: "2020-10-25 02:30:00",
      endProject: "2021-08-12 08:30:00",
      openUntil: "2020-10-20 07:30:00",
      totalMember: 3,
      groupLink: "https://www.youtube.com/watch?v=bcHIwuUd9cs",
      projectStatus: "Finished",
    });
  } catch (err) {
    console.log(err);
  }
};

export default Projects;
