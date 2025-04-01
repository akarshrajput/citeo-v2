import React from "react";
import PlanCard from "./PlanCard";

const plans = [
  {
    type: "Simple",
    name: "Basic Plan",
    price: "₹299/month",
    features: [
      "Access to standard content",
      "Limited downloads",
      "Community support",
    ],
  },
  {
    type: "Pro",
    name: "Pro Plan",
    price: "₹799/month",
    features: [
      "Unlimited access to all content",
      "High-quality downloads",
      "Priority support",
      "Exclusive premium content",
    ],
  },
];

const PlansGrid = () => {
  return (
    <div className="p-6 mt-10 max-w-[800px] w-full mx-auto">
      <h2 className="text-center text-2xl font-bold text-neutral-200">
        Choose Your Plan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {plans.map((plan) => (
          <PlanCard key={plan.type} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PlansGrid;
