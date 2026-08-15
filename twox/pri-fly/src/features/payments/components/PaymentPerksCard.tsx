import { usePaymentRole } from "../hooks/usePaymentRole";
import { PaymentRoleToggle } from "./PaymentRoleToggle";
import { perksByRole } from "../data/paymentPerks";
import { PerkCard } from "../../../shared/components/cards/PerkCard";

export function PaymentPerksCard() {
  const { role, setRole } = usePaymentRole();
  const activeSet = perksByRole[role];

  return (
    <div className="flex flex-col items-center gap-6">
      <PaymentRoleToggle active={role} onChange={setRole} />
      <div className="w-full max-w-md">
        <PerkCard
          title={activeSet.label}
          description={activeSet.description}
          perks={activeSet.perks}
          ctaLabel="Learn more"
        />
      </div>
    </div>
  );
}