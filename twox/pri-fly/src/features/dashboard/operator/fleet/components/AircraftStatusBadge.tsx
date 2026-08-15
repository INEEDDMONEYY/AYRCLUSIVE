import type { AircraftStatus } from "../../../../../config/aircraft";

const STATUS_STYLES: Record<AircraftStatus, string> = {
  active: "bg-emerald-100 text-emerald-700",
  inactive: "bg-slate-100 text-slate-600",
  maintenance: "bg-amber-100 text-amber-700",
  retired: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<AircraftStatus, string> = {
  active: "Active",
  inactive: "Inactive",
  maintenance: "Maintenance",
  retired: "Retired",
};

interface AircraftStatusBadgeProps {
  status: AircraftStatus;
}

export default function AircraftStatusBadge({ status }: AircraftStatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
