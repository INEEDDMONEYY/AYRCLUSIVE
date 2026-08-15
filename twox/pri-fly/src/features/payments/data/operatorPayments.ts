import type { OperatorPaymentStep } from "../types";

export const operatorPaymentSteps: OperatorPaymentStep[] = [
  {
    step: 1,
    title: "Receive the trip request",
    description:
      "Operators receive qualified trip opportunities through the Altivo marketplace based on their aircraft availability and operating capabilities.",
  },
  {
    step: 2,
    title: "Submit your quote",
    description:
      "Review the trip requirements and submit pricing, aircraft, availability, and other relevant quote information.",
  },
  {
    step: 3,
    title: "Win the trip",
    description:
      "When your quote is selected, the booking moves forward and the trip becomes associated with your operator account.",
  },
  {
    step: 4,
    title: "Payment is processed",
    description:
      "Payment follows the transaction workflow associated with the booking and the applicable terms of the trip.",
  },
  {
    step: 5,
    title: "Track your payment",
    description:
      "Operators can use their Altivo account to keep track of relevant booking and payment information.",
  },
];