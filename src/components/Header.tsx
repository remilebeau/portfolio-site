"use client";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onMobileMenuButtonClicked = () => {
    window.scrollTo(0, 0); // scroll to top of page
    setShowMobileMenu(!showMobileMenu);
  };

  const onLinkClicked = () => {
    setShowMobileMenu(false);
  };

  const links = [
    { name: "Wes S", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];

  return showMobileMenu ? (
    <MobileMenu
      onMobileMenuButtonClicked={onMobileMenuButtonClicked}
      links={links}
      onLinkClicked={onLinkClicked}
    />
  ) : (
    <DesktopMenu
      onMobileMenuButtonClicked={onMobileMenuButtonClicked}
      links={links}
    />
  );
}
