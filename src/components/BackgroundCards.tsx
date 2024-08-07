export default function BackgroundCards() {
  const cards = [
    {
      title: "Finance",
      content: [
        "Financial accounting",
        "Managerial accounting",
        "Risk management",
        "Personal finance",
        "Corporate finance",
      ],
    },
    {
      title: "Business Analytics",
      content: [
        "Simulation modeling",
        "Optimization modeling",
        "Predictive modeling",
        "Data mining",
        "Data analysis",
      ],
    },
  ];
  const renderedCards = cards.map((card) => (
    <section
      key={card.title}
      className="flex flex-col rounded-xl border-4 border-border bg-card p-4"
    >
      <header>
        <h2 className="mb-2 text-center text-3xl text-primary">{card.title}</h2>
      </header>
      <section className="flex flex-col gap-4">
        {card.content.map((line) => (
          <p className="text-2xl font-bold" key={line}>
            {line}
          </p>
        ))}
      </section>
    </section>
  ));
  return (
    <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
      {renderedCards}
    </section>
  );
}
