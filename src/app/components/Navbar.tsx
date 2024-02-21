import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Code", path: "/code" },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
