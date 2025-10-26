// components/ProfitChart.tsx
"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { profits } from "../data/profit.data";

const ProfitChart = () => {
  return (
    <div className="w-full bg-white/70 backdrop-blur-md shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Grafik Keuntungan Bulanan
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={profits}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="month" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
            formatter={(value: number) => `Rp ${value.toLocaleString("id-ID")}`}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
            name="Pendapatan"
          />
          <Line
            type="monotone"
            dataKey="netProfit"
            stroke="#16a34a"
            strokeWidth={3}
            dot={{ r: 5 }}
            name="Laba Bersih"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitChart;
