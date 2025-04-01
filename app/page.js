import { ArrowRight, Plane } from "lucide-react";
import { ThemeButton } from "./_components/buttons/ThemeButton";
import Hero from "./_components/main/Hero";
import PortfolioGrid from "./_components/main/PortfolioGrid";
import { TrustedBy } from "./_components/main/TrustedBy";
import { Query } from "./_components/main/Query";
import PlansGrid from "./_components/main/PlansGrid";

export default function Home() {
  return (
    <div className="mb-20">
      <div className="flex justify-center mt-40">
        <Hero />
      </div>
      <div className="mt-16">
        <p className="font-medium text-xs flex items-center justify-center gap-2 mb-10">
          2+ years of expertise <ArrowRight size={16} />
        </p>
        <TrustedBy />
        <div className="flex justify-center">
          <PortfolioGrid />
        </div>
        <div className="flex justify-center">
          <Query />
        </div>
        <div>
          <PlansGrid />
        </div>
      </div>
    </div>
  );
}
