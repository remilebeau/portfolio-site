import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];
  return (
    <header>
      <section className="header__container">
        <h1>Remi Lebeau</h1>
        <div>
          <button
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
        </div>
      </section>
    </header>
  );
}
