import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];
  return (
    <header>
      <h1>Remi Lebeau</h1>
      <section className="header__container">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}
