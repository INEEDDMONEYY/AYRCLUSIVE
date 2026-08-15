import { ShieldCheck } from "lucide-react";
import type { PaymentSecurityItem } from "../types";

interface PaymentSecurityCardProps {
  item: PaymentSecurityItem;
}

export default function PaymentSecurityCard({
  item,
}: PaymentSecurityCardProps) {
  return (
    <article className="card card-animated-border p-6 transition-all hover:-translate-y-0.5">
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)]"
        style={{ background: "var(--background-secondary)" }}
      >
        <ShieldCheck className="h-5 w-5" style={{ color: "var(--primary)" }} />
      </div>

      <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
        {item.description}
      </p>
    </article>
  );
}