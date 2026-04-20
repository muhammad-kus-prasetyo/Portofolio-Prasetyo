import DataImage, { listSertif } from "./data";
import { listTools, listProyek } from "./data";
import { useState, useRef } from "react";

function App() {
  const [showAll, setShowAll] = useState(false);
  const toolsRef = useRef(null);

  const handleToggle = () => {
    if (showAll) {
      // tutup dulu
      setShowAll(false);

      // scroll ke atas setelah sedikit delay
      setTimeout(() => {
        toolsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setShowAll(true);
    }
  };
  return (
    <>
      {/* Start Hero */}
      <div id="hero" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Halo 👋 selamat datang di Web Profile Prasetyoo.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Muhammad Kus Prasetyo</h1>
          <p className="text-base/loose mb-6 opacity-50 text-justify">Saya memiliki ketertarikan di bidang pengembangan web, khususnya dalam membangun aplikasi berbasis website menggunakan Laravel, CodeIgniter, React, dan Spring Boot, serta didukung dengan penggunaan Docker dan kemampuan dalam pengelolaan database serta pengembangan fitur aplikasi. Ketertarikan ini telah saya tekuni selama lebih dari 3 tahun.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="../public/assets/cv/Muhammad Kus Prasetyo - CV.pdf" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-long-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" loading="lazy" />
      </div>
      {/* End Hero */}

      {/* Start Tentang */}
      <div id="tentang" className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10 text-justify">
            Hallo saya Muhammad Kus Prasetyo, Saya merupakan lulusan Program Studi Informatika Universitas Ahmad Dahlan (UAD) dengan minat dalam pengembangan web. Selama 2 tahun terakhir, saya mengembangkan berbagai project web menggunakan Laravel, CodeIgniter, dan Spring Boot. Saya memahami pengelolaan database menggunakan MySQL dan MongoDB, serta memiliki pemahaman yang baik tentang SQL untuk pengolahan dan manipulasi data. Dalam pengembangan menggunakan Laravel, saya juga memahami konsep Object-Oriented Programming (OOP) dan penerapan ORM (Eloquent) dalam membangun aplikasi. Pengalaman tersebut saya terapkan dalam beberapa proyek seperti MardekaLiterasi, Pijat Tradisional Jogja, web bimbingan konseling, dan web rekomendasi wisata terpopuler.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  20<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={toolsRef} className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4 text-center">
            Tools yang dipakai
          </h1>

          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center mx-auto">
            Berikut ini beberapa tools yang biasa saya pakek untuk pembuatan Website ataupun Desain
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool, index) => (
              <div
                key={tool.id}
                className={`flex items-center gap-2 p-3 border border-zinc-600 rounded-md group
            ${!showAll && index >= 4 ? "hidden sm:flex" : ""}`}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}

          </div>

          {/* BUTTON (hanya muncul di mobile) */}
          <div className="text-center mt-6 sm:hidden">
            <button
              onClick={handleToggle}
              className="px-4 py-2 bg-violet-600 rounded-lg text-white"
            >
              {showAll ? "Tutup" : "Lihat lainnya"}
            </button>
          </div>
        </div>
      </div>
      {/* End Tentang */}

      {/* Start Proyek */}
      <div id="proyek" className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">Berikut ini Project yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek =>
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={proyek.gambar} alt="Proyek Gambar" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-500 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                {/* <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Proyek */}

      {/* Start Sertifikat */}
      <div id="sertifikat" className="sertifikat mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Sertifikat</h1>
        <p className="text-base/loose text-center opacity-50">Berikut ini Sertifikat yang telah saya miliki.</p>
        <div className="sertif-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listSertif.map((sertif =>
            <div key={sertif.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={sertif.gambar} alt="Gambar Sertifikat" />
              <div>
                <h1 className="text-2xl font-bold my-4">{sertif.nama}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Sertifikat */}
    </>
  )
}

export default App
