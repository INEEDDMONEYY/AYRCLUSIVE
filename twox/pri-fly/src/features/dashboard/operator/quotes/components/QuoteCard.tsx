import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Pencil, X } from "lucide-react";
import Button from "../../../../../shared/ui/Button";
import QuoteStatusBadge from "./QuoteStatusBadge";
import EditQuoteDialog from "./EditQuoteDialog";
import type { OperatorQuote, OperatorQuoteDraft } from "../types";

interface QuoteCardProps {
  quote: OperatorQuote;
  onEdit: (id: string, draft: OperatorQuoteDraft) => void;
  onWithdraw: (id: string) => void;
}

export default function QuoteCard({ quote, onEdit, onWithdraw }: QuoteCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const canModify = quote.status === "pending";

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{quote.brokerName}</p>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
            <MapPin size={14} />
            {quote.route}
          </div>
          <Link
            to={`/dashboard/rfqs`}
            className="mt-1 inline-block text-xs text-[var(--text-muted)] hover:text-[var(--primary)]"
          >
            From {quote.rfqId}
          </Link>
        </div>
        <QuoteStatusBadge status={quote.status} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
        <span className="font-semibold text-[var(--text-primary)]">${quote.price.toLocaleString()}</span>
        <span>{quote.aircraft}</span>
        <span className="text-xs text-[var(--text-muted)]">Valid until {quote.validUntil}</span>
      </div>

      {quote.terms && <p className="mt-3 text-sm text-[var(--text-secondary)]">{quote.terms}</p>}

      {canModify && (
        <div className="mt-4 flex gap-3">
          <Button variant="secondary" onClick={() => setIsEditOpen(true)}>
            <Pencil size={14} className="mr-1.5" />
            Edit
          </Button>
          <Button variant="secondary" className="text-red-600 hover:bg-red-50" onClick={() => onWithdraw(quote.id)}>
            <X size={14} className="mr-1.5" />
            Withdraw
          </Button>
        </div>
      )}

      <EditQuoteDialog
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        initialValues={{ price: quote.price, aircraft: quote.aircraft, validUntil: quote.validUntil, terms: quote.terms }}
        onSubmit={(draft) => {
          onEdit(quote.id, draft);
          setIsEditOpen(false);
        }}
      />
    </div>
  );
}
