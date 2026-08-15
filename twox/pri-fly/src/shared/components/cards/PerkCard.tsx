import type { MembershipPerk } from "../../../features/payments/types";

interface PerkCardProps {
  title: string;
  description: string;
  price?: string;
  billingPeriod?: string;
  priceNote?: string;
  badge?: string;
  perks: MembershipPerk[];
  ctaLabel: string;
  onCtaClick?: () => void;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  tags?: string[];
  highlighted?: boolean;
}

export function PerkCard({
  title,
  description,
  price,
  billingPeriod,
  priceNote,
  badge,
  perks,
  ctaLabel,
  onCtaClick,
  secondaryLabel,
  onSecondaryClick,
  tags,
  highlighted = false,
}: PerkCardProps) {
  return (
    <div
      className="card card-animated-border relative flex flex-col p-6 rounded-[var(--radius-lg)]"
      style={{
        background: highlighted ? "var(--background-secondary)" : "var(--surface)",
      }}
    >
      {badge && (
        <span
          className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-[var(--radius-full)] text-white"
          style={{ background: "var(--primary)" }}
        >
          {badge}
        </span>
      )}

      <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>

      {price && (
        <div className="mt-6">
          <span className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
            {price}
          </span>
          {billingPeriod && (
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              /{billingPeriod}
            </span>
          )}
          {priceNote && (
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              {priceNote}
            </p>
          )}
        </div>
      )}

      <button className="btn-primary w-full mt-6" onClick={onCtaClick}>
        {ctaLabel}
      </button>

      {secondaryLabel && (
        <button
          className="text-xs underline mt-3 mx-auto"
          style={{ color: "var(--text-muted)" }}
          onClick={onSecondaryClick}
        >
          {secondaryLabel}
        </button>
      )}

      <ul className="mt-6 flex flex-col gap-3">
        {perks.map((perk, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span
              style={{ color: perk.included ? "var(--primary)" : "var(--text-muted)" }}
              className="mt-0.5"
            >
              {perk.included ? "✓" : "–"}
            </span>
            <span
              style={{
                color: perk.included ? "var(--text-primary)" : "var(--text-muted)",
                fontWeight: perk.included && highlighted ? 600 : 400,
              }}
            >
              {perk.title}
            </span>
          </li>
        ))}
      </ul>

      {tags && tags.length > 0 && (
        <div className="mt-6 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
            Included services
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-[var(--radius-full)] border"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}