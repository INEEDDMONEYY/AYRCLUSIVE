import { useState } from "react";
import { mockOperatorRFQs } from "../data";
import type { OperatorRFQQuote } from "../types";

export function useOperatorRFQs() {
  const [rfqs, setRfqs] = useState(mockOperatorRFQs);

  function declineRFQ(id: string, reason: string) {
    setRfqs((prev) =>
      prev.map((rfq) => (rfq.id === id ? { ...rfq, status: "declined", declineReason: reason } : rfq))
    );
  }

  function submitQuote(id: string, quote: OperatorRFQQuote) {
    setRfqs((prev) => (prev.map((rfq) => (rfq.id === id ? { ...rfq, status: "quoted", quote } : rfq))));
  }

  return { rfqs, declineRFQ, submitQuote };
}
