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

  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
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
      description:
        "Program studi sarjana informatika universitas telkom sebagai bagian yang tidak terpisahkan dari universitas telkom yang memiliki visi menjadi World Class University, program studi sarjana informatika juga memiliki visi untuk menjadi program studi kelas dunia yang berperan aktif dalam pengembangan ilmu pengetahuan. di bidang informatika. Program studi sarjana informatika merupakan program studi unggulan di telkom universitas yang berfokus pada pengembangan teknologi informasi berbasis ilmu pengetahuan, ilmu pengetahuan, seni dan terakreditasi Unggul oleh BAN PT.",
    },
    {
      name: "Fakultas Ekonomi Bisnis",
      description:
        "Fakultas Ekonomi dan Bisnis (FEB) merupakan satu dari tujuh fakultas yang ada di dalam Universitas Telkom. Fakultas Ekonomi dan Bisnis Telkom University hadir untuk menjawab segenap tantangan yang muncul dari perkembangan teknologi digital dengan merumuskan konsep education 4.0 yang akan menjawab tuntutan dari industry 4.0, mengeksploitasi teknologi digital dan mendukung terciptanya collaborative learning serta lifelong learning dengan tagline “Preparing The Digital Business Leader”.",
    },
    {
      name: "Fakultas Elektro",
      description:
        "Fakultas Teknik Elektro (FTE) merupakan fakultas terbesar dan tertua di Telkom University yang memiliki komitmen untuk terus mengembangkan penelitian, pendidikan, dan enterpreneurship dalam bidang teknik elektro dan teknik fisika, dengan berbasiskan teknologi informasi sehingga dapat menjadi fakultas yang berstandar internasional. Fakultas Teknik Elektro memiliki enam prodi, beberapa diantaranya telah terakreditasi internasional dari IABEE (Indonesia Accreditation Board for Engineering Education) dan juga telah terakreditasi unggul dari BAN-PT.",
    },
    {
      name: "Fakultas Rekayasa Industri",
      description:
        "Fakultas Rekayasa Industri (FRI) merupakan salah satu Fakultas pertama yang terbentuk di Universitas Telkom. Terdapat lima program studi yang telah terakreditasi nasional, beberapa program studi diantaranya telah terakreditasi Unggul dan A. Selain itu terdapat program studi yang telah terakreditasi internasional dari IABEE.",
    },
    {
      name: "Fakultas Komunikasi Bisnis",
      description:
        "Fakultas Komunikasi dan Bisnis adalah salah satu Fakultas di Universitas Telkom yang mengedepankan pendidikan di bidang komunikasi dan bisnis, sampai saat ini Fakultas Komunikasi dan Bisnis sudah memiliki 3 Program Studi yaitu Program Studi Ilmu Komunikasi, Administrasi Bisnis dan Hubungan Masyarakat (Digital Public Relations).",
    },
    {
      name: "Fakultas Industri Kreatif",
      description:
        "Fakultas Komunikasi dan Bisnis adalah salah satu Fakultas di Universitas Telkom yang mengedepankan pendidikan di bidang komunikasi dan bisnis, sampai saat ini Fakultas Komunikasi dan Bisnis sudah memiliki 3 Program Studi yaitu Program Studi Ilmu Komunikasi, Administrasi Bisnis dan Hubungan Masyarakat (Digital Public Relations).",
    },
    {
      name: "Fakultas Ilmu Terapan",
      description:
        "Fakultas Komunikasi dan Bisnis adalah salah satu Fakultas di Universitas Telkom yang mengedepankan pendidikan di bidang komunikasi dan bisnis, sampai saat ini Fakultas Komunikasi dan Bisnis sudah memiliki 3 Program Studi yaitu Program Studi Ilmu Komunikasi, Administrasi Bisnis dan Hubungan Masyarakat (Digital Public Relations).",
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
    <div className="w-screen min-h-screen flex flex-col overflow-x-hidden bg-white">
      <div className="flex justify-center w-full">
        <div
          className="flex flex-col md:flex-row items-center justify-between w-11/12 md:w-3/4 py-4 md:py-10"
          id="navbar"
        >
          <div className="mb-4 md:mb-4 flex items-center">
            <img src={logo} alt="Tel-u Project" className="w-20" />
            <p className="ml-2 text-3xl font-bold text-gray-800">
              Tel-u Project
            </p>
          </div>
          {user !== null ? (
            <Link
              to="/telyuProject/profilePage"
              className="p-4 bg-whiteAlternative rounded-3xl border-4 cursor-pointer transition hover:shadow-lg active:scale-95"
            >
              <div className={"flex flex-col items-center justify-center"}>
                <div className="flex items-center gap-4 ">
                  <div className="h-10 aspect-square rounded-full bg-black"></div>
                  <div className={"block"}>
                    <p className="text-primary text-md font-bold">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="font-thin text-sm">{user.userID}</p>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-6 py-3 bg-whiteAlternative rounded-3xl border-4 cursor-pointer transition hover:shadow-lg active:scale-95"
            >
              <div className={"flex flex-col items-center justify-center"}>
                <div className="flex items-center  ">
                  <p className="text-lg font-bold">Login</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="flex w-full h-full justify-center ">
        <div className="flex flex-col md:flex-row justify-between w-3/4 lg:w-3/4 gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-4 mb-2 md:mb-0">
            <p className="text-4xl md:text-8xl leading-none xl:text-9xl font-bold text-center md:text-left">
              Discover your dream project or help create one.
            </p>
          </div>
          {user === null && (
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-12 my-auto">
              <Link
                to="/signup"
                className="text-lg leading-relaxed p-8 bg-whiteAlternative rounded-3xl transition border-4 hover:shadow-lg active:scale-95"
              >
                <div className="text-black font-bold mb-2 text-4xl text-center md:text-left flex flex-col md:gap-2">
                  <p>Join</p>
                  <p>as Lecturer</p>
                </div>
                <p className="text-gray-500 lg:text-xl text-center md:text-left">
                  Explore exciting project opportunities, collaborate with
                  peers, and enhance their academic journey
                </p>
              </Link>
              <Link
                to="/signup"
                className="text-lg leading-relaxed p-8 bg-whiteAlternative rounded-3xl transition border-4 hover:shadow-lg active:scale-95"
              >
                <div className="text-black font-bold mb-2 text-4xl text-center md:text-left flex flex-col md:gap-2">
                  <p>Join</p>
                  <p>as Student</p>
                </div>
                <p className="text-gray-500 lg:text-xl text-center md:text-left">
                  seeking to post and manage your research or class projects and
                  find talented students to work with
                </p>
              </Link>
            </div>
          )}
          {user !== null && (
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-12 my-auto">
              <Link
                to="telyuProject/home"
                className="text-lg leading-relaxed p-8 bg-whiteAlternative rounded-3xl transition border-4 hover:shadow-lg active:scale-95"
              >
                <div className="text-black font-bold mb-2 text-4xl text-center md:text-left flex flex-col md:gap-2">
                  <p>Open</p>
                  <p>Telyu Project</p>
                </div>
                <p className="text-gray-500 lg:text-xl text-center md:text-left">
                  Explore exciting project opportunities, collaborate with
                  peers, and enhance their academic journey
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="w-3/4 md:w-3/4 mx-auto my-20">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            FAKULTAS TELKOM UNIVERSITY
          </h2>
        </div>
        {faculties.map((faculty, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-whiteAlternative rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 duration-300"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-lg lg:text-xl font-bold">{faculty.name}</h3>
            {expanded === index && (
              <p className="text-gray-600">{faculty.description}</p>
            )}
          </div>
        ))}
      </div>
      <div className="w-3/4 md:w-3/4 mx-auto my-8">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Pertanyaan Umum (FAQ)
          </h2>
        </div>
        {faqItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.items.map((item, index) => (
              <div
                key={index}
                className="mb-6 p-6 bg-whiteAlternative rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 duration-300"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg lg:text-xl font-bold">
                  {item.question}
                </h3>
                {expanded === index && (
                  <p className="text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Landingpage;
