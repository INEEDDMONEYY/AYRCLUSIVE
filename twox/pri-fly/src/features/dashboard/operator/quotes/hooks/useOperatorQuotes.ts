import { useState } from "react";
import { mockOperatorQuotes } from "../data";
import type { OperatorQuoteDraft } from "../types";

export function useOperatorQuotes() {
  const [quotes, setQuotes] = useState(mockOperatorQuotes);

  function editQuote(id: string, draft: OperatorQuoteDraft) {
    setQuotes((prev) => prev.map((quote) => (quote.id === id ? { ...quote, ...draft } : quote)));
  }

  // Only meaningful while a quote is still pending — removes it outright rather than adding a fifth status.
  function withdrawQuote(id: string) {
    setQuotes((prev) => prev.filter((quote) => quote.id !== id));
  }

  return { quotes, editQuote, withdrawQuote };
}
