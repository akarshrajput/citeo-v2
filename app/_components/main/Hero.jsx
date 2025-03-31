import { AuroraText } from "@/components/magicui/aurora-text";
import { FlipText } from "@/components/magicui/flip-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1000px] w-full">
        <p className="font-semibold text-violet-300 text-center text-8xl">
          We build <AuroraText>websites</AuroraText> that turn visitors into
          paying <AuroraText>customers.</AuroraText>
        </p>
      </div>
      <div className="max-w-[800px] text-gray-300 mt-10 font-medium text-center w-full">
        <p className="text-xl">
          High-converting websites designed with strategic copy and seamless
          development to attract ready-to-buy customers—helping brands worldwide
          turn visitors into loyal clients and drive growth.
        </p>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <InteractiveHoverButton className="">
          <Link href={`https://cal.com/akarshrajput/15min`}>
            Built your website
          </Link>
        </InteractiveHoverButton>
        {/* <Link
          href="/"
          className="flex gap-1 items-center text-neutral-900 font-medium p-1.5 rounded-full px-4 bg-violet-300"
        >
          Our plans
          <ArrowRight />
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
