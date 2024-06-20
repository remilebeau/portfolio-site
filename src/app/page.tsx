import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <article className="flex flex-col gap-4">
        <h1 className="text-center text-5xl font-bold text-primary">
          Hello and welcome. I&apos;m Wes.
        </h1>
        <p className="text-3xl">
          A full-stack web developer with a background in finance and business
          analytics.
        </p>
      </article>

      <article className="flex flex-col gap-4">
        <h2 className="text-center text-4xl font-bold text-primary">
          My Business Background
        </h2>
        <h3 className="text-3xl font-bold text-primary">Finance</h3>
        <ul className="list-inside list-disc text-2xl">
          <li>Financial planning</li>
          <li>Risk management</li>
          <li>Financial statement analysis</li>
          <li>Budget analysis</li>
        </ul>
        <h3 className="text-3xl font-bold text-primary">Business Analytics</h3>
        <ul className="list-inside list-disc text-2xl">
          <li>Profit/demand forecasting</li>
          <li>Define and measure KPIs over time</li>
          <li>Resource optimization</li>
          <li>Pareto analysis</li>
          <li>Data-driven decision-making</li>
        </ul>
      </article>

      <article className="flex flex-col gap-4">
        <h2 className="text-center text-4xl font-bold text-primary">About</h2>
        <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
          <AboutCards />
        </section>
      </article>
      <h2 className="text-center text-4xl font-bold text-primary">Favorites</h2>

      <article className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <FavoriteCards />
      </article>
    </main>
  );
}
