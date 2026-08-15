import { AIRCRAFT_STATUSES, type AircraftStatus } from "../../../../../config/aircraft";

interface AircraftStatusControlProps {
  status: AircraftStatus;
  onChange: (status: AircraftStatus) => void;
}

/** Lets the operator change an aircraft's status directly, rather than it being read-only. */
export default function AircraftStatusControl({ status, onChange }: AircraftStatusControlProps) {
  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value as AircraftStatus)}
      className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--primary)]"
    >
      {AIRCRAFT_STATUSES.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
