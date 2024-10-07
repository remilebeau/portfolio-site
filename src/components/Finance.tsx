export default function Finance() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="rounded-3xl bg-indigo-700 p-2 text-center text-3xl font-bold ">
        Finance Background
      </h2>
      <ul className="text-center text-xl text-indigo-700">
        <li className="mb-4 text-2xl font-bold">
          <p>Bachelor of Science, Business Administration: Finance</p>
          <p>
            <i>Summa Cum Laude, The Ohio State University</i>
          </p>
        </li>
        <section className="flex flex-col sm:grid sm:grid-cols-2">
          <section className="flex flex-col">
            <li>Financial analysis</li>
            <li>Investment analysis</li>
          </section>
          <section className="flex flex-col">
            <li>Financial planning</li>
            <li>Risk management</li>
          </section>
        </section>
      </ul>
    </section>
  );
}
