import HeroImage from "/assets/hero-img-ku.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/spring-boot.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laravel.png";
import Tools10 from "/assets/tools/mysql.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/php.png";
import Tools13 from "/assets/tools/codeigniter.png";
import Tools14 from "/assets/tools/sql.png";
import Tools15 from "/assets/tools/docker.png";
import Tools16 from "/assets/tools/mongo-db.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools13,
    nama: "Codeigniter",
    ket: "Framework",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools10,
    nama: "MySql",
    ket: "Database",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools15,
    nama: "Docker",
    ket: "container",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools3,
    nama: "Spring-Boot",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools2,
    nama: "React JS",
    ket: "library JavaScript",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Php",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Sql",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Monggo-DB",
    ket: "Database",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/proyek-1.png";
import Proyek2 from "/assets/proyek/proyek-2.png";
import Proyek3 from "/assets/proyek/proyek-3.png";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website MardekaLiterasi",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Laravel", "Blade", "Javascript", "MySql", "Supebase", "Taliwind CSS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Bimbingan Konseling",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "React Js", "Taliwind CSS", "Javascript", "Node Js", "Monggo DB"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Perpustakan",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "Sping-Boot", "Mysql"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];

import Sertif1 from "/assets/Sertifikat/Sertifikat Komdigi.png";
import Sertif2 from "/assets/Sertifikat/Sertifikat Bangkit.jpg";
import Sertif3 from "/assets/Sertifikat/Sertifikat Dibimbing.jpg";
import Sertif4 from "/assets/Sertifikat/Sertifikat Magang.png";
import Sertif5 from "/assets/Sertifikat/Sertifikat Backend.png";
import Sertif6 from "/assets/Sertifikat/Sertifikat Git.png";

export const listSertif = [
  {
    id: 1,
    nama: "Sertifikat Komdigi",
    gambar: Sertif1,
  },
  {
    id: 2,
    nama: "Sertifikat Bangkit",
    gambar: Sertif2,
  },
  {
    id: 3,
    nama: "Sertifikat Dibimbing",
    gambar: Sertif3,
  },
  {
    id: 4,
    nama: "Sertifikat Magang",
    gambar: Sertif4,
  },
  {
    id: 5,
    nama: "Sertifikat Backend",
    gambar: Sertif5,
  },
  {
    id: 6,
    nama: "Sertifikat Git",
    gambar: Sertif6,
  }
]
