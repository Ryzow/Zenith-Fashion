// components/ProfitSection.tsx
"use client";

import ProfitChart from "./ProfitChart";
import { profits } from "../data/profit.data";

const ProfitSection = () => {
  // Ambil data profit terbaru
  const latest = profits[profits.length - 1];

  return (
    <section
      className="w-full min-h-screen bg-gradient-to-b from-white to-slate-100 flex flex-col items-center justify-center py-16 px-6"
      id="profit"
    >
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Pertumbuhan <span className="text-blue-600">Keuntungan Zenith</span>
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Lihat bagaimana <strong>Zenith Fashion</strong> terus berkembang dengan peningkatan
        keuntungan yang konsisten setiap bulannya. Fokus kami pada kualitas dan gaya minimalis
        mendorong hasil yang kuat di setiap peluncuran produk terbaru.
      </p>

      {/* Kartu Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg text-gray-500">Pendapatan Terbaru</h3>
          <p className="text-2xl font-semibold text-blue-600 mt-2">
            Rp {latest.revenue.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg text-gray-500">Pengeluaran Terbaru</h3>
          <p className="text-2xl font-semibold text-red-500 mt-2">
            Rp {latest.expenses.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg text-gray-500">Laba Bersih</h3>
          <p className="text-2xl font-semibold text-green-600 mt-2">
            Rp {latest.netProfit.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      {/* Grafik */}
      <div className="w-full max-w-5xl">
        <ProfitChart />
      </div>
    </section>
  );
};

export default ProfitSection;
