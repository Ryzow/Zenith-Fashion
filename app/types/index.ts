// types/index.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // contoh: "/images/tshirt.jpg"
  description?: string;
  size?: string[]; // contoh: ["S", "M", "L"]
  stock?: number;
}

export interface Profit {
  month: string; // contoh: "October"
  revenue: number; // contoh: 12000000
  expenses: number; // contoh: 5000000
  netProfit: number; // hasil revenue - expenses
}

// jika mau gabungkan untuk props ke komponen:
export interface DashboardData {
  products: Product[];
  profits: Profit[];
}
