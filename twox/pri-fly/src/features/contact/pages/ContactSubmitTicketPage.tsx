import { useState, type FormEvent } from "react";
import ContactHero from "../components/ContactHero";

const inputClass =
  "w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]";
const inputStyle = { borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-primary)" };

// Placeholder categories — replace with the real ticket categories later.
const TICKET_CATEGORIES = ["Billing", "Account Access", "Technical Issue", "Partnership", "Other"];

export default function ContactSubmitTicketPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: wire up to the backend once the support-ticket API is connected
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      <ContactHero
        eyebrow="Contact"
        title="Submit a ticket"
        description="Tell us what's going on and our team will follow up as soon as possible."
      />

      <section className="section w-full">
        <div className="container">
          <div className="card mx-auto max-w-2xl p-6 sm:p-10">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                  Ticket received
                </h2>
                <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  We'll be in touch based on the response times listed on our contact page.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      Full name
                    </label>
                    <input type="text" required placeholder="Jane Doe" className={inputClass} style={inputStyle} />
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

                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Category
                  </label>
                  <select required defaultValue="" className={inputClass} style={inputStyle}>
                    <option value="" disabled>
                      Select a category
                    </option>
                    {TICKET_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brief summary of the issue"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Description
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Share as much detail as you can."
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit ticket
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

