"use client";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { ModeToggle } from "./ThemeSwitch";

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];

  const content = (
    <header>
      {/* parent container for navbar content */}
      <nav className="flex items-center justify-between p-4">
        {/* desktop or mobile menu*/}
        <section className="flex flex-col sm:flex-row">
          {showMobileMenu ? (
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
          )}
        </section>
        {/* github and email icons */}
        <section
          className="flex items-center
         gap-4 sm:flex-row"
        >
          <a
            href="https://github.com/remilebeau"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-4xl hover:opacity-90" />
          </a>
          <a
            href="mailto:remilebeau90@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className="text-4xl hover:opacity-90" />
          </a>
        </section>
        {/* light/dark mode toggle */}
        <section className={`flex ${showMobileMenu ? "hidden" : "block"}`}>
          <ModeToggle />
        </section>
      </nav>
    </header>
  );
  return content;
}
