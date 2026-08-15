import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Pencil } from "lucide-react";
import Button from "../../../../shared/ui/Button";
import { CABIN_CLASSES } from "../../../../config/aircraft";
import { useOperatorFleet } from "../fleet/hooks/useOperatorFleet";
import AircraftStatusControl from "../fleet/components/AircraftStatusControl";
import AircraftFormDialog from "../fleet/components/AircraftFormDialog";
import BlackoutDateForm from "../fleet/components/BlackoutDateForm";
import BlackoutDatesList from "../fleet/components/BlackoutDatesList";
import AircraftAvailabilityCalendar from "../fleet/components/AircraftAvailabilityCalendar";

export default function OperatorFleetDetailPage() {
  const { aircraftId } = useParams<{ aircraftId: string }>();
  const { fleet, updateAircraft, updateStatus, addBlackout, removeBlackout } = useOperatorFleet();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const aircraft = fleet.find((a) => a.id === aircraftId);

  if (!aircraft) {
    return (
      <div className="p-6">
        <Link to="/dashboard/fleet" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">
          <ArrowLeft size={14} />
          Back to fleet
        </Link>
        <p className="mt-4 text-sm text-[var(--text-muted)]">Aircraft not found.</p>
      </div>
    );
  }

  const categoryLabel = CABIN_CLASSES.find((c) => c.value === aircraft.category)?.label ?? aircraft.category;

  return (
    <div className="p-6">
      <Link to="/dashboard/fleet" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">
        <ArrowLeft size={14} />
        Back to fleet
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
            {aircraft.tailNumber} — {aircraft.model}
          </h1>
          <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              Based at {aircraft.baseAirport}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} />
              {aircraft.passengerCapacity} pax · {categoryLabel}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <AircraftStatusControl status={aircraft.status} onChange={(status) => updateStatus(aircraft.id, status)} />
          <Button variant="secondary" onClick={() => setIsEditOpen(true)}>
            <Pencil size={14} className="mr-1.5" />
            Edit specs
          </Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">Upcoming assigned trips</h2>
          {aircraft.upcomingTrips.length === 0 ? (
            <p className="mt-3 text-sm text-[var(--text-muted)]">No trips currently assigned to this aircraft.</p>
          ) : (
            <ul className="mt-3 flex flex-col gap-2">
              {aircraft.upcomingTrips.map((trip) => (
                <li
                  key={trip.id}
                  className="flex items-center justify-between rounded-lg bg-[var(--background-secondary)] px-4 py-3 text-sm"
                >
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">{trip.route}</p>
                    <p className="text-xs text-[var(--text-muted)]">{trip.brokerName}</p>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">{trip.date}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">Availability calendar</h2>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            Dates highlighted in red are blacked out for this aircraft.
          </p>
          <div className="mt-4">
            <AircraftAvailabilityCalendar blackoutDates={aircraft.blackoutDates} />
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">Blackout dates</h2>
        <p className="mt-1 text-xs text-[var(--text-muted)]">
          Block out dates this aircraft is unavailable, independent of its overall status.
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <BlackoutDatesList
            blackoutDates={aircraft.blackoutDates}
            onRemove={(blackoutId) => removeBlackout(aircraft.id, blackoutId)}
          />
          <BlackoutDateForm onAdd={(blackout) => addBlackout(aircraft.id, blackout)} />
        </div>
      </section>

      <AircraftFormDialog
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        initialValues={{
          tailNumber: aircraft.tailNumber,
          model: aircraft.model,
          category: aircraft.category,
          passengerCapacity: aircraft.passengerCapacity,
          baseAirport: aircraft.baseAirport,
          status: aircraft.status,
        }}
        onSubmit={(draft) => {
          updateAircraft(aircraft.id, draft);
          setIsEditOpen(false);
        }}
      />
    </div>
  );
}
