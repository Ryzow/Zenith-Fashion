// components/ContactFooterSection.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const ContactFooterSection = () => {
  return (
    <section id="contact" className="w-full bg-slate-900 text-white pt-20 pb-10 px-8 md:px-16">
      {/* Bagian Kontak */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Hubungi <span className="text-blue-500">Kami</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Punya pertanyaan atau ingin bekerja sama? Kami dengan senang hati akan mendengarnya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-500 mb-3" />
            <p className="font-medium">zenithfashion@mail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-blue-500 mb-3" />
            <p className="font-medium">+62 812 3456 7890</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-blue-500 mb-3" />
            <p className="font-medium">Palembang, Indonesia</p>
          </div>
        </div>
      </motion.div>

      {/* Garis Pemisah */}
      <div className="border-t border-gray-700 my-10" />

      {/* Bagian Footer */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Zenith Fashion. Seluruh hak cipta dilindungi.
        </p>

        {/* Tautan Sosial Media */}
        <div className="flex space-x-5">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactFooterSection;
