import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Hello and welcome. I&apos;m Wes.</h1>
        <p className="text-3xl">
          A finance and operations manager changing careers to software
          engineering.
        </p>
        <p className="text-3xl">
          Currently focusing on full-stack web development.
        </p>
      </section>

      <p className="text-3xl">
        Please use this site to demo my projects, visit my GitHub, or send me an
        email.
      </p>
      <h2 className="text-center text-4xl font-bold">About</h2>
      <section className="flex flex-col gap-4 p-4 sm:grid sm:grid-cols-2">
        <AboutCards />
      </section>
      <h2 className="text-center text-4xl font-bold">Favorites</h2>
      <section className="flex flex-col gap-4 p-4 sm:grid sm:grid-cols-2">
        <FavoriteCards />
      </section>
    </main>
  );
}
