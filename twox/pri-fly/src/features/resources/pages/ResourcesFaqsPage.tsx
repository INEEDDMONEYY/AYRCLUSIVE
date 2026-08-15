import { useState } from "react";
import { ChevronDown } from "lucide-react";

import ResourcesHero from "../components/ResourcesHero";
import { resourcesFaqs } from "../data/resourcesFaqs";
import heroImage from "../../../assets/images/black-n-white.png";

export default function ResourcesFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-white">
      <ResourcesHero
        eyebrow="Resources"
        title="Frequently asked questions"
        description="Answers to the questions we hear most from brokers and operators."
        image={heroImage}
      />

      <section className="section w-full">
        <div className="container">
          <div className="mx-auto max-w-3xl flex flex-col gap-4">
            {resourcesFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 transition-transform"
                      style={{ color: "var(--primary)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
