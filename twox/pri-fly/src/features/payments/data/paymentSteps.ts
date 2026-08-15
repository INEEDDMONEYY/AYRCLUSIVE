import type { PaymentStep } from "../types";

export type PaymentRole = "client" | "operator" | "broker" | "dispatcher";

export const paymentSteps: PaymentStep[] = [
  {
    title: "Submit Aviation Documents",
    description: "Provide all necessary aviation documents for verification and compliance.",
    step: 1,
  },
  {
    title: "Payment Processing",
    description: " Half of the payment is required to ensure the membership contract of both parties. Once your aviation documents are verified, the remaining balance of membership will be due. All payments are processed securely.",
    step: 2,
  },
  {
    title: "Confirmation",
    description: "Receive confirmation of your payment and next steps.",
    step: 3,
  },
];

export const operatorPaymentSteps: PaymentStep[] = [ /* receive RFQ → submit quote → quote accepted → payment processed → payout released */ ];

export const brokerPaymentSteps: PaymentStep[] = [ /* submit request → curate quotes → confirm booking → manage payment flow → commission tracked */ ];

export const dispatcherPaymentSteps: PaymentStep[] = [ /* trip assigned → verify details → confirm readiness → payment finalized → cleared for departure */ ];

export const paymentStepsByRole: Record<PaymentRole, PaymentStep[]> = {
  client: paymentSteps,
  operator: operatorPaymentSteps,
  broker: brokerPaymentSteps,
  dispatcher: dispatcherPaymentSteps,
};