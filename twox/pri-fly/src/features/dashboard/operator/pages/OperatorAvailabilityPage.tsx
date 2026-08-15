import { useState } from "react";
import { useOperatorFleet } from "../fleet/hooks/useOperatorFleet";
import AircraftAvailabilityCalendar from "../fleet/components/AircraftAvailabilityCalendar";
import BlackoutDatesList from "../fleet/components/BlackoutDatesList";
import BlackoutDateForm from "../fleet/components/BlackoutDateForm";

// Aircraft-scoped: one plane down for maintenance shouldn't ground the whole fleet's calendar.
export default function OperatorAvailabilityPage() {
  const { fleet, addBlackout, removeBlackout } = useOperatorFleet();
  const [selectedId, setSelectedId] = useState(fleet[0]?.id ?? "");

  const selected = fleet.find((aircraft) => aircraft.id === selectedId);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Availability</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Pick an aircraft to manage its own blackout calendar, independent of the rest of the fleet.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {fleet.map((aircraft) => {
          const isActive = aircraft.id === selectedId;
          return (
            <button
              key={aircraft.id}
              type="button"
              onClick={() => setSelectedId(aircraft.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--background-secondary)] text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]"
              }`}
            >
              {aircraft.tailNumber}
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">
              {selected.tailNumber} — {selected.model}
            </h2>
            <p className="mt-1 text-xs text-[var(--text-muted)]">Dates highlighted in red are blacked out.</p>
            <div className="mt-4">
              <AircraftAvailabilityCalendar blackoutDates={selected.blackoutDates} />
            </div>
          </section>

          <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">Blackout dates</h2>
            <div className="mt-4 flex flex-col gap-4">
              <BlackoutDatesList
                blackoutDates={selected.blackoutDates}
                onRemove={(blackoutId) => removeBlackout(selected.id, blackoutId)}
              />
              <BlackoutDateForm onAdd={(blackout) => addBlackout(selected.id, blackout)} />
            </div>
          </section>
        </div>
      ) : (
        <p className="text-sm text-[var(--text-muted)]">Add an aircraft to your fleet to manage its availability.</p>
      )}
    </div>
  );
}
