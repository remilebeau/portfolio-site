import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-primary">
          Hello and welcome. I&apos;m Wes.
        </h1>
        <p className="text-3xl">
          A full-stack web developer with a background in finance and business
          analytics.
        </p>
        <p className="text-3xl">
          Please use this site to demo my projects, visit my GitHub, or send me
          an email.
        </p>
      </section>

      {/* TODO: ADD BUSINESS BACKGROUND */}
      <h2 className="text-center text-4xl font-bold text-primary">
        My Business Background
      </h2>
      <section className="flex flex-col gap-4">
        <p className="text-3xl">
          My formal training is in business, and most of my experience is in
          business analytics and operations management.
        </p>
        <p className="text-3xl">
          Business Analytics:
          <ul className="list-inside list-disc">
            <li>Optimize production quantity with linear programming</li>
            <li>Forecast profit with Monte Carlo simulation</li>
            <li>Define and measure Key Performance Indicators over time</li>
          </ul>
        </p>
        <p className="text-3xl">
          Operations Management
          <ul className="list-inside list-disc">
            <li>Create and analyze financial statements</li>
            <li>Expense analysis and reduction</li>
            <li>Pareto analysis</li>
          </ul>
        </p>
      </section>
      <h2 className="text-center text-4xl font-bold text-primary">About</h2>
      <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <AboutCards />
      </section>
      <h2 className="text-center text-4xl font-bold text-primary">Favorites</h2>
      <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <FavoriteCards />
      </section>
    </main>
  );
}
