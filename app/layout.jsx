import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
