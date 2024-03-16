"use client";
import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];

  let content;

  // dropdown mobileMenu enabled
  if (mobileMenu) {
    content = (
      <section className="mobile-menu">
        <button
          onClick={onMobileMenuButtonClicked}
          id="mobile-open-button"
          className="mobile-menu__btn"
        >
          &times;
        </button>
        <ul className="mobile-menu__ul">
          {links.map((link) => (
            <li
              key={link.path}
              onClick={onLinkClicked}
              className="mobile-menu__li"
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  // dropdown mobileMenu disabled
  // disabled by clicking a Link or pressing the X button
  else
    content = (
      <header>
        <section className="header-container">
          <h1>Remi Lebeau</h1>
          <button
            onClick={onMobileMenuButtonClicked}
            id="mobile-open-button"
            className="text-3xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav aria-label="main">
            {links.map((link) => (
              <Link key={link.path} href={link.path}>
                {link.name}
              </Link>
            ))}
          </nav>
        </section>
      </header>
    );

  return content;
}
