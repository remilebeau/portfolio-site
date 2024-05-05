import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Favorites | Wes S",
  description: "Hobbies of Wes S",
};

type FavoriteCard = {
  title: string;
  content: string[];
};

export default function FavoritesPage() {
  const cards: FavoriteCard[] = [
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
        "Phil Collins",
        "Def Leppard",
        "Metallica",
        "Van Halen",
      ],
    },
  ];
  const renderedFavorites = cards.map((card) => (
    <Card key={card.title} className="flex h-full w-full flex-col border-4 p-2">
      <CardHeader>
        <CardTitle className="text-center text-3xl">{card.title}</CardTitle>
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
    <>
      <h2 className="text-5xl font-bold">Favorites</h2>
      <article className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
        {renderedFavorites}
      </article>
    </>
  );
}
