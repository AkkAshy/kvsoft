import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IJARA UZ - Уютный поиск жилья",
  description: "Найди своё идеальное жильё в Узбекистане. Аренда квартир, комнат и домов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunito.className} antialiased bg-pattern`}>
        {children}
      </body>
    </html>
  );
}
