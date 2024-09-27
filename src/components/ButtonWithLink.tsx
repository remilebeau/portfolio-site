type Props = {
  href: string;
  text: string;
};

export default function ButtonWithLink({ href, text }: Props) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <button className="w-full rounded-xl bg-teal-700 p-4 font-bold transition-all duration-300 ease-in-out hover:bg-black">
        {text}
      </button>
    </a>
  );
}
