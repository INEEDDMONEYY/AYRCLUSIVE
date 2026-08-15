export type OperatorTripStatus = "scheduled" | "in_progress" | "completed" | "cancelled";

export interface OperatorTrip {
  id: string;
  rfqId: string;
  quoteId: string;
  brokerName: string;
  route: string;
  departureDate: string; // ISO date
  returnDate?: string; // ISO date, only for round trips
  aircraft: string;
  passengerCount: number;
  status: OperatorTripStatus;
}
