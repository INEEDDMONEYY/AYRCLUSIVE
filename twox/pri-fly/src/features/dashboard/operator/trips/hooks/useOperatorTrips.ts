import { useState } from "react";
import { mockOperatorTrips } from "../data";

export function useOperatorTrips() {
  const [trips] = useState(mockOperatorTrips);
  return { trips };
}
