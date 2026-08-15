import { useState, type FormEvent } from "react";
import ContactHero from "../components/ContactHero";

const inputClass =
  "w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]";
const inputStyle = { borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-primary)" };

// Placeholder issue types — replace with the real callback categories later.
const ISSUE_TYPES = ["Billing", "Onboarding", "Technical Issue", "Partnership", "Other"];

export default function ContactRequestCallbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: wire up to the backend once the callback-request API is connected
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      <ContactHero
        eyebrow="Contact"
        title="Request a callback"
        description="Share a few details and a team member will call you back."
      />

      <section className="section w-full">
        <div className="container">
          <div className="card mx-auto max-w-2xl p-6 sm:p-10">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                  Request received
                </h2>
                <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  We'll call you back based on the response times listed on our contact page.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Organization name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your company name"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Problem or issue
                  </label>
                  <select required defaultValue="" className={inputClass} style={inputStyle}>
                    <option value="" disabled>
                      Select an issue
                    </option>
                    {ISSUE_TYPES.map((issue) => (
                      <option key={issue} value={issue}>
                        {issue}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Brief description
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us a bit more about what you need."
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 555-5555"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Request callback
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

