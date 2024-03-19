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
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">Remi Lebeau</h1>
          <div>
            <button
              onClick={onMobileMenuButtonClicked}
              id="mobile-open-button"
              className="text-3xl sm:hidden focus:outline-none"
            >
              &#9776;
            </button>
            <nav
              className="hidden sm:block space-x-8 text-xl"
              aria-label="main"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="hover:opacity-90"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </header>
    );

  return content;
}
