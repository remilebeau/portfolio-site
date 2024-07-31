import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        "Dragon Ball Z",
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
    <Card key={card.title} className="flex flex-col border-4 border-ring">
      <CardHeader>
        <CardTitle className="text-center text-3xl text-primary">
          {card.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {card.content.map((line) => (
          <p className="text-left text-2xl" key={line}>
            {line}
          </p>
        ))}
      </CardContent>
    </Card>
  ));
  return (
    <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
      {renderedFavorites}
    </section>
  );
}
