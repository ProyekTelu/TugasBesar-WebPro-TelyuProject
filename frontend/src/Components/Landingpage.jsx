import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";
import inf from "../img/fit.png";
import feb from "../img/feb.png";
import elk from "../img/elektro.png";
import fri from "../img/fri.png";
import kom from "../img/komunikasi.png";
import fik from "../img/fik.png";
import fit from "../img/fit.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} Tel-u Project. All rights reserved.
    </footer>
  );
};

const CarouselItem = ({ faculty, expanded, toggleItem, index }) => {
  const images = [inf, feb, elk, fri, kom, fik, fit];
  return (
    <div
      key={index}
      className="flex-none w-72 mr-4"
      onClick={() => toggleItem(index)}
    >
      <div className="p-6 bg-white rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 duration-300">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
          {faculty.name}
        </h3>
        <img
          src={images[index]}
          alt={faculty.name}
          className="w-full h-auto mb-4 rounded-lg object-cover"
        />
        {expanded === index && (
          <div className="text-gray-600">
            <p className="mb-4">{faculty.description}</p>
            <div className="flex justify-end">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => toggleItem(index)}
              ></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Landingpage = () => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [userImage, setUserImage] = useState(user.photoProfileUrl);

  //convert blob ke gambar
  // useEffect(() => {
  //   if (user !== null && user.photoProfile && user.photoProfile.data) {
  //     const base64String = btoa(
  //       new Uint8Array(user.photoProfile.data).reduce(
  //         (data, byte) => data + String.fromCharCode(byte),
  //         ""
  //       )
  //     );
  //     const url = `data:image/png;base64,${base64String}`;
  //     setUserImage(url);
  //   }
  // }, [user]);

  const faculties = [
    {
      name: "Fakultas Informatika",
      description:
        "Program studi sarjana informatika universitas telkom sebagai bagian yang tidak terpisahkan dari universitas telkom yang memiliki visi menjadi World Class University, program studi sarjana informatika juga memiliki visi untuk menjadi program studi kelas dunia yang berperan aktif dalam pengembangan ilmu pengetahuan. di bidang informatika.",
    },
    {
      name: "Fakultas Ekonomi Bisnis",
      description:
        "Fakultas Ekonomi dan Bisnis (FEB) merupakan satu dari tujuh fakultas yang ada di dalam Universitas Telkom. Fakultas Ekonomi dan Bisnis Telkom University hadir untuk menjawab segenap tantangan yang muncul dari perkembangan teknologi digital dengan merumuskan konsep education 4.0 yang akan menjawab tuntutan dari industry 4.0.",
    },
    {
      name: "Fakultas Teknik Elektro",
      description:
        "Fakultas Teknik Elektro (FTE) merupakan fakultas terbesar dan tertua di Telkom University yang memiliki komitmen untuk terus mengembangkan penelitian, pendidikan, dan enterpreneurship dalam bidang teknik elektro dan teknik fisika, dengan berbasiskan teknologi informasi sehingga dapat menjadi fakultas yang berstandar internasional.",
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

  const faqItems = [
    {
      title: "Pertanyaan Umum (FAQ)",
      items: [
        {
          question: "Apa itu TelyuProject?",
          answer:
            "TelyuProject adalah platform yang memungkinkan dosen dan mahasiswa untuk menemukan, berkolaborasi, dan mengelola proyek akademik.",
        },
      ],
    },
  ];

  const toggleFacultyItem = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const toggleFAQItem = (sectionIndex, itemIndex) => {
    const faqIndex = faqItems[sectionIndex].items[itemIndex].id; // Assuming you have an "id" property in your FAQ items
    if (expanded === faqIndex) {
      setExpanded(null);
    } else {
      setExpanded(faqIndex);
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
            <img src={logo} alt="Tel-u Project" className="w-14" />
            <p className="ml-2 text-2xl font-bold text-gray-800">
              Tel-u Project
            </p>
          </div>
          {user !== null ? (
            <Link
              to="/telyuProject/profilePage"
              className="p-4 bg-whiteAlternative rounded-3xl border-2 cursor-pointer transition hover:border-greyAlternative active:border-gray-500 duration-200 active:scale-95"
            >
              <div className={"flex flex-col items-center justify-center"}>
                <div className="flex items-center gap-4 ">
                  <img
                    src={userImage}
                    alt="profileImage"
                    className="h-10 aspect-square rounded-full bg-white"
                  />
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
              className="px-10 py-3 bg-whiteAlternative rounded-3xl border-2 cursor-pointer transition hover:border-greyAlternative active:border-gray-500 duration-200 active:scale-95"
            >
              <div className={"flex flex-col items-center justify-center"}>
                <div className="flex items-center">
                  <p className="text-xl font-bold">Login</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="flex w-full h-full justify-center ">
        <div className="flex flex-col md:flex-row justify-between w-3/4 lg:w-3/4 gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-4 mb-2 md:mb-0">
            <p className="text-4xl md:text-8xl xl:text-9xl leading-none font-bold text-center md:text-left">
              Discover your dream project or help create one.
            </p>
          </div>
          {user === null && (
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-12 my-auto">
              <Link
                to="/signup"
                className="text-lg leading-relaxed p-8 bg-whiteAlternative rounded-3xl border-2 transition hover:border-greyAlternative active:border-gray-500 duration-200 active:scale-95"
              >
                <div className="text-black font-bold mb-2 text-3xl text-center md:text-left flex flex-col md:gap-">
                  <p>Join</p>
                  <p>as Lecturer</p>
                </div>
                <p className="text-gray-500 lg:text-lg text-center md:text-left">
                  Explore exciting project opportunities, collaborate with
                  peers, and enhance their academic journey
                </p>
              </Link>
              <Link
                to="/signup"
                className="text-lg leading-relaxed p-8 bg-whiteAlternative rounded-3xl border-2 transition hover:border-greyAlternative active:border-gray-500 duration-200 active:scale-95"
              >
                <div className="text-black font-bold mb-2 text-3xl text-center md:text-left flex flex-col md:gap-1">
                  <p>Join</p>
                  <p>as Student</p>
                </div>
                <p className="text-gray-500 lg:text-lg text-center md:text-left">
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
                className="text-lg leading-relaxed p-8 bg-whiteAlternative rounded-3xl transition border-2 hover:border-greyAlternative active:border-gray-500 duration-200 active:scale-95"
              >
                <div className="text-black font-bold mb-2 text-4xl text-center md:text-left flex flex-col md:gap-2">
                  <p>Open</p>
                  <p>TelYu Project</p>
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
        <div className="flex overflow-x-auto">
          {faculties.map((faculty, index) => (
            <CarouselItem
              key={index}
              faculty={faculty}
              expanded={expanded}
              toggleItem={() => toggleFacultyItem(index)} // Change this line
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="w-3/4 md:w-3/4 mx-auto my-8">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Pertanyaan Umum (FAQ)
          </h2>
        </div>
        {faqItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.items.map((item, itemIndex) => (
              <div
                key={item.id} // Assuming you have an "id" property in your FAQ items
                className="mb-6 p-6 bg-white rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 duration-300"
                onClick={() => toggleFAQItem(sectionIndex, itemIndex)} // Change this line
              >
                <h3 className="text-lg lg:text-xl font-bold">
                  {item.question}
                </h3>
                {expanded === item.id && (
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
