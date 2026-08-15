import { useOperatorRFQs } from "../rfqs/hooks/useOperatorRFQs";
import OperatorRFQCard from "../rfqs/components/OperatorRFQCard";

export default function OperatorRFQsPage() {
  const { rfqs, declineRFQ, submitQuote } = useOperatorRFQs();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">RFQs</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Review incoming requests, decline what you can't fulfill, or submit a quote.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {rfqs.map((rfq) => (
          <OperatorRFQCard key={rfq.id} rfq={rfq} onDecline={declineRFQ} onSubmitQuote={submitQuote} />
        ))}
      </div>
    </div>
  );
}
