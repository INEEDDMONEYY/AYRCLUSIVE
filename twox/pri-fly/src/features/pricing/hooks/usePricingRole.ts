import { useState } from "react";
import type { PricingRole } from "../types";

export function usePricingRole(defaultRole: PricingRole = "broker") {
  const [role, setRole] = useState<PricingRole>(defaultRole);
  return { role, setRole };
}
