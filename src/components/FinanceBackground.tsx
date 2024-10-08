import Image from "next/image";
import excel from "../../public/images/excel.svg";
import python from "../../public/images/python.svg";
import { Card, CardFooter, CardHeader } from "./ui/card";
export default function FinanceBackground() {
  const cards = [
    {
      title: "Excel",
      src: excel,
    },
    {
      title: "Python",
      src: python,
    },
  ];
  const renderedCards = cards.map((card) => (
    <Card
      key={card.title}
      className="flex flex-col items-center justify-evenly border-none"
    >
      <CardHeader>
        <Image src={card.src} alt={card.title} width={200} height={200} />
      </CardHeader>
      <CardFooter className="text-2xl font-bold">{card.title}</CardFooter>
    </Card>
  ));
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mb-8 rounded-3xl bg-teal-700 p-2 text-center text-5xl font-bold">
        Financial Analysis Background
      </h1>
      <h2 className="mb-4 text-2xl font-bold">
        <p>Bachelor of Science, Business Administration: Finance</p>
        <p>
          <i>Summa Cum Laude, The Ohio State University</i>
        </p>
      </h2>
      <ul className="flex flex-col text-center text-xl sm:grid sm:grid-cols-2">
        <section className="flex flex-col">
          <li>Data-driven decision-making</li>
          <li>Expense analysis</li>
          <li>Financial accounting</li>
          <li>Financial planning</li>
          <li>Investment analysis</li>
        </section>
        <section className="flex flex-col">
          <li>Machine learning</li>
          <li>Managerial accounting</li>
          <li>Optimization modeling</li>
          <li>Risk management</li>
          <li>Simulation modeling</li>
        </section>
      </ul>
      <ul className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2">
        {renderedCards}
      </ul>
    </section>
  );
}
