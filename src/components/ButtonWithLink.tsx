import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  text: string;
};

export default function ButtonWithLink({ href, text }: Props) {
  return (
    <Button className="w-full">
      <a
        className="text-xl font-bold"
        target="_blank"
        rel="noreferrer"
        href={href}
      >
        {text}
      </a>
    </Button>
  );
}
