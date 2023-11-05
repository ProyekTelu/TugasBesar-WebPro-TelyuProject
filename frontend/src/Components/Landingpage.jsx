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
    <div className="w-screen bg-white">
      <div className="flex h-screen">
        <div className="flex w-3/5 px-20 my-20 flex-col items-start">
          <div className="flex gap-2">
            <img src={logo} alt="Tel-u Project" className="w-10 h-10" />
            <span className="font-bold font-['Inter'] text-gray-700 text-3xl ml-2">
              Telu Project
            </span>
          </div>
          <div className="font-bold font-['Inter'] text-gray-700 text-7xl mt-6 w-2/3 h-min leading-snug">
            Discover your dream project or help create one.
          </div>
        </div>
        <div className="flex w-auto my-auto flex-col items-center">
          <div className="w-full h-full flex flex-col">
            <button className="w-full h-min relative border-4 border-gray-300 p-5 rounded-lg justify-center overflow-y-auto max-h-[70vh]">
              <h1 className="text-left text-black font-['Inter'] font-bold">
                Join As Student
              </h1>
              <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            </button>
          </div>
          <div className="w-full h-full flex flex-col mt-5">
            <button className="w-full h-min relative border-4 border-gray-300 p-5 rounded-lg justify-center overflow-y-auto max-h-[70vh]">
              <h1 className="text-left text-black font-['Inter'] font-bold">
                Join As Lecturer
              </h1>
              <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="w-3/4 md:w-3/4 mx-auto my-20">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            FAKULTAS TELKOM UNIVERSITY
          </h2>
        </div>
        {faculties.map((faculty, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-white rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 duration-300"
            onClick={() => toggleItem(index)}>
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
                className="mb-6 p-6 bg-white rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 duration-300"
                onClick={() => toggleItem(index)}>
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
      <Footer /> */}
    </div>
  );
};

export default Landingpage;
