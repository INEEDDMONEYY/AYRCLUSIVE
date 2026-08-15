import { X } from "lucide-react";
import type { AircraftBlackoutDate } from "../types";

interface BlackoutDatesListProps {
  blackoutDates: AircraftBlackoutDate[];
  onRemove: (blackoutId: string) => void;
}

export default function BlackoutDatesList({ blackoutDates, onRemove }: BlackoutDatesListProps) {
  if (blackoutDates.length === 0) {
    return <p className="text-sm text-[var(--text-muted)]">No blackout dates set for this aircraft.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {blackoutDates.map((blackout) => (
        <li
          key={blackout.id}
          className="flex items-center justify-between gap-3 rounded-lg bg-[var(--background-secondary)] px-4 py-3 text-sm"
        >
          <div>
            <p className="font-medium text-[var(--text-primary)]">
              {blackout.startDate} → {blackout.endDate}
            </p>
            {blackout.reason && <p className="text-xs text-[var(--text-muted)]">{blackout.reason}</p>}
          </div>
          <button
            type="button"
            aria-label="Remove blackout date"
            onClick={() => onRemove(blackout.id)}
            className="text-[var(--text-muted)] hover:text-red-600"
          >
            <X size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
}
