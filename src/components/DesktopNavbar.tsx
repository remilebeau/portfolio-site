type Props = {
  renderedLinks: JSX.Element[];
};

export default function DesktopNavbar({ renderedLinks }: Props) {
  return (
    <nav className="ga-8 flex flex-row justify-evenly p-4 text-3xl font-bold">
      {renderedLinks}
    </nav>
  );
}
