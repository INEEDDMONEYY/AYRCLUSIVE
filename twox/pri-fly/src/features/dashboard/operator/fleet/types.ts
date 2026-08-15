import type { CabinClass, AircraftStatus } from "../../../../config/aircraft";

export interface AircraftBlackoutDate {
  id: string;
  startDate: string; // ISO date
  endDate: string; // ISO date
  reason?: string;
}

export interface AssignedTrip {
  id: string;
  route: string;
  date: string;
  brokerName: string;
}

export interface OperatorAircraft {
  id: string;
  tailNumber: string;
  model: string;
  category: CabinClass;
  passengerCapacity: number;
  baseAirport: string;
  status: AircraftStatus;
  upcomingTrips: AssignedTrip[];
  blackoutDates: AircraftBlackoutDate[];
}

export type OperatorAircraftDraft = Pick<
  OperatorAircraft,
  "tailNumber" | "model" | "category" | "passengerCapacity" | "baseAirport" | "status"
>;
