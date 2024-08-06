export default function FavoriteCards() {
  const cards = [
    {
      title: "Game Series",
      content: [
        "Super Mario",
        "The Legend of Zelda",
        "Super Smash Bros.",
        "Mario Kart",
        "Mario Party",
      ],
    },
    {
      title: "TV Shows",
      content: [
        "The Sopranos",
        "Seinfeld",
        "Married With Children",
        "Pawn Stars",
        "The Price Is Right",
      ],
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
      title: "Music",
      content: [
        "Michael Jackson",
        "Def Leppard",
        "Queen",
        "Metallica",
        "Van Halen",
      ],
    },
  ];
  const renderedFavorites = cards.map((card) => (
    <section
      key={card.title}
      className="flex flex-col rounded-xl border-4 border-border bg-card p-4"
    >
      <header>
        <h2 className="mb-2 text-center text-3xl text-primary">{card.title}</h2>
      </header>
      <section className="flex flex-col gap-4">
        {card.content.map((line) => (
          <p className="text-left text-2xl font-bold" key={line}>
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
