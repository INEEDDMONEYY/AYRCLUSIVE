import { Link } from "react-router-dom";
import { MapPin, Users } from "lucide-react";
import TripStatusBadge from "./TripStatusBadge";
import type { OperatorTrip } from "../types";

interface TripCardProps {
  trip: OperatorTrip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{trip.brokerName}</p>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
            <MapPin size={14} />
            {trip.route}
          </div>
          <Link to="/dashboard/rfqs" className="mt-1 inline-block text-xs text-[var(--text-muted)] hover:text-[var(--primary)]">
            From {trip.rfqId} · {trip.quoteId}
          </Link>
        </div>
        <TripStatusBadge status={trip.status} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
        <span>Departs {trip.departureDate}</span>
        {trip.returnDate && <span>Returns {trip.returnDate}</span>}
        <span>{trip.aircraft}</span>
        <span className="inline-flex items-center gap-1">
          <Users size={12} />
          {trip.passengerCount} pax
        </span>
      </div>
    </div>
  );
}
