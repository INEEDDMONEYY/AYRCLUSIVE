import { useMemo, useState } from "react";
import { useOperatorQuotes } from "../quotes/hooks/useOperatorQuotes";
import QuoteCard from "../quotes/components/QuoteCard";
import StatusFilterPills from "../components/StatusFilterPills";
import type { OperatorQuoteStatus } from "../quotes/types";

type StatusFilter = OperatorQuoteStatus | "all";

const FILTER_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
  { value: "expired", label: "Expired" },
];

export default function OperatorQuotesPage() {
  const { quotes, editQuote, withdrawQuote } = useOperatorQuotes();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filteredQuotes = useMemo(
    () => (statusFilter === "all" ? quotes : quotes.filter((quote) => quote.status === statusFilter)),
    [quotes, statusFilter]
  );

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Quotes</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Everything you've offered in response to RFQs, separate from the RFQs themselves.
        </p>
      </div>

      <StatusFilterPills options={FILTER_OPTIONS} active={statusFilter} onChange={setStatusFilter} />

      <div className="flex flex-col gap-4">
        {filteredQuotes.length === 0 && (
          <p className="text-sm text-[var(--text-muted)]">No quotes match this filter.</p>
        )}
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} onEdit={editQuote} onWithdraw={withdrawQuote} />
        ))}
      </div>
    </div>
  );
}
