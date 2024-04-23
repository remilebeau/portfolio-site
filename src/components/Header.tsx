"use client";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const onMobileMenuButtonClicked = () => {
    window.scrollTo(0, 0); // scroll to top of page
    setMobileMenu(!mobileMenu);
  };

  const onLinkClicked = () => {
    setMobileMenu(false);
  };

  const links = [
    { name: "Wes S", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];

  return mobileMenu ? (
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
