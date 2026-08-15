import { useState } from "react";
import type { PaymentRole } from "../types";

export function usePaymentRole(defaultRole: PaymentRole = "broker") {
  const [role, setRole] = useState<PaymentRole>(defaultRole);
  return { role, setRole };
}