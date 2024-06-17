import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Hello and welcome. I&apos;m Wes.</h1>
        <p className="text-3xl">
          A full-stack web developer with a background in finance and business
          analytics.
        </p>
        <p className="text-3xl">
          Please use this site to demo my projects, visit my GitHub, or send me
          an email.
        </p>
      </section>

      <h2>My business background</h2>

      <section className="flex flex-col gap-4">
        <p className="text-2xl">
          I am a full-stack web developer with a background in finance and
          business analytics. I have a passion for using technology to solve
          business problems. Whether it&apos;s building and analyzing a Monte
          Carlo simulation in a marketing, financial, or operational context, I
          am excited to be part of your team.
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
