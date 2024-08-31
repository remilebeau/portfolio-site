export default function BackgroundCards() {
  const cards: BackgroundCard[] = [
    {
      title: "Finance",
      content: [
        "Financial accounting",
        "Managerial accounting",
        "Risk management",
        "Personal finance",
      ],
    },
    {
      title: "Business Analytics",
      content: [
        "Stochastic modeling",
        "Optimization modeling",
        "Predictive modeling",
        "Data analysis",
      ],
    },
  ];
  const renderedCards = cards.map((card) => (
    <section
      key={card.title}
      className="flex flex-col rounded-xl border-4 border-border bg-card p-4"
    >
      <h2 className="mb-2 text-center text-3xl text-primary">{card.title}</h2>

      <section className="flex flex-col gap-4">
        {card.content.map((line) => (
          <p className="text-2xl" key={line}>
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
