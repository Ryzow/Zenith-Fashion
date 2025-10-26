// components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-slate-100 to-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20"
    >
      {/* Bagian Gambar */}
      <motion.div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/3_11zon.jpeg"
            alt="Tentang Zenith Fashion"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Bagian Teks */}
      <motion.div
        className="flex-1 text-center md:text-left max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Tentang <span className="text-blue-600">Zenith Fashion</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong>Zenith Fashion</strong> didirikan dengan satu visi — untuk mendefinisikan ulang
          konsep minimalis dalam busana modern. Koleksi kami berfokus pada{" "}
          <strong>celana skinny hitam dan putih</strong> yang timeless, dibuat dengan presisi, kenyamanan,
          serta memperhatikan keberlanjutan lingkungan.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Kami percaya bahwa fashion harus berani namun tetap sederhana. Setiap desain mencerminkan
          keseimbangan sempurna antara kesederhanaan dan kepercayaan diri — memberi kekuatan bagi setiap
          individu untuk mengekspresikan diri mereka dengan mudah dan elegan.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
    