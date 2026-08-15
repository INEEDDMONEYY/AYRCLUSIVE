import type { ReactNode } from "react";
import MaxWidth from "../../../shared/components/layouts/MaxWidth";
import AirplaneWatermark from "../../../shared/components/AirplaneWatermark";

interface ContactHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

export default function ContactHero({
  eyebrow = "Contact",
  title,
  description,
  image,
  children,
}: ContactHeroProps) {
  return (
    <section className="relative w-full overflow-hidden py-20 text-white sm:py-28" style={{ background: "#000000" }}>
      {image ? (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      ) : (
        // Placeholder background slot until a hero image is supplied via the `image` prop
        <div className="absolute inset-0 bg-black" />
      )}

      <AirplaneWatermark className="-top-6 -right-10 h-56 w-56 rotate-45" />
      <AirplaneWatermark className="-bottom-10 -left-16 h-72 w-72 -rotate-12" />

      <MaxWidth className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--primary)" }}>
            {eyebrow}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{description}</p>

          {children && <div className="mt-8 flex justify-center">{children}</div>}
        </div>
      </MaxWidth>
    </section>
  );
}
