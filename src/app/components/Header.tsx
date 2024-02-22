import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];
  return (
    <header>
      <h1 className="header__h1">Remi's Portfolio</h1>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          {links.map((link) => (
            <li key={link.path} className="header__nav__li">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
