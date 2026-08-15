import { Plane } from "lucide-react";

interface AirplaneWatermarkProps {
  className?: string;
}

/** Subtle decorative plane icon used as a low-opacity background accent. */
export default function AirplaneWatermark({ className = "" }: AirplaneWatermarkProps) {
  return <Plane aria-hidden="true" className={`pointer-events-none absolute text-current opacity-[0.04] ${className}`} />;
}
