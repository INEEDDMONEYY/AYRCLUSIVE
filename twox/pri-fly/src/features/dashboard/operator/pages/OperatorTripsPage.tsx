import { useMemo, useState } from "react";
import { useOperatorTrips } from "../trips/hooks/useOperatorTrips";
import TripCard from "../trips/components/TripCard";
import StatusFilterPills from "../components/StatusFilterPills";
import type { OperatorTripStatus } from "../trips/types";

type StatusFilter = OperatorTripStatus | "all";

const FILTER_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "scheduled", label: "Scheduled" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

const HISTORY_STATUSES: OperatorTripStatus[] = ["completed", "cancelled"];

export default function OperatorTripsPage() {
  const { trips } = useOperatorTrips();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filteredTrips = useMemo(
    () => (statusFilter === "all" ? trips : trips.filter((trip) => trip.status === statusFilter)),
    [trips, statusFilter]
  );

  const upcomingTrips = filteredTrips.filter((trip) => !HISTORY_STATUSES.includes(trip.status));
  const historyTrips = filteredTrips.filter((trip) => HISTORY_STATUSES.includes(trip.status));

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Trips</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          What your accepted RFQs and quotes become once a broker confirms them.
        </p>
      </div>

      <StatusFilterPills options={FILTER_OPTIONS} active={statusFilter} onChange={setStatusFilter} />

      <section>
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">Upcoming</h2>
        <div className="mt-3 flex flex-col gap-4">
          {upcomingTrips.length === 0 && <p className="text-sm text-[var(--text-muted)]">No upcoming trips match this filter.</p>}
          {upcomingTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">History</h2>
        <div className="mt-3 flex flex-col gap-4">
          {historyTrips.length === 0 && <p className="text-sm text-[var(--text-muted)]">No past trips match this filter.</p>}
          {historyTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>
    </div>
  );
}
