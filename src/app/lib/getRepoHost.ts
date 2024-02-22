export default function getRepoHost(repo: string) {
  const projectUrls = [
    {
      name: "blogproject",
      url: "https://nextjs-blogproject.vercel.app/",
    },
    {
      name: "wikirocket",
      url: "https://nextjs-wikirocket-black.vercel.app/",
    },
    {
      name: "python-weather",
      url: "https://python-weather-o9ui.onrender.com",
    },
    {
      name: "chat-app",
      url: "https://io-project-kqna.onrender.com",
    },
    {
      name: "todolist",
      url: "https://typescript-todolist.onrender.com",
    },
    {
      name: "shoppingcart",
      url: "https://typescript-shoppingcart.onrender.com",
    },
    {
      name: "django-studybud",
      url: "https://typescript-tic-tac-toe.onrender.com",
    },
  ];

  const projectUrl = projectUrls.find((project) => project.name === repo);
  if (projectUrl) {
    return projectUrl.url;
  }
}
