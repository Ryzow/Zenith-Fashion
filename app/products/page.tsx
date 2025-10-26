// app/products/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { products } from "../data/products.data";
import { Product } from "../types";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-gray-800 pt-24 pb-16 px-6 md:px-16 relative">

      {/* Tombol Kembali */}
      <motion.div
        className="absolute top-8 left-6 md:left-16"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Jelajahi Koleksi <span className="text-blue-600">Skinny Jeans</span> Kami
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Temukan koleksi premium celana skinny jeans hitam dan putih — paduan sempurna antara kenyamanan, gaya, dan kesederhanaan modern.
        </p>
      </motion.div>

      {/* Grid Produk */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Gambar Produk */}
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Informasi Produk */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Ukuran */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.size?.map((s) => (
                  <span
                    key={s}
                    className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Harga + Stok */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-blue-600">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                <span className="text-sm text-gray-500">
                  Stok: {product.stock}
                </span>
              </div>

              {/* Tombol Detail */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full py-2 mt-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                Lihat Detail
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Modal Detail Produk */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tombol Tutup */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
              >
                <X size={22} />
              </button>

              {/* Isi Modal */}
              <div className="grid md:grid-cols-2">
                {/* Gambar */}
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Produk */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {selectedProduct.description}
                    </p>

                    {/* Ukuran */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProduct.size?.map((s: string) => (
                        <span
                          key={s}
                          className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-blue-600">
                        Rp {selectedProduct.price.toLocaleString("id-ID")}
                      </span>
                      <span className="text-sm text-gray-500">
                        Stok: {selectedProduct.stock}
                      </span>
                    </div>

                    <button className="w-full py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Tambahkan ke Keranjang
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
