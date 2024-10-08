import Link from "next/link";

type Props = {
  links: { name: string; href: string }[];
};

export default function DesktopNavbar({ links }: Props) {
  const renderedLinks = links.map((link) => (
    <button key={link.name} className="hover:opacity-90">
      <Link key={link.name} href={link.href}>
        {link.name}
      </Link>
    </button>
  ));
  return (
    <nav className="mx-auto flex max-w-4xl flex-row justify-evenly p-4 text-3xl font-bold">
      {renderedLinks}
    </nav>
  );
}
