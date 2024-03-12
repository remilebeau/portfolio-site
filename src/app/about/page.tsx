import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="grid grid-cols-4 mt-auto place-items-center gap-4 m-4 p-4">
      <Image
        src="/images/osu.svg"
        width={400}
        height={400}
        alt="Ohio State Buckeyes"
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
      <Image src="/images/lebanon.svg" width={400} height={400} alt="Lebanon" />
      <Image src="/images/france.svg" width={400} height={400} alt="France" />
    </main>
  );
}
