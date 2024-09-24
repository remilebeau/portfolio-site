export default function Background() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="rounded-3xl bg-indigo-700 p-2 text-center text-3xl font-bold ">
        Financial Background
      </h2>
      <ul className="text-center text-xl text-indigo-700">
        <li className="mb-4 text-2xl font-bold">
          BSBA, Finance Specialization,{" "}
          <i>Summa Cum Laude, The Ohio State University</i>
        </li>
        <div className="flex flex-col sm:grid sm:grid-cols-2">
          <li>Corporate finance</li>
          <li>Entrepreneurial finance</li>
          <li>Risk management</li>
          <li>Financial planning</li>
          <li>Financial accounting</li>
        </div>
      </ul>
      <h2 className="rounded-3xl bg-red-500 p-2 text-center text-3xl font-bold">
        Business Analytics Background
      </h2>
      <ul className="flex flex-col text-center text-xl text-red-500 sm:grid sm:grid-cols-2">
        <li>Data-driven decision-making</li>
        <li>Risk management</li>
        <li>Machine learning</li>
        <li>Predictive analytics</li>
        <li>Data visualization</li>
        <li>Data analysis</li>
      </ul>
    </section>
  );
}
