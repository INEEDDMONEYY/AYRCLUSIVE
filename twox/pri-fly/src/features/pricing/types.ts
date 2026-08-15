export type PricingRole = "broker" | "operator";

export interface PricingPerk {
  title: string;
  included: boolean;
}

export interface PricingTier {
  name: "Starter" | "Advanced" | "Ultimate";
  description: string;
  price: string;
  billingPeriod: string;
  priceNote?: string;
  badge?: string;
  highlighted?: boolean;
  perks: PricingPerk[];
}
