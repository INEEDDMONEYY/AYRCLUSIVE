import type { CabinClass } from "../../../../config/aircraft";

export type OperatorRFQStatus = "draft" | "pending" | "quoted" | "accepted" | "declined";

export interface OperatorRFQQuote {
  price: number;
  aircraft: string;
  terms: string;
  submittedAt: string;
}

export interface OperatorRFQ {
  id: string;
  brokerName: string;
  route: string;
  departureDate: string;
  passengerCount: number;
  cabinClass: CabinClass;
  notes?: string;
  status: OperatorRFQStatus;
  // ISO timestamp the RFQ was received — drives the live "alive for" timer.
  receivedAt: string;
  quote?: OperatorRFQQuote;
  declineReason?: string;
}
