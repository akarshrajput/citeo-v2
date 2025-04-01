import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = ({ data }) => {
  return (
    <Link
      href={`/portfolio/${data.project}`}
      className="border bg-neutral-900 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <Image
          src={data.img}
          alt={data.heading}
          width={500}
          height={200}
          className="rounded-md object-cover w-full h-full"
        />
      </div>

      {/* Project Title */}
      <h3 className="mt-3 font-semibold text-neutral-200 truncate">
        {data.heading}
      </h3>

      {/* Description */}
      <p className="text-neutral-400 text-sm mt-1 truncate">
        {data.description}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full border px-2 py-1 bg-neutral-800 text-xs text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Portfolio;
