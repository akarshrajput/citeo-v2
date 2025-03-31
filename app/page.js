import { ThemeButton } from "./_components/buttons/ThemeButton";
import Hero from "./_components/main/Hero";
import { TrustedBy } from "./_components/main/TrustedBy";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-40">
        <Hero />
      </div>
      <div className="mt-16">
        <TrustedBy />
      </div>
    </div>
  );
}
