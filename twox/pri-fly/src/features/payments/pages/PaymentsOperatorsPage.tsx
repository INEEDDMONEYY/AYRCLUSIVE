import { Link } from "react-router-dom";
import { ArrowRight, PlaneTakeoff } from "lucide-react";

import PaymentHero from "../components/PaymentHero";
import PaymentStepCard from "../components/PaymentStepCard";
import { operatorPaymentSteps } from "../data/operatorPayments";

import MaxWidth from "../../../shared/components/layouts/MaxWidth";

export default function PaymentsOperatorsPage() {
  return (
    <div className="w-full bg-white">
      <PaymentHero
        eyebrow="For Operators"
        title="A clearer path from quote to payment"
        description="AYRCLUSIVE gives operators a structured workflow for managing trip opportunities, quotes, bookings, and payment information."
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
          <PlaneTakeoff className="h-4 w-4" style={{ color: "var(--primary)" }} />
          Built for operators
        </div>
      </PaymentHero>

      <section className="py-16 sm:py-24">
        <MaxWidth>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Operator workflow
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              From opportunity to payment
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Operators can follow the booking lifecycle through one connected
              marketplace workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {operatorPaymentSteps.map((step) => (
              <PaymentStepCard
                key={step.step}
                step={step}
              />
            ))}
          </div>
        </MaxWidth>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <MaxWidth>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Operator visibility
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Know where every opportunity stands
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Your payment workflow should connect directly to your quoting
                and trip workflow. AYRCLUSIVE is designed to make it easier for
                operators to understand the status of opportunities and
                associated transactions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Quote",
                  text: "Submit and manage your trip pricing.",
                },
                {
                  title: "Booking",
                  text: "Track when your quote becomes a confirmed trip.",
                },
                {
                  title: "Payment",
                  text: "Keep payment activity associated with the booking.",
                },
                {
                  title: "Records",
                  text: "Maintain visibility into relevant transaction details.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MaxWidth>
      </section>

      <section className="py-16 sm:py-24">
        <MaxWidth>
          <div className="rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Join AYRCLUSIVE
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Turn more opportunities into completed trips
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Join a marketplace designed to connect qualified operators with
              brokers looking for aircraft availability.
            </p>

            <div className="mt-8">
              <Link
                to="/join-ayrclusive/operators"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
              >
                Join as an operator
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </MaxWidth>
      </section>
    </div>
  );
}