// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="base"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-slate-50 to-slate-200 overflow-hidden px-8 md:px-16 py-20"
    >
      {/* Konten Teks */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Tampil Gaya dengan Sentuhan Baru <br />
          dari <span className="text-blue-600">Zenith Fashion</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Jelajahi koleksi eksklusif kami — <strong>skinny jeans</strong> hitam dan putih klasik
          yang dirancang untuk menonjolkan esensi dari gaya minimalis modern.
        </p>

        <div className="flex space-x-4">
          <Link
            href="/#profit"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Lihat Keuntungan
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors"
          >
            Jelajahi Produk
          </Link>
        </div>
      </motion.div>

      {/* Gambar Hero */}
      <motion.div
        className="flex-1 flex justify-center items-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/2_11zon.jpeg"
            alt="Celana Zenith Fashion"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Lingkaran Dekoratif */}
        <div className="absolute -bottom-20 right-0 w-72 h-72 bg-blue-300/40 blur-3xl rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
