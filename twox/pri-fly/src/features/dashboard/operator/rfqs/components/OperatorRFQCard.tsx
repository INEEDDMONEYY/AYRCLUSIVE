import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import Button from "../../../../../shared/ui/Button";
import { CABIN_CLASSES } from "../../../../../config/aircraft";
import OperatorRFQStatusBadge from "./OperatorRFQStatusBadge";
import RFQLiveTimer from "./RFQLiveTimer";
import DeclineRFQDialog from "./DeclineRFQDialog";
import SubmitQuoteDialog from "./SubmitQuoteDialog";
import type { OperatorRFQ, OperatorRFQQuote } from "../types";

interface OperatorRFQCardProps {
  rfq: OperatorRFQ;
  onDecline: (id: string, reason: string) => void;
  onSubmitQuote: (id: string, quote: OperatorRFQQuote) => void;
}

export default function OperatorRFQCard({ rfq, onDecline, onSubmitQuote }: OperatorRFQCardProps) {
  const [declineOpen, setDeclineOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const cabinLabel = CABIN_CLASSES.find((c) => c.value === rfq.cabinClass)?.label ?? rfq.cabinClass;
  const canRespond = rfq.status === "pending";

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{rfq.brokerName}</p>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
            <MapPin size={14} />
            {rfq.route}
          </div>
        </div>
        <OperatorRFQStatusBadge status={rfq.status} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
        <span>Departs {rfq.departureDate}</span>
        <span className="inline-flex items-center gap-1">
          <Users size={12} />
          {rfq.passengerCount} pax
        </span>
        <span>{cabinLabel}</span>
        <RFQLiveTimer since={rfq.receivedAt} />
      </div>

      {rfq.notes && <p className="mt-3 text-sm text-[var(--text-secondary)]">{rfq.notes}</p>}

      {rfq.status === "quoted" && rfq.quote && (
        <div className="mt-4 rounded-lg bg-[var(--background-secondary)] p-3 text-sm text-[var(--text-secondary)]">
          <p className="font-semibold text-[var(--text-primary)]">
            Quoted ${rfq.quote.price.toLocaleString()} — {rfq.quote.aircraft}
          </p>
          <p className="mt-1">{rfq.quote.terms}</p>
        </div>
      )}

      {rfq.status === "declined" && rfq.declineReason && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">Declined: {rfq.declineReason}</div>
      )}

      {rfq.status === "accepted" && rfq.quote && (
        <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
          Broker accepted ${rfq.quote.price.toLocaleString()} — {rfq.quote.aircraft}
        </div>
      )}

      {canRespond && (
        <div className="mt-4 flex gap-3">
          <Button variant="secondary" className="text-red-600 hover:bg-red-50" onClick={() => setDeclineOpen(true)}>
            Decline
          </Button>
          <Button variant="primary" style={{ background: "var(--primary)" }} onClick={() => setQuoteOpen(true)}>
            Submit Quote
          </Button>
        </div>
      )}

      <DeclineRFQDialog
        open={declineOpen}
        onClose={() => setDeclineOpen(false)}
        onConfirm={(reason) => {
          onDecline(rfq.id, reason);
          setDeclineOpen(false);
        }}
      />
      <SubmitQuoteDialog
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        onSubmit={(quote) => {
          onSubmitQuote(rfq.id, quote);
          setQuoteOpen(false);
        }}
      />
    </div>
  );
}
