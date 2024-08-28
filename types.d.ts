type AboutCard = {
  title: string;
  src: string;
  caption: string;
};

type BackgroundCard = {
  title: string;
  content: string[];
};

type FavoriteCard = {
  title: string;
  content: string[];
};

type ProjectCard = {
  title: string;
  description: string;
  image: any;
  live: string;
  sourceCode: string;
  apiURL?: string;
};

type TechnologyCard = {
  title: string;
  src: string;
  styling?: string;
};
