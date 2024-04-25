"use client";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Technologies", href: "/technologies" },
    { name: "Projects", href: "/projects" },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header>
      {isMobile ? (
        <MobileNavbar links={links} />
      ) : (
        <DesktopNavbar links={links} />
      )}
    </header>
  );
}
