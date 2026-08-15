import type { OperatorQuote } from "./types";

const daysFromNow = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
const daysAgo = (days: number) => new Date(Date.now() - days * 86_400_000).toISOString();

// Sample quotes until this is wired to the backend quotes API.
export const mockOperatorQuotes: OperatorQuote[] = [
  {
    id: "QUOTE-3001",
    rfqId: "RFQ-2201",
    brokerName: "Skyline Brokerage",
    route: "TEB → MIA",
    price: 24500,
    aircraft: "Gulfstream G280 — N425AL",
    validUntil: daysFromNow(2),
    terms: "Includes catering, 2hr ground hold.",
    status: "pending",
    submittedAt: daysAgo(1),
  },
  {
    id: "QUOTE-2998",
    rfqId: "RFQ-2198",
    brokerName: "Apex Air Charter",
    route: "MIA → VNY",
    price: 31200,
    aircraft: "Challenger 350 — N902BW",
    validUntil: daysFromNow(1),
    terms: "Fuel surcharge included.",
    status: "accepted",
    submittedAt: daysAgo(3),
  },
  {
    id: "QUOTE-2991",
    rfqId: "RFQ-2189",
    brokerName: "Bluewater Aviation",
    route: "OPF → TEB",
    price: 18750,
    aircraft: "Citation CJ3+ — N601CJ",
    validUntil: daysFromNow(-1),
    status: "expired",
    submittedAt: daysAgo(6),
  },
  {
    id: "QUOTE-2985",
    rfqId: "RFQ-2180",
    brokerName: "Meridian Jets",
    route: "LAS → SFO",
    price: 15900,
    aircraft: "Gulfstream G280 — N418QS",
    validUntil: daysFromNow(-3),
    terms: "Requested aircraft substitution declined.",
    status: "rejected",
    submittedAt: daysAgo(8),
  },
];
