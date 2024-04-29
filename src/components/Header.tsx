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
    { name: "Favorites", href: "/favorites" },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="sticky top-0 z-10 bg-background">
      {isMobile ? (
        <MobileNavbar links={links} />
      ) : (
        <DesktopNavbar links={links} />
      )}
    </header>
  );
}
