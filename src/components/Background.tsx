export default function Background() {
  return (
    <>
      <h2 className="text-center text-3xl font-bold">Financial Background</h2>
      <ul className="text-center text-xl">
        <li className="rounded-xl p-4 font-bold text-indigo-700">
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
      <h2 className="text-center text-3xl font-bold">
        Business Analytics Background
      </h2>
      <ul className="flex flex-col text-center text-xl sm:grid sm:grid-cols-2">
        <li>Data-driven decision-making</li>
        <li>Risk management</li>
        <li>Machine learning</li>
        <li>Predictive analytics</li>
        <li>Data visualization</li>
        <li>Data analysis</li>
      </ul>
    </>
  );
}
