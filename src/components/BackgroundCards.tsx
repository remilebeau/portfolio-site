import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BackgroundCards() {
  return (
    <section className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center sm:text-2xl">
            Financial Background
          </CardTitle>
          <CardDescription className="flex flex-col justify-evenly gap-0 text-center text-xl font-bold sm:text-2xl">
            <p>BSBA, Finance Specialization</p>
            <p>Summa Cum Laude</p>
            <p>
              <i>The Ohio State University</i>
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xl font-bold sm:grid sm:grid-cols-2">
          <p>Corporate finance</p>
          <p>Entrepreneurial finance</p>
          <p>Risk management</p>
          <p>Financial planning</p>
          <p>Financial accounting</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Business Analytics Background
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xl font-bold sm:grid sm:grid-cols-2">
          <p>Data-driven decision-making</p>
          <p>Risk management</p>
          <p>Machine learning</p>
          <p>Predictive analytics</p>
          <p>Data visualization</p>
          <p>Data analysis</p>
        </CardContent>
      </Card>
    </section>
  );
}
