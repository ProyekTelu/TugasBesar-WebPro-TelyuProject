import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} Tel-u Project. All rights reserved.
    </footer>
  );
};

const Landingpage = () => {
  const [expanded, setExpanded] = useState(null);

  const faqItems = [
    {
      title: "Pertanyaan Umum (FAQ)",
      items: [
        {
          question: "Apa itu TelyuProject?",
          answer:
            "TelyuProject adalah platform yang memungkinkan dosen dan mahasiswa untuk menemukan, berkolaborasi, dan mengelola proyek akademik.",
        },
        {
          question: "Bagaimana cara bergabung sebagai dosen?",
          answer:
            "Untuk bergabung sebagai dosen, Anda dapat klik tombol 'JOIN AS LECTURE' dan mengikuti langkah-langkah pendaftaran.",
        },
        {
          question: "Bagaimana cara bergabung sebagai mahasiswa?",
          answer:
            "Untuk bergabung sebagai mahasiswa, Anda dapat klik tombol 'JOIN AS STUDENT' dan mengikuti langkah-langkah pendaftaran.",
        },
      ],
    },
  ];

  const faculties = [
    {
      name: "Fakultas Informatika",
      description: "Program studi sarjana informatika universitas telkom sebagai bagian yang tidak terpisahkan dari universitas telkom yang memiliki visi menjadi World Class University, program studi sarjana informatika juga memiliki visi untuk menjadi program studi kelas dunia yang berperan aktif dalam pengembangan ilmu pengetahuan. di bidang informatika. Program studi sarjana informatika merupakan program studi unggulan di telkom universitas yang berfokus pada pengembangan teknologi informasi berbasis ilmu pengetahuan, ilmu pengetahuan, seni dan terakreditasi Unggul oleh BAN PT.",
    },
    {
      name: "Fakultas Ekonomi Bisnis",
      description: "Fakultas Ekonomi dan Bisnis (FEB) merupakan satu dari tujuh fakultas yang ada di dalam Universitas Telkom. Fakultas Ekonomi dan Bisnis Telkom University hadir untuk menjawab segenap tantangan yang muncul dari perkembangan teknologi digital dengan merumuskan konsep education 4.0 yang akan menjawab tuntutan dari industry 4.0, mengeksploitasi teknologi digital dan mendukung terciptanya collaborative learning serta lifelong learning dengan tagline “Preparing The Digital Business Leader”.",
    },
    {
      name: "Fakultas Elektro",
      description: "Fakultas Teknik Elektro (FTE) merupakan fakultas terbesar dan tertua di Telkom University yang memiliki komitmen untuk terus mengembangkan penelitian, pendidikan, dan enterpreneurship dalam bidang teknik elektro dan teknik fisika, dengan berbasiskan teknologi informasi sehingga dapat menjadi fakultas yang berstandar internasional. Fakultas Teknik Elektro memiliki enam prodi, beberapa diantaranya telah terakreditasi internasional dari IABEE (Indonesia Accreditation Board for Engineering Education) dan juga telah terakreditasi unggul dari BAN-PT.",
    },
    {
      name: "Fakultas Rekayasa Industri",
      description: "Fakultas Rekayasa Industri (FRI) merupakan salah satu Fakultas pertama yang terbentuk di Universitas Telkom. Terdapat lima program studi yang telah terakreditasi nasional, beberapa program studi diantaranya telah terakreditasi Unggul dan A. Selain itu terdapat program studi yang telah terakreditasi internasional dari IABEE.",
    },
    {
      name: "Fakultas Komunikasi Bisnis",
      description: "Fakultas Komunikasi dan Bisnis adalah salah satu Fakultas di Universitas Telkom yang mengedepankan pendidikan di bidang komunikasi dan bisnis, sampai saat ini Fakultas Komunikasi dan Bisnis sudah memiliki 3 Program Studi yaitu Program Studi Ilmu Komunikasi, Administrasi Bisnis dan Hubungan Masyarakat (Digital Public Relations).",
    },
    {
      name: "Fakultas Industri Kreatif",
      description: "Fakultas Komunikasi dan Bisnis adalah salah satu Fakultas di Universitas Telkom yang mengedepankan pendidikan di bidang komunikasi dan bisnis, sampai saat ini Fakultas Komunikasi dan Bisnis sudah memiliki 3 Program Studi yaitu Program Studi Ilmu Komunikasi, Administrasi Bisnis dan Hubungan Masyarakat (Digital Public Relations).",
    },
    {
      name: "Fakultas Ilmu Terapan",
      description: "Fakultas Komunikasi dan Bisnis adalah salah satu Fakultas di Universitas Telkom yang mengedepankan pendidikan di bidang komunikasi dan bisnis, sampai saat ini Fakultas Komunikasi dan Bisnis sudah memiliki 3 Program Studi yaitu Program Studi Ilmu Komunikasi, Administrasi Bisnis dan Hubungan Masyarakat (Digital Public Relations).",
    },
  ];

  const toggleItem = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="py-12 px-24  h-screen w-screen">
      <div className="grid grid-cols-2 w-full h-full">
        <div className="grid items-center ">
          <div>
            <div className="flex gap-4">
              <img className="w-8 h-8" src={logo} alt=".png" />
              <h1 className="text-2xl mb-6">Telyu Project</h1>
            </div>
            <h1 className="text-6xl font-bold">Discover your dream project or help create one.</h1>
          </div>
        </div>
        <div className="p-12 gap-12 grid grid-rows-2">
            <div className="border-2 rounded-xl border-black">

            </div>
            <div className="border-2 rounded-xl border-black">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
