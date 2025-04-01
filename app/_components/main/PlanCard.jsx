import React from "react";
import Link from "next/link";

const PlanCard = ({ plan }) => {
  return (
    <div
      className={`border p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
        plan.type === "Pro" ? "bg-blue-900 border-blue-500" : "bg-neutral-900"
      }`}
    >
      {/* Plan Name */}
      <h3
        className={`text-xl font-semibold ${
          plan.type === "Pro" ? "text-blue-300" : "text-neutral-200"
        }`}
      >
        {plan.name}
      </h3>

      {/* Price */}
      <p className="text-neutral-400 text-sm mt-1">{plan.price}</p>

      {/* Features */}
      <ul className="mt-4 text-neutral-300 text-sm space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link href={`/plans/${plan.type.toLowerCase()}`}>
        <button
          className={`mt-5 w-full py-2 rounded-md font-medium transition ${
            plan.type === "Pro"
              ? "bg-blue-600 hover:bg-blue-500 text-white"
              : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
          }`}
        >
          Choose {plan.type}
        </button>
      </Link>
    </div>
  );
};

export default PlanCard;
