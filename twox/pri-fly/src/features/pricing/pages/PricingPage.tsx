import { usePricingRole } from "../hooks/usePricingRole";
import { PricingRoleToggle } from "../components/PricingRoleToggle";
import { pricingPlans } from "../data/pricingPlans";
import { PerkCard } from "../../../shared/components/cards/PerkCard";

export default function PricingPage() {
  const { role, setRole } = usePricingRole();
  const tiers = pricingPlans[role];

  return (
    <div className="w-full bg-white">
      <section className="section w-full">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--primary)" }}>
              Pricing
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl" style={{ color: "var(--text-primary)" }}>
              Our memberships
            </h1>
            <p className="mt-4" style={{ color: "var(--text-secondary)" }}>
              Choose the membership that fits how you do business. Pricing and perks may vary by role.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <PricingRoleToggle active={role} onChange={setRole} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <PerkCard
                key={tier.name}
                title={tier.name}
                description={tier.description}
                price={tier.price}
                billingPeriod={tier.billingPeriod}
                priceNote={tier.priceNote}
                badge={tier.badge}
                highlighted={tier.highlighted}
                perks={tier.perks}
                ctaLabel="Get started"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

