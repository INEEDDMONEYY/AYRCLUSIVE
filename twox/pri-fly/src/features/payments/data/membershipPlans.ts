import type { MembershipPlan } from "../types";

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Silver",
    description: "Priority access and standard booking support.",
    price: "$0",
    billingPeriod: "member",
    perks: [
      { title: "Priority quote matching", included: true },
      { title: "Standard support response", included: true },
      { title: "Access to verified operators", included: true },
      { title: "Dedicated account manager", included: false },
      { title: "Guaranteed callback within 1 hour", included: false },
    ],
  },
  {
    name: "Gold",
    description: "White-glove service for frequent flyers.",
    price: "$249",
    billingPeriod: "month",
    badge: "Popular",
    highlighted: true,
    perks: [
      { title: "Priority quote matching", included: true },
      { title: "Standard support response", included: true },
      { title: "Access to verified operators", included: true },
      { title: "Dedicated account manager", included: true },
      { title: "Guaranteed callback within 1 hour", included: true },
    ],
  },
];