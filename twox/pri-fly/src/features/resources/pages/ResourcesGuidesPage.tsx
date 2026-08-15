import ResourcesHero from "../components/ResourcesHero";
import { guides } from "../data/guides";
import heroImage from "../../../assets/images/above-mountians.png";

export default function ResourcesGuidesPage() {
  return (
    <div className="w-full bg-white">
      <ResourcesHero
        eyebrow="Resources"
        title="Guides"
        description="Step-by-step walkthroughs for getting the most out of AYRCLUSIVE."
        image={heroImage}
      />

      <section className="section w-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <article key={guide.title} className="card p-6 flex flex-col">
                <span
                  className="mb-3 inline-flex w-fit rounded-[var(--radius-full)] px-3 py-1 text-xs font-semibold text-white"
                  style={{ background: "var(--primary)" }}
                >
                  {guide.level}
                </span>
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                  {guide.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
