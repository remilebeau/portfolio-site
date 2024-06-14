import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

//  <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Hello and welcome. I&apos;m Wes.</h1>
        <p className="text-3xl">
          A finance and operations manager changing careers to software
          engineering.
        </p>
        <p className="text-3xl">
          Currently focusing on full-stack web development.
        </p>
        <p className="text-3xl">
          Please use this site to demo my projects, visit my GitHub, or send me
          an email.
        </p>
      </section>

      <h2 className="text-center text-4xl font-bold">About</h2>
      <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <AboutCards />
      </section>
      <h2 className="text-center text-4xl font-bold">Favorites</h2>
      <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <FavoriteCards />
      </section>
    </main>
  );
}
