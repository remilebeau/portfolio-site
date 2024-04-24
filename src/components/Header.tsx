"use client";
import Link from "next/link";
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
  const renderedLinks = links.map((link) => (
    <Link key={link.name} href={link.href}>
      <p className="hover:opacity-80">{link.name}</p>
    </Link>
  ));
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header>
      {isMobile ? (
        <MobileNavbar renderedLinks={renderedLinks} />
      ) : (
        <DesktopNavbar renderedLinks={renderedLinks} />
      )}
    </header>
  );
}
