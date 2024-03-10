import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];
  return (
    <header className="flex flex-col gap-4 mx-4 my-8 bg-slate-800">
      <h1 className="text-3xl font-bold">Remi's Portfolio</h1>
      <nav className="">
        <ul className="flex gap-8 text-lg justify-center">
          {links.map((link) => (
            <li key={link.path} className="hover:text-orange-500">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
