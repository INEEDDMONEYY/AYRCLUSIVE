import { Clock } from "lucide-react";
import { useElapsedTime } from "../hooks/useElapsedTime";

interface RFQLiveTimerProps {
  since: string;
}

export default function RFQLiveTimer({ since }: RFQLiveTimerProps) {
  const { hours, minutes, seconds } = useElapsedTime(since);
  const label = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m ${seconds}s`;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
      <Clock size={12} />
      Alive for {label}
    </span>
  );
}
