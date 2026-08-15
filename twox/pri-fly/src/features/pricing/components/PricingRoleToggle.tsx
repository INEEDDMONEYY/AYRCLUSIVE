import type { PricingRole } from "../types";

const ROLES: { value: PricingRole; label: string }[] = [
  { value: "broker", label: "Broker" },
  { value: "operator", label: "Operator" },
];

interface PricingRoleToggleProps {
  active: PricingRole;
  onChange: (role: PricingRole) => void;
}

export function PricingRoleToggle({ active, onChange }: PricingRoleToggleProps) {
  return (
    <div
      className="inline-flex p-1 rounded-[var(--radius-full)] gap-1"
      style={{ background: "var(--background-tertiary)" }}
    >
      {ROLES.map((r) => {
        const isActive = r.value === active;
        return (
          <button
            key={r.value}
            onClick={() => onChange(r.value)}
            className="px-6 py-2 text-sm font-semibold rounded-[var(--radius-full)] transition-[var(--transition-normal)]"
            style={{
              background: isActive ? "var(--primary)" : "transparent",
              color: isActive ? "white" : "var(--text-secondary)",
            }}
          >
            {r.label}
          </button>
        );
      })}
    </div>
  );
}
