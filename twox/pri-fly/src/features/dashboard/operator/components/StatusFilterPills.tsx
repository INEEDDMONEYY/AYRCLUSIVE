interface FilterOption<T extends string> {
  value: T;
  label: string;
}

interface StatusFilterPillsProps<T extends string> {
  options: FilterOption<T>[];
  active: T;
  onChange: (value: T) => void;
}

/** Segmented filter pill row — same interaction pattern used across the RFQ, Quotes, and Trips pages. */
export default function StatusFilterPills<T extends string>({ options, active, onChange }: StatusFilterPillsProps<T>) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--background-secondary)] text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
