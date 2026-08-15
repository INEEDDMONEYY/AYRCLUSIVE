import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ResourcesHero from "../components/ResourcesHero";
import { apiFeatures } from "../data/apiFeatures";
import heroImage from "../../../assets/images/black-jet.png";

export default function ResourcesApisPage() {
  return (
    <div className="w-full bg-white">
      <ResourcesHero
        eyebrow="Resources"
        title="Build on the AYRCLUSIVE API"
        description="Integrate marketplace data and workflows into your own tools."
        image={heroImage}
      />

      <section className="section w-full">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {apiFeatures.map((feature) => (
              <div key={feature.title} className="card p-6">
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="card mx-auto mt-12 max-w-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
              Ready to start building?
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              Sign in to the Dev Portal to generate API keys and access documentation.
            </p>
            <Link to="/resources/dev-portal" className="btn-primary mt-6 inline-flex">
              Go to Dev Portal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
