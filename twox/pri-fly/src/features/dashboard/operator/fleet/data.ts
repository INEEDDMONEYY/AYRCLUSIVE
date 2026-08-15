import type { OperatorAircraft } from "./types";

const daysFromNow = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);

// Sample fleet until this is wired to the backend aircraft API.
export const mockOperatorFleet: OperatorAircraft[] = [
  {
    id: "AC-1001",
    tailNumber: "N425AL",
    model: "Gulfstream G280",
    category: "super_midsize",
    passengerCapacity: 10,
    baseAirport: "TEB",
    status: "active",
    upcomingTrips: [
      { id: "TRIP-501", route: "TEB → MIA", date: "Aug 22, 2026", brokerName: "Skyline Brokerage" },
      { id: "TRIP-498", route: "MIA → VNY", date: "Aug 26, 2026", brokerName: "Apex Air Charter" },
    ],
    blackoutDates: [
      { id: "BO-1", startDate: daysFromNow(30), endDate: daysFromNow(33), reason: "Scheduled maintenance" },
    ],
  },
  {
    id: "AC-1002",
    tailNumber: "N902BW",
    model: "Challenger 350",
    category: "super_midsize",
    passengerCapacity: 9,
    baseAirport: "OPF",
    status: "active",
    upcomingTrips: [{ id: "TRIP-511", route: "OPF → TEB", date: "Aug 15, 2026", brokerName: "Bluewater Aviation" }],
    blackoutDates: [],
  },
  {
    id: "AC-1003",
    tailNumber: "N418QS",
    model: "Gulfstream G280",
    category: "super_midsize",
    passengerCapacity: 8,
    baseAirport: "LAS",
    status: "maintenance",
    upcomingTrips: [],
    blackoutDates: [
      { id: "BO-2", startDate: daysFromNow(-2), endDate: daysFromNow(5), reason: "Engine inspection" },
    ],
  },
  {
    id: "AC-1004",
    tailNumber: "N601CJ",
    model: "Citation CJ3+",
    category: "light_jet",
    passengerCapacity: 6,
    baseAirport: "VNY",
    status: "inactive",
    upcomingTrips: [],
    blackoutDates: [],
  },
];
