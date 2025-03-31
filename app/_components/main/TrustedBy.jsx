import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  "Trusted by top professionals worldwide.",
  "Over 10,000 websites built with us!",
  "Your success is our priority.",
  "High-performance websites for your business.",
  "Let’s build something amazing together!",
];

export function TrustedBy() {
  return (
    <div className="relative text-stone-300 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:15s]" pauseOnHover>
        {reviews.map((text, index) => (
          <span
            key={index}
            className="text-lg font-medium whitespace-nowrap mx-8"
          >
            {text}
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
