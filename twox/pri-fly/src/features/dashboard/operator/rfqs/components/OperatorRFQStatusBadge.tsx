import type { OperatorRFQStatus } from "../types";

const STATUS_STYLES: Record<OperatorRFQStatus, string> = {
  draft: "bg-slate-100 text-slate-600",
  pending: "bg-amber-100 text-amber-700",
  quoted: "bg-sky-100 text-sky-700",
  accepted: "bg-emerald-100 text-emerald-700",
  declined: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<OperatorRFQStatus, string> = {
  draft: "Draft",
  pending: "Pending",
  quoted: "Quoted",
  accepted: "Accepted",
  declined: "Declined",
};

interface OperatorRFQStatusBadgeProps {
  status: OperatorRFQStatus;
}

export default function OperatorRFQStatusBadge({ status }: OperatorRFQStatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
