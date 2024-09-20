import Link from "next/link";

type Props = {
  links: { name: string; href: string }[];
};

export default function DesktopNavbar({ links }: Props) {
  const renderedLinks = links.map((link) => (
    <button key={link.name} className="rounded-xl">
      <Link key={link.name} href={link.href}>
        <p className="hover:opacity-80">{link.name}</p>
      </Link>
    </button>
  ));
  return (
    <nav className="mx-auto flex max-w-4xl flex-row justify-evenly p-4 text-3xl font-bold">
      {renderedLinks}
    </nav>
  );
}
