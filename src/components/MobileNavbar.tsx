import Link from "next/link";
import { useState } from "react";

type Props = { links: { name: string; href: string }[] };

export default function MobileNavbar({ links }: Props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const onMobileMenuLinkClicked = () => {
    // close mobileMenu
    setMobileMenu(false);
    // scroll to top
    window.scrollTo(0, 0);
  };

  const renderedLinks = links.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      onClick={onMobileMenuLinkClicked}
      className="hover:opacity-80"
    >
      <p>{link.name}</p>
    </Link>
  ));
  return (
    <nav className="flex flex-col justify-evenly gap-8 p-4 text-3xl font-bold">
      {/* mobile open button */}
      <button onClick={toggleMobileMenu}>&#9776;</button>
      {/* mobileMenu */}
      {mobileMenu && (
        <>
          {/* mobile close button */}
          <button className="absolute right-4 top-4" onClick={toggleMobileMenu}>
            &times;
          </button>
          <nav className="top-0 mt-8 flex min-h-screen flex-col items-center gap-4">
            {renderedLinks}
          </nav>
        </>
      )}
    </nav>
  );
}
