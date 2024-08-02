type Props = {
  href: string;
  text: string;
};

export default function ButtonWithLink({ href, text }: Props) {
  return (
    <button className="rounded-xl bg-primary p-2 text-2xl font-bold text-secondary hover:opacity-80">
      <a href={href}>{text}</a>
    </button>
  );
}
