import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CartProvider from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata = {
  title: "RootsKitchen | Authentic Village Recipes & Heritage Cooking",
  description:
    "Rediscover the lost flavors of the countryside. RootsKitchen brings you traditional, slow-cooked, farm-to-table recipes passed down through generations.",
  keywords: [
    "village recipes",
    "traditional cooking",
    "heritage food",
    "farm to table",
    "authentic recipes",
    "rustic kitchen",
  ],
  authors: [{ name: "Md. Nazmul Hasan" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-[#FDFBF7] text-stone-800">
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
