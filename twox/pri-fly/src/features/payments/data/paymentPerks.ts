import type { PaymentPerkSet, PaymentRole } from "../types";

export const perksByRole: Record<PaymentRole, PaymentPerkSet> = {
  broker: {
    role: "broker",
    label: "Broker",
    description: "Manage client bookings and track commission in one place.",
    perks: [
      { title: "Automated commission tracking", included: true },
      { title: "Client payment status visibility", included: true },
      { title: "Multi-client dashboard", included: true },
      { title: "Custom payout schedule", included: false },
    ],
  },
  operator: {
    role: "operator",
    label: "Operator",
    description: "Get paid faster with transparent payout tracking.",
    perks: [
      { title: "Direct payout to account on file", included: true },
      { title: "Real-time transaction status", included: true },
      { title: "Fleet-wide payment history", included: true },
      { title: "Priority payout processing", included: false },
    ],
  },
  dispatcher: {
    role: "dispatcher",
    label: "Dispatcher",
    description: "Confirm operational readiness and clear trips for payment.",
    perks: [
      { title: "Operational sign-off tools", included: true },
      { title: "Trip readiness checklist", included: true },
      { title: "Cross-team status visibility", included: true },
      { title: "Automated crew notifications", included: false },
    ],
  },
};