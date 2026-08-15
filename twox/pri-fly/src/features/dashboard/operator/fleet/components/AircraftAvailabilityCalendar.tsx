import { useMemo } from "react";
import type { AircraftBlackoutDate } from "../types";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

interface AircraftAvailabilityCalendarProps {
  blackoutDates: AircraftBlackoutDate[];
}

/** Mini month calendar highlighting this aircraft's blackout date ranges. */
export default function AircraftAvailabilityCalendar({ blackoutDates }: AircraftAvailabilityCalendarProps) {
  const today = useMemo(() => new Date(), []);
  const year = today.getFullYear();
  const month = today.getMonth();

  const blackedOutDays = useMemo(() => {
    const days = new Set<number>();
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);

    for (const blackout of blackoutDates) {
      const start = new Date(blackout.startDate);
      const end = new Date(blackout.endDate);
      if (end < monthStart || start > monthEnd) continue;

      const rangeStart = start < monthStart ? monthStart : start;
      const rangeEnd = end > monthEnd ? monthEnd : end;
      for (let d = rangeStart.getDate(); d <= rangeEnd.getDate(); d++) days.add(d);
    }
    return days;
  }, [blackoutDates, year, month]);

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDayOfMonth }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
          {today.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Blacked out
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="py-1 font-medium text-[var(--text-muted)]">
            {d}
          </span>
        ))}
        {cells.map((day, i) => {
          const isBlackedOut = day !== null && blackedOutDays.has(day);
          const isToday = day === today.getDate();
          return (
            <span
              key={i}
              className={`flex h-8 items-center justify-center rounded-md text-sm ${
                isBlackedOut
                  ? "bg-red-500 text-white"
                  : isToday
                    ? "bg-[var(--background-secondary)] font-bold text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)]"
              }`}
            >
              {day ?? ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}
