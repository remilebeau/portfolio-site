import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
