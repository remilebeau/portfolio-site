import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Wes S",
  description: "The portfolio page of Wes S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-white ${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
