import { useState } from "react";

import ResourcesHero from "../components/ResourcesHero";
import logo from "../../../assets/icons/altivo-logo-icon.png";
import heroImage from "../../../assets/images/in-sky.png";

const inputClass =
  "w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]";
const inputStyle = { borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-primary)" };

type Mode = "login" | "signup";

// Form elements only — no auth wiring yet, dashboard/portal to be built separately.
export default function ResourcesDevPortalPage() {
  const [mode, setMode] = useState<Mode>("login");

  return (
    <div className="w-full bg-white">
      <ResourcesHero
        eyebrow="Resources"
        title="Dev Portal"
        description="Sign in to manage API keys and developer access."
        image={heroImage}
      />

      <section className="section w-full">
        <div className="container">
          <div className="card mx-auto max-w-md p-6 sm:p-10">
            <div className="mb-6 flex flex-col items-center text-center">
              <img src={logo} alt="AYRCLUSIVE" className="h-9 w-auto" />
              <p className="mt-3 text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                AYRCLUSIVE Dev Portal
              </p>
            </div>

            <div
              className="mb-6 inline-flex w-full p-1 rounded-[var(--radius-full)] gap-1"
              style={{ background: "var(--background-tertiary)" }}
            >
              {(["login", "signup"] as Mode[]).map((m) => {
                const isActive = mode === m;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className="flex-1 px-4 py-2 text-sm font-semibold rounded-[var(--radius-full)] transition-[var(--transition-normal)]"
                    style={{
                      background: isActive ? "var(--primary)" : "transparent",
                      color: isActive ? "white" : "var(--text-secondary)",
                    }}
                  >
                    {m === "login" ? "Log in" : "Sign up"}
                  </button>
                );
              })}
            </div>

            <form className="flex flex-col gap-5">
              {mode === "signup" && (
                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Full name
                  </label>
                  <input type="text" required placeholder="Jane Doe" className={inputClass} style={inputStyle} />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Email
                </label>
                <input type="email" required placeholder="you@company.com" className={inputClass} style={inputStyle} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Password
                </label>
                <input type="password" required placeholder="••••••••" className={inputClass} style={inputStyle} />
              </div>

              {mode === "signup" && (
                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Confirm password
                  </label>
                  <input type="password" required placeholder="••••••••" className={inputClass} style={inputStyle} />
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                {mode === "login" ? "Log in" : "Create account"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
