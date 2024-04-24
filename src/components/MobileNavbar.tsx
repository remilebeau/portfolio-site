import { useState } from "react";

type Props = { renderedLinks: JSX.Element[] };

export default function MobileNavbar({ renderedLinks }: Props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="flex flex-col justify-evenly gap-8 p-4 text-3xl font-bold">
      {/* mobile open button */}
      <button onClick={toggleMobileMenu}>&#9776;</button>
      {/* mobileMenu */}
      {mobileMenu && (
        <>
          {/* mobile close button */}
          <button className="absolute right-4 top-4" onClick={toggleMobileMenu}>
            &times;
          </button>
          <nav className="top-0 mt-8 flex min-h-screen flex-col items-center gap-4">
            {renderedLinks}
          </nav>
        </>
      )}
    </nav>
  );
}
