import type { ResourceLink } from "../types";

export const resourceLinks: ResourceLink[] = [
  {
    label: "Blog",
    description: "Product updates, industry insight, and stories from the marketplace.",
    to: "/resources/blog",
    icon: "blog",
  },
  {
    label: "FAQs",
    description: "Answers to the questions we hear most from brokers and operators.",
    to: "/resources/faqs",
    icon: "faq",
  },
  {
    label: "Guides",
    description: "Step-by-step walkthroughs for getting the most out of AYRCLUSIVE.",
    to: "/resources/guides",
    icon: "guides",
  },
  {
    label: "APIs",
    description: "Integrate AYRCLUSIVE data and workflows into your own tools.",
    to: "/resources/apis",
    icon: "apis",
  },
  {
    label: "Dev Portal",
    description: "Sign in to manage API keys and developer access.",
    to: "/resources/dev-portal",
    icon: "devPortal",
  },
];
