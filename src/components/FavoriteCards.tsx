export default function FavoriteCards() {
  const cards: FavoriteCard[] = [
    {
      title: "Game Developers",
      content: ["Nintendo", "Capcom", "CD Projekt Red", "Sony", "Square Enix"],
    },
    {
      title: "Movies",
      content: [
        "A Christmas Carol (1984)",
        "It's a Wonderful Life",
        "Nacho Libre",
        "Gran Torino",
        "Forrest Gump",
      ],
    },
    {
      title: "TV Shows",
      content: [
        "The Sopranos",
        "Seinfeld",
        "Married With Children",
        "Batman: The Animated Series",
        "Dragon Ball Z",
      ],
    },
    {
      title: "Music",
      content: [
        "Michael Jackson",
        "Def Leppard",
        "Metallica",
        "Van Halen",
        "Queen",
      ],
    },
  ];
  const renderedFavorites = cards.map((card) => (
    <section
      key={card.title}
      className="flex flex-col rounded-xl border-4 border-border bg-card p-4"
    >
      <h2 className="mb-2 text-center text-3xl text-accent">{card.title}</h2>
      <section className="flex flex-col gap-4">
        {card.content.map((line) => (
          <p className="text-xl" key={line}>
            {line}
          </p>
        ))}
      </section>
    </section>
  ));
  return (
    <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
      {renderedFavorites}
    </section>
  );
}
