import { membershipPlans } from "../data/membershipPlans";
import { PerkCard } from "../../../shared/components/cards/PerkCard";

export function MembershipPricing() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {membershipPlans.map((plan) => (
            <PerkCard
              key={plan.name}
              title={plan.name}
              description={plan.description}
              price={plan.price}
              billingPeriod={plan.billingPeriod}
              badge={plan.badge}
              highlighted={plan.highlighted}
              perks={plan.perks}
              ctaLabel="Get started"
            />
          ))}
        </div>
      </div>
    </section>
  );
}