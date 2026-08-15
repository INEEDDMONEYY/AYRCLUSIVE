import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PaymentHero from "../components/PaymentHero";
import PaymentStepCard from "../components/PaymentStepCard";
import { paymentSteps } from "../data/paymentSteps";

import MaxWidth from "../../../shared/components/layouts/MaxWidth";
import Button from "../../../shared/ui/Button";

export default function PaymentsHowItWorksPage() {
  return (
    <div className="w-full bg-white">
      <PaymentHero
        eyebrow="How Payments Work"
        title="Simple, transparent payments for every trip"
        description="Altivo connects brokers and operators through a structured booking and payment experience designed to keep every step clear."
      />

      <section className="py-16 sm:py-24">
        <MaxWidth>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              The payment journey
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              From quote to confirmed trip
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              AYRCLUSIVE keeps the payment journey connected to the trip so
              participants can understand what happens at each stage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paymentSteps.map((step) => (
              <PaymentStepCard key={step.step} step={step} />
            ))}
          </div>
        </MaxWidth>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <MaxWidth>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Built around the trip
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Your booking and payment information stay connected
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-slate-600">
                Rather than treating payment as a separate process, Altivo
                connects transaction information with the underlying trip and
                quote workflow. This gives brokers and operators a clearer
                picture of where a booking stands.
              </p>
            </div>
          </div>
        </MaxWidth>
      </section>

      <section className="py-16 sm:py-24">
        <MaxWidth>
          <div className="rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to experience a better workflow?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Join Altivo and bring your charter operations into a faster,
              more connected marketplace.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                className="bg-white text-slate-900 hover:bg-slate-100"
                onClick={() => undefined}
              >
                Get started
              </Button>

              <Link
                to="/payments/security"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Learn about security
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </MaxWidth>
      </section>
    </div>
  );
}