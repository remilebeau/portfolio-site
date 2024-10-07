export default function BusinessAnalytics() {
  return (
    <section>
      <h2 className="rounded-3xl bg-red-500 p-2 text-center text-3xl font-bold">
        Business Analytics Background
      </h2>
      <ul className="flex flex-col text-center text-xl text-red-500 sm:grid sm:grid-cols-2">
        <section className="flex flex-col">
          <li>Data-driven decision-making</li>
          <li>Machine learning</li>
        </section>
        <section className="flex flex-col">
          <li>Simulation modeling</li>
          <li>Optimization modeling</li>
        </section>
      </ul>
    </section>
  );
}
