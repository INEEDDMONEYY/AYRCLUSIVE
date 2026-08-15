import type { PaymentStep } from "../types";

interface PaymentStepCardProps {
  step: PaymentStep;
}

export default function PaymentStepCard({
  step,
}: PaymentStepCardProps) {
  return (
    <article className="card card-animated-border p-6 sm:p-8">
      <div
        className="mb-6 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] text-sm font-semibold text-white"
        style={{ background: "var(--primary)" }}
      >
        {step.step}
      </div>

      <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
        {step.title}
      </h3>

      <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
        {step.description}
      </p>
    </article>
  );
}