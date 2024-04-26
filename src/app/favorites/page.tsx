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
      title: "Sports Teams",
      content: ["Ohio State Buckeyes", "Buffalo Bills", "Toronto Raptors"],
    },
    {
      title: "Game Series",
      content: [
        "The Legend of Zelda",
        "Super Mario",
        "Super Smash Bros.",
        "Mario Kart",
        "Mario Party",
      ],
    },
    {
      title: "TV Shows",
      content: ["The Sopranos", "Seinfeld", "Shark Tank", "MasterChef"],
    },
    {
      title: "Movies",
      content: [
        "A Christmas Carol (1984)",
        "It's a Wonderful Life",
        "Forrest Gump",
      ],
    },
    {
      title: "Musicians",
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
        <CardTitle className="text-center">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {card.content.map((line) => (
          <p className="text-center text-2xl" key={line}>
            {line}
          </p>
        ))}
      </CardContent>
    </Card>
  ));
  return (
    <main className="mx-auto mb-12 flex max-w-4xl flex-col items-center justify-center gap-8 p-12">
      <h2 className="text-5xl font-bold">Favorites</h2>
      <article className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
        {renderedFavorites}
      </article>
    </main>
  );
}
