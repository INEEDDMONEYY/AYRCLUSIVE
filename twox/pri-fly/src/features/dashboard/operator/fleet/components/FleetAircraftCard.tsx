import { Link } from "react-router-dom";
import { MapPin, Users } from "lucide-react";
import { CABIN_CLASSES, type AircraftStatus } from "../../../../../config/aircraft";
import AircraftStatusControl from "./AircraftStatusControl";
import type { OperatorAircraft } from "../types";

interface FleetAircraftCardProps {
  aircraft: OperatorAircraft;
  onStatusChange: (id: string, status: AircraftStatus) => void;
}

export default function FleetAircraftCard({ aircraft, onStatusChange }: FleetAircraftCardProps) {
  const categoryLabel = CABIN_CLASSES.find((c) => c.value === aircraft.category)?.label ?? aircraft.category;

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link
            to={`/dashboard/fleet/${aircraft.id}`}
            className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--primary)]"
          >
            {aircraft.tailNumber} — {aircraft.model}
          </Link>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
            <MapPin size={14} />
            Based at {aircraft.baseAirport}
          </div>
        </div>
        <AircraftStatusControl status={aircraft.status} onChange={(status) => onStatusChange(aircraft.id, status)} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
        <span>{categoryLabel}</span>
        <span className="inline-flex items-center gap-1">
          <Users size={12} />
          {aircraft.passengerCapacity} pax
        </span>
        <span>{aircraft.upcomingTrips.length} upcoming trip{aircraft.upcomingTrips.length === 1 ? "" : "s"}</span>
      </div>
    </div>
  );
}
