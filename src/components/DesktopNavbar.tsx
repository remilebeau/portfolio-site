import Link from "next/link";

type Props = {
  links: { name: string; href: string }[];
};

export default function DesktopNavbar({ links }: Props) {
  const renderedLinks = links.map((link) => (
    <Link key={link.name} href={link.href}>
      <p className="hover:opacity-80">{link.name}</p>
    </Link>
  ));
  return (
    <nav className="ga-8 flex flex-row justify-evenly p-4 text-3xl font-bold">
      {renderedLinks}
    </nav>
  );
}
