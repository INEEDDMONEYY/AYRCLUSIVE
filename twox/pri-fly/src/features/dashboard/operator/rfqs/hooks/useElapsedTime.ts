import { useEffect, useState } from "react";

/** Live-ticking elapsed time since an ISO timestamp, updated every second. */
export function useElapsedTime(since: string) {
  const sinceMs = new Date(since).getTime();
  const [elapsed, setElapsed] = useState(() => Date.now() - sinceMs);

  useEffect(() => {
    const interval = setInterval(() => setElapsed(Date.now() - sinceMs), 1000);
    return () => clearInterval(interval);
  }, [sinceMs]);

  const totalSeconds = Math.max(Math.floor(elapsed / 1000), 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
}
