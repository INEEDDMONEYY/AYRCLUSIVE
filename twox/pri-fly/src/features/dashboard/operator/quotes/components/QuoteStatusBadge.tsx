import type { OperatorQuoteStatus } from "../types";

const STATUS_STYLES: Record<OperatorQuoteStatus, string> = {
  pending: "bg-amber-100 text-amber-700",
  accepted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
  expired: "bg-slate-100 text-slate-600",
};

const STATUS_LABELS: Record<OperatorQuoteStatus, string> = {
  pending: "Pending",
  accepted: "Accepted",
  rejected: "Rejected",
  expired: "Expired",
};

interface QuoteStatusBadgeProps {
  status: OperatorQuoteStatus;
}

export default function QuoteStatusBadge({ status }: QuoteStatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
