import JoinHero from "../components/JoinHero";
import BenefitsGrid from "../components/BenefitsGrid";
import VerificationSteps from "../components/VerificationSteps";
import { operatorBenefits } from "../data/benefits";

export default function JoinAltivoPage() {
  return (
    <main className="w-full">

      <JoinHero
        eyebrow="Join AYRCLUSIVE"
        title="Join a trusted, verified aviation network."
        description="Whether you're a broker sourcing aircraft or an operator filling your schedule, Ayrclusive connects you with the right partners quickly and transparently."
        actions={[
          { label: "Brokers", to: "/join-ayrclusive/brokers" },
          { label: "Operators", to: "/join-ayrclusive/operators" },
        ]}
      />

      <BenefitsGrid
        eyebrow="Operator Benefits"
        heading="Grow your aviation business with AYRCLUSIVE"
        description="Access qualified opportunities while building credibility inside a verified private aviation marketplace."
        benefits={operatorBenefits}
      />

      <VerificationSteps />

    </main>
  );
}