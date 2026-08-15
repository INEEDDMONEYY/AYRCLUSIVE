import { Link } from "react-router-dom";
import { BookOpen, HelpCircle, Compass, Code2, KeyRound, ArrowRight } from "lucide-react";

import ResourcesHero from "../components/ResourcesHero";
import { resourceLinks } from "../data/resourceLinks";
import heroImage from "../../../assets/images/oversea-private-jet.jpg";

const ICONS = {
  blog: BookOpen,
  faq: HelpCircle,
  guides: Compass,
  apis: Code2,
  devPortal: KeyRound,
};

export default function ResourcesPage() {
  return (
    <div className="w-full bg-white">
      <ResourcesHero
        eyebrow="Resources"
        title="Everything you need to work with AYRCLUSIVE"
        description="Product updates, guides, FAQs, and developer tools — all in one place."
        image={heroImage}
      />

      <section className="section w-full">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceLinks.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <Link key={link.label} to={link.to} className="card p-6 flex flex-col">
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)]"
                    style={{ background: "var(--background-secondary)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                    {link.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                    {link.description}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
