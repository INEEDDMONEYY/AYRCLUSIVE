export type PaymentRole = "broker" | "operator" | "dispatcher";

export interface PaymentStep {
  step: number;
  title: string;
  description: string;
}

export interface PaymentFeature {
  title: string;
  description: string;
}

export interface PaymentSecurityItem {
  title: string;
  description: string;
}

export interface PaymentPerk {
  title: string;
  description?: string;
  included: boolean;
}

export interface PaymentPerkSet {
  role: PaymentRole;
  label: string;
  description: string;
  price?: string;
  billingPeriod?: string;
  priceNote?: string;
  badge?: string;
  perks: MembershipPerk[]; // reused — same shape as membership perks
}

export interface OperatorPaymentStep {
  step: number;
  title: string;
  description: string;
}

export interface MembershipPlan {
  name: "Silver" | "Gold";
  description: string;
  price: string;
  billingPeriod: string;
  perks: MembershipPerk[];
  highlighted?: boolean;
  badge?: string;
}

export interface MembershipPerk {
  title: string;
  description?: string;
  included: boolean;
}