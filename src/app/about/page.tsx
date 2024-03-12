import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto">
      <p className="text-xl m-8">
        Born in Canada, raised in Columbus, Ohio, USA. I grew up in a Lebanese
        home: I am first-generation American on my mother's side; and
        second-generation on my father's side.
      </p>
      <hr />
      <p className="text-xl m-8">
        I graduated from The Ohio State University with a finance degree in
        2022.
      </p>

      <p className="text-xl m-8">
        After graduating from The Ohio State University in 2020 with a finance
        degree, I worked for a family friend in wealth management and financial
        planning.
      </p>
      <h1 className="text-3xl font-bold text-center">About</h1>
      <section className="grid grid-cols-4 mt-auto place-items-center gap-4 m-4 p-4">
        <Image
          src="/images/osu.svg"
          width={400}
          height={400}
          alt="Ohio State Buckeyes"
        />
        <Image
          src="./images/vatican.svg"
          width={400}
          height={400}
          alt="Vatican"
        />
        <Image
          src="/images/nintendo.svg"
          width={400}
          height={400}
          alt="Nintendo"
        />
        <Image
          src="/images/playstation.svg"
          width={400}
          height={400}
          alt="PlayStation"
        />
        <Image src="/images/ubuntu.svg" width={400} height={400} alt="Ubuntu" />
        <Image src="/images/usa.svg" width={400} height={400} alt="USA" />
        <Image src="/images/canada.svg" width={400} height={400} alt="Canada" />
        <Image
          src="/images/lebanon.svg"
          width={400}
          height={400}
          alt="Lebanon"
        />
        <Image src="/images/france.svg" width={400} height={400} alt="France" />
      </section>
    </main>
  );
}
