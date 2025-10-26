// app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-100 text-gray-800 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold text-slate-800 mb-4"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6 text-center"
      >
        Halaman tidak ditemukan
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-slate-600 text-center max-w-md mb-8"
      >
        Sepertinya halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        Mari kembali ke beranda dan temukan produk terbaik kami!
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link href="/">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-xl shadow-md">
            Kembali ke Beranda
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
