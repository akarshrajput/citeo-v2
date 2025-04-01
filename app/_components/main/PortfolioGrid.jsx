import React from "react";
import Portfolio from "./Portfolio";
import { ArrowRight } from "lucide-react";

const portfolioData = [
  {
    id: "1",
    project: "somana",
    img: "/p-1.png",
    heading: "Somana - Story, Music, Podcast and More...",
    description:
      "A multi-platform content platform with engaging stories, trending music, and inspiring podcasts.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "2",
    project: "Somana AI",
    img: "/p-2.png",
    heading: "Somana AI - Use AI features",
    description:
      "An all-in-one hub for developers featuring tools, guides, and community collaboration.",
    tags: ["React", "Node.js", "Gemini"],
  },
  {
    id: "3",
    project: "Somana AI",
    img: "/p-2.png",
    heading: "Somana AI - Use AI features",
    description:
      "An all-in-one hub for developers featuring tools, guides, and community collaboration.",
    tags: ["React", "Node.js", "Gemini"],
  },
  {
    id: "4",
    project: "Somana AI",
    img: "/p-2.png",
    heading: "Somana AI - Use AI features",
    description:
      "An all-in-one hub for developers featuring tools, guides, and community collaboration.",
    tags: ["React", "Node.js", "Gemini"],
  },
];

const PortfolioGrid = () => {
  return (
    <div className="p-4 mt-10 max-w-[1200px] w-full mx-auto">
      <h2 className="text-center text-2xl mb-12 font-bold text-neutral-200">
        Projects we have already done
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {portfolioData.map((data) => (
          <Portfolio key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
