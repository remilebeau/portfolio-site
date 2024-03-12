import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];
  return (
    <header className="flex flex-col gap-4 mx-4 my-8 bg-slate-800 sticky top-0 z-10">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Remi Lebeau</h1>
        <nav className="">
          <ul className="flex gap-8 text-lg justify-center">
            {links.map((link) => (
              <li key={link.path} className="hover:opacity-90">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}