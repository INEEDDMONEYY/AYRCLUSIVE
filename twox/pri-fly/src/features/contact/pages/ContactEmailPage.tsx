import { Mail } from "lucide-react";
import ContactHero from "../components/ContactHero";

const EMAIL_CHANNELS = [
  { label: "General support", email: "support@ayrclusive.com" },
  { label: "Sales & partnerships", email: "sales@ayrclusive.com" },
  { label: "Development & technical issues", email: "dev@ayrclusive.com" },
];

export default function ContactEmailPage() {
  return (
    <div className="w-full bg-white">
      <ContactHero
        eyebrow="Contact"
        title="Email us"
        description="Reach the right team directly by email."
      />

      <section className="section w-full">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {EMAIL_CHANNELS.map((channel) => (
              <a key={channel.email} href={`mailto:${channel.email}`} className="card p-6 flex flex-col">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)]"
                  style={{ background: "var(--background-secondary)" }}
                >
                  <Mail className="h-5 w-5" style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {channel.label}
                </h3>
                <p className="mt-3 text-sm" style={{ color: "var(--primary)" }}>
                  {channel.email}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

