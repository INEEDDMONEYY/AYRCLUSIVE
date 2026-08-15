export type OperatorQuoteStatus = "pending" | "accepted" | "rejected" | "expired";

export interface OperatorQuote {
  id: string;
  rfqId: string;
  brokerName: string;
  route: string;
  price: number;
  aircraft: string;
  validUntil: string; // ISO date
  terms?: string;
  status: OperatorQuoteStatus;
  submittedAt: string; // ISO timestamp
}

export type OperatorQuoteDraft = Pick<OperatorQuote, "price" | "aircraft" | "validUntil" | "terms">;
