// returns the README.md content
export default async function getReadme(repo: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/remilebeau/${repo}/main/README.md`
  );
  const readme = await res.text();
  return readme;
}
