import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";
// import BackgroundCards from "@/components/BackgroundCards";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4 font-bold">
      {/* hero section */}
      <h1 className="rounded-xl bg-primary p-2 text-center text-4xl font-bold text-secondary">
        Hello and welcome. I&apos;m Wes.
      </h1>
      <p className="text-3xl">
        A software engineer experienced in financial planning, healthcare, and
        business analytics.
      </p>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* business background section */}
      {/* <h2 className="rounded-xl bg-primary p-2 text-center text-4xl font-bold text-secondary">
        Business Background
      </h2>
      <BackgroundCards />
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" /> */}
      {/* about section */}
      <h2 className="rounded-xl bg-primary p-2 text-center text-4xl font-bold text-secondary">
        About
      </h2>
      <AboutCards />
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* favorites section */}
      <h2 className="rounded-xl bg-primary p-2 text-center text-4xl font-bold text-secondary">
        Favorites
      </h2>
      <FavoriteCards />
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
    </main>
  );
}
