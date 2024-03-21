"use client";
import Link from "next/link";
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
      <section
        id="mobile-menu"
        className="bg-teal-700 absolute top-0 w-full text-5xl flex flex-col justify-center origin-top animate-open-menu"
      >
        <button
          onClick={onMobileMenuButtonClicked}
          id="mobile-close-button"
          className="text-8xl self-end px-6"
        >
          &times;
        </button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          {links.map((link) => (
            <Link
              className="w-full text-center py-6 hover:opacity-90"
              key={link.path}
              onClick={onLinkClicked}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>
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
          <button
            onClick={onMobileMenuButtonClicked}
            id="mobile-open-button"
            className="text-3xl md:hidden"
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
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
        </section>
      </header>
    );

  return content;
}
