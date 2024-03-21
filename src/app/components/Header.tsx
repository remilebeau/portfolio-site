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
      <section className="bg-teal-700 min-h-screen">
        <button
          onClick={onMobileMenuButtonClicked}
          id="mobile-close-button"
          className="text-6xl sm:hidden"
        >
          &times;
        </button>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8 text-4xl">
          {links.map((link) => (
            <li
              className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl font-bold"
              key={link.path}
              onClick={onLinkClicked}
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
          <button
            onClick={onMobileMenuButtonClicked}
            id="mobile-open-button"
            className="text-3xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
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
