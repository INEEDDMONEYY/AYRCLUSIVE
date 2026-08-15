import type { PaymentRole } from "../types";

const ROLES: { value: PaymentRole; label: string }[] = [
  { value: "broker", label: "Broker" },
  { value: "operator", label: "Operator" },
  { value: "dispatcher", label: "Dispatcher" },
];

interface PaymentRoleToggleProps {
  active: PaymentRole;
  onChange: (role: PaymentRole) => void;
}

export function PaymentRoleToggle({ active, onChange }: PaymentRoleToggleProps) {
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
            className="px-4 py-2 text-sm font-semibold rounded-[var(--radius-full)] transition-[var(--transition-normal)]"
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