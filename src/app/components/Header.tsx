"use client";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./ThemeSwitch";

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
        className="absolute top-0 flex w-full origin-top animate-open-menu flex-col justify-center bg-teal-700 text-5xl"
      >
        <button
          onClick={onMobileMenuButtonClicked}
          id="mobile-close-button"
          className="self-end px-6 text-8xl"
        >
          &times;
        </button>
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          {links.map((link) => (
            <Link
              className="w-full py-6 text-center hover:opacity-90"
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
      <header className="sticky top-0 z-10 bg-slate-800 text-white dark:bg-teal-700">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium">Wes S</h1>
          <button
            onClick={onMobileMenuButtonClicked}
            id="mobile-open-button"
            className="text-3xl md:hidden"
          >
            &#9776;
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
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
        {/* TODO: remove this later */}
        <ModeToggle />
      </header>
    );

  return content;
}
