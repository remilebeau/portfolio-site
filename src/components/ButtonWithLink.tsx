import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  text: string;
};

export default function ButtonWithLink({ href, text }: Props) {
  return (
    <Button>
      <a
        className="font-bold sm:text-2xl"
        target="_blank"
        rel="noreferrer"
        href={href}
      >
        {text}
      </a>
    </Button>
  );
}
