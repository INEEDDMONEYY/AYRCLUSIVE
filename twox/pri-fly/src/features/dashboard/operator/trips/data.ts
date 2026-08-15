import type { OperatorTrip } from "./types";

const daysFromNow = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
const daysAgo = (days: number) => new Date(Date.now() - days * 86_400_000).toISOString().slice(0, 10);

// Sample trips until this is wired to the backend trips API.
export const mockOperatorTrips: OperatorTrip[] = [
  {
    id: "TRIP-501",
    rfqId: "RFQ-2201",
    quoteId: "QUOTE-3001",
    brokerName: "Skyline Brokerage",
    route: "TEB → MIA",
    departureDate: daysFromNow(7),
    aircraft: "Gulfstream G280 — N425AL",
    passengerCount: 6,
    status: "scheduled",
  },
  {
    id: "TRIP-498",
    rfqId: "RFQ-2198",
    quoteId: "QUOTE-2998",
    brokerName: "Apex Air Charter",
    route: "MIA → VNY",
    departureDate: daysFromNow(11),
    returnDate: daysFromNow(14),
    aircraft: "Challenger 350 — N902BW",
    passengerCount: 8,
    status: "scheduled",
  },
  {
    id: "TRIP-490",
    rfqId: "RFQ-2170",
    quoteId: "QUOTE-2960",
    brokerName: "Meridian Jets",
    route: "LAS → SFO",
    departureDate: daysAgo(0),
    aircraft: "Gulfstream G280 — N418QS",
    passengerCount: 4,
    status: "in_progress",
  },
  {
    id: "TRIP-475",
    rfqId: "RFQ-2140",
    quoteId: "QUOTE-2911",
    brokerName: "Bluewater Aviation",
    route: "OPF → TEB",
    departureDate: daysAgo(9),
    aircraft: "Citation CJ3+ — N601CJ",
    passengerCount: 5,
    status: "completed",
  },
  {
    id: "TRIP-462",
    rfqId: "RFQ-2118",
    quoteId: "QUOTE-2887",
    brokerName: "Skyline Brokerage",
    route: "TEB → ASE",
    departureDate: daysAgo(18),
    aircraft: "Challenger 350 — N902BW",
    passengerCount: 7,
    status: "cancelled",
  },
];
