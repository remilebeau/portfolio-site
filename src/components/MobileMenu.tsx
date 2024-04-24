import Link from "next/link";

type Props = {
  onMobileMenuButtonClicked: () => void;
  links: {
    name: string;
    path: string;
  }[];
  onLinkClicked: () => void;
};

export default function MobileMenu({
  onMobileMenuButtonClicked,
  links,
  onLinkClicked,
}: Props) {
  return (
    <section
      id="mobile-menu"
      className="absolute top-0 flex w-full origin-top flex-col justify-center bg-background text-5xl font-bold"
    >
      {/* close button */}
      <button
        onClick={onMobileMenuButtonClicked}
        id="mobile-close-button"
        className="self-end px-6 text-8xl"
      >
        &times;
      </button>
      {/* menu items */}
      <nav
        className="flex min-h-screen flex-col items-center py-8"
        aria-label="mobile"
      >
        {links.map((link) => (
          <Link
            className="w-full py-6 text-center hover:opacity-90"
            key={link.path}
            onClick={onLinkClicked}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
