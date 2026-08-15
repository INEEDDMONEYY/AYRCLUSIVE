import PaymentHero from "../components/PaymentHero";
import PaymentStepCard from "../components/PaymentStepCard";
import PaymentSecurityCard from "../components/PaymentSecurityCard";
import { PaymentPerksCard } from "../components/PaymentPerksCard";
import { paymentSteps } from "../data/paymentSteps";
import { paymentSecurityItems } from "../data/paymentSecurity";
import heroImage from "../../../assets/images/altivo-jet.jpg";

export default function PaymentsPage() {
  return (
    <div className="w-full bg-white">
      <PaymentHero
        eyebrow="Payments"
        title="Payments"
        description="See how payments flow from quote to confirmed trip, no matter your role in the marketplace."
        image={heroImage}
      />

      {/* How payments work */}
      <section className="section w-full">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
              How payments work
            </h2>
            <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
              A simple, secure process from quote to confirmed trip.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {paymentSteps.map((step) => (
              <PaymentStepCard key={step.step} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Role-based perks */}
      <section className="section w-full" style={{ background: "var(--background-secondary)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
              Built for every role
            </h2>
            <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
              Whether you're booking, brokering, operating, or dispatching — see what Ayrclusive handles for you.
            </p>
          </div>
          <PaymentPerksCard />
        </div>
      </section>

      {/* Security */}
      <section className="section w-full">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
              Secure by design
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentSecurityItems.map((item, i) => (
              <PaymentSecurityCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}