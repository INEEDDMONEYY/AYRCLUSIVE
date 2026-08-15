import { Link } from "react-router-dom";
import { ArrowRight, LockKeyhole } from "lucide-react";

import PaymentHero from "../components/PaymentHero";
import PaymentSecurityCard from "../components/PaymentSecurityCard";
import { paymentSecurityItems } from "../data/paymentSecurity";

import MaxWidth from "../../../shared/components/layouts/MaxWidth";

export default function PaymentsSecurityPage() {
  return (
    <div className="w-full bg-white">
      <PaymentHero
        eyebrow="Payment Security"
        title="Payments designed with trust in mind"
        description="Financial transactions require confidence. Altivo is designed to keep payment workflows structured, visible, and connected to verified marketplace activity."
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
          <LockKeyhole className="h-4 w-4" style={{ color: "var(--primary)" }} />
          Secure payment experience
        </div>
      </PaymentHero>

      <section className="py-16 sm:py-24">
        <MaxWidth>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Security first
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Protecting the payment experience
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Altivo is built around a marketplace model where trust,
              verification, and transaction visibility matter.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paymentSecurityItems.map((item) => (
              <PaymentSecurityCard
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </MaxWidth>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <MaxWidth>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                <LockKeyhole className="h-6 w-6 text-slate-900" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">
                Security should be part of the workflow
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Payment security isn't just about the transaction itself. It
                also depends on who is participating, how booking information
                is handled, and how payment activity is associated with the
                trip.
              </p>

              <p>
                Altivo's marketplace approach brings those pieces together so
                brokers and operators have a more structured environment for
                managing commercial aviation transactions.
              </p>
            </div>
          </div>
        </MaxWidth>
      </section>

      <section className="py-16 sm:py-24">
        <MaxWidth>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Have questions about payments?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Explore our payment FAQs or contact the Altivo team for more
              information.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/payments/faq"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Payment FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200"
              >
                Contact AYRCLUSIVE
              </Link>
            </div>
          </div>
        </MaxWidth>
      </section>
    </div>
  );
}