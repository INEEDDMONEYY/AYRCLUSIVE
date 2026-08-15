import { Link } from "react-router-dom";
import { ArrowRight, Clock, Mail, MessageSquare, PhoneCall } from "lucide-react";

import ContactHero from "../components/ContactHero";
import AvailabilityCalendar from "../components/AvailabilityCalendar";
import AirplaneWatermark from "../../../shared/components/AirplaneWatermark";
import { businessHours, responseTimes, contactChannels } from "../data/contactInfo";
import { holidays } from "../data/holidays";

const CHANNEL_ICONS = {
  "Submit a Ticket": MessageSquare,
  "Request a Callback": PhoneCall,
  "Email Us": Mail,
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      <ContactHero
        eyebrow="Contact"
        title="We're here to help"
        description="Reach the AYRCLUSIVE team through the channel that works best for you — we'll route it to the right person."
      />

      {/* Reach us */}
      <section className="section w-full">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactChannels.map((channel) => {
              const Icon = CHANNEL_ICONS[channel.label as keyof typeof CHANNEL_ICONS];
              return (
                <Link key={channel.label} to={channel.to} className="card p-6 flex flex-col">
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)]"
                    style={{ background: "var(--background-secondary)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                    {channel.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                    {channel.description}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="section w-full relative overflow-hidden" style={{ background: "var(--background-secondary)" }}>
        <AirplaneWatermark className="top-6 right-10 h-48 w-48 rotate-45 text-black" />

        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
              Availability
            </h2>
            <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
              Our hours, holiday schedule, and typical response times.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
            <div className="flex flex-col gap-6">
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4" style={{ color: "var(--primary)" }} />
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    Business hours
                  </h3>
                </div>
                <ul className="flex flex-col gap-2 text-sm">
                  {businessHours.map((entry) => (
                    <li key={entry.day} className="flex justify-between">
                      <span style={{ color: "var(--text-secondary)" }}>{entry.day}</span>
                      <span style={{ color: "var(--text-primary)" }}>{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                  Response times
                </h3>
                <ul className="flex flex-col gap-2 text-sm">
                  {responseTimes.map((entry) => (
                    <li key={entry.label} className="flex justify-between gap-4">
                      <span style={{ color: "var(--text-secondary)" }}>{entry.label}</span>
                      <span className="text-right font-medium" style={{ color: "var(--text-primary)" }}>
                        {entry.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <AvailabilityCalendar holidays={holidays} />
          </div>
        </div>
      </section>
    </div>
  );
}

