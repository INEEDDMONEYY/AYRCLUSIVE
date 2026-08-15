export interface ResourceLink {
  label: string;
  description: string;
  to: string;
  icon: "blog" | "faq" | "guides" | "apis" | "devPortal";
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface ResourceFaqItem {
  question: string;
  answer: string;
}

export interface Guide {
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface ApiFeature {
  title: string;
  description: string;
}
