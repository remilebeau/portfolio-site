import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  text: string;
};

export default function ButtonWithLink({ href, text }: Props) {
  return (
    <Button className="m-4 p-4 text-2xl font-bold text-secondary">
      <a href={href}>{text}</a>
    </Button>
  );
}
