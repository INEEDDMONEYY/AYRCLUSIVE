import { useMemo } from "react";
import type { Holiday } from "../types";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

interface AvailabilityCalendarProps {
  holidays: Holiday[];
}

export default function AvailabilityCalendar({ holidays }: AvailabilityCalendarProps) {
  const today = useMemo(() => new Date(), []);
  const year = today.getFullYear();
  const month = today.getMonth();

  const monthHolidays = useMemo(
    () => holidays.filter((h) => h.date.getFullYear() === year && h.date.getMonth() === month),
    [holidays, year, month]
  );
  const holidayDates = useMemo(() => new Set(monthHolidays.map((h) => h.date.getDate())), [monthHolidays]);

  const upcoming = useMemo(
    () => holidays.filter((h) => h.date.getTime() >= today.setHours(0, 0, 0, 0)).slice(0, 3),
    [holidays, today]
  );

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDayOfMonth }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          {today.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
          <span className="h-2 w-2 rounded-full" style={{ background: "var(--primary)" }} />
          Holiday
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="py-1 font-medium" style={{ color: "var(--text-muted)" }}>
            {d}
          </span>
        ))}
        {cells.map((day, i) => {
          const isHoliday = day !== null && holidayDates.has(day);
          const isToday = day === today.getDate();
          return (
            <span
              key={i}
              className="flex h-8 items-center justify-center rounded-[var(--radius-md)] text-sm"
              style={{
                color: isHoliday ? "white" : "var(--text-secondary)",
                background: isHoliday ? "var(--primary)" : isToday ? "var(--background-secondary)" : "transparent",
                fontWeight: isToday ? 700 : 400,
              }}
            >
              {day ?? ""}
            </span>
          );
        })}
      </div>

      <ul className="mt-4 flex flex-col gap-1.5 border-t pt-4 text-xs" style={{ borderColor: "var(--border)" }}>
        {upcoming.length === 0 && <li style={{ color: "var(--text-muted)" }}>No upcoming holidays scheduled.</li>}
        {upcoming.map((h) => (
          <li key={h.label} className="flex justify-between" style={{ color: "var(--text-secondary)" }}>
            <span>{h.label}</span>
            <span style={{ color: "var(--text-muted)" }}>
              {h.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
