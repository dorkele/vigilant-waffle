type RouteNames =
  | "startups"
  | "enterprise"
  | "analytics"
  | "customers"
  | "pricing"
  | "integrations"
  | "requestDemo"
  | "requestDemoThankYou"
  | "requestInfoThankYou"
  | "ashbyStory"
  | "support"
  | "security"
  | "terms"
  | "privacy"
  | "blog"
  | "careers"
  | "team"
  | "apiDocs"
  | "status"
  | "vulnerability"
  | "jobBoardEmbedExamples"
  | "jobBoardEmbedExampleFullJobBoard"
  | "jobBoardEmbedExampleApplicationFormOnly";

export interface RouteItem {
  slug: string;
  label: string;
  shortLabel?: string;
}

export const routes: Record<RouteNames, RouteItem> = {
  startups: { slug: "/startups", label: "For Startups" },
  enterprise: { slug: "/growth", label: "For Enterprise" },
  analytics: { slug: "/analytics", label: "For Analytics" },
  customers: { slug: "/customers", label: "Customers" },
  pricing: { slug: "/pricing", label: "Pricing" },
  integrations: { slug: "/integrations", label: "Integrations" },
  requestDemo: { slug: "/request-demo", label: "Get In Touch" },
  requestDemoThankYou: {
    slug: "/request-demo/demo-thank-you",
    label: "Thank You",
  },
  requestInfoThankYou: {
    slug: "/request-demo/info-thank-you",
    label: "Thank You",
  },
  ashbyStory: { slug: "/story", label: "Our Story" },
  support: { slug: "/support", label: "Support" },
  security: { slug: "/resources/security", label: "Security" },
  terms: { slug: "/resources/terms", label: "Terms" },
  privacy: { slug: "/resources/privacy", label: "Privacy" },
  blog: { slug: "/blog/all", label: "Blog" },
  careers: { slug: "/careers", label: "Careers" },
  team: { slug: "/team", label: "Team" },
  apiDocs: { slug: "https://developers.ashbyhq.com/", label: "API" },
  status: { slug: "https://status.ashbyhq.com/", label: "Status" },
  vulnerability: {
    slug: "/resources/vulnerability-disclosure",
    label: "Vulnerability Disclosure",
  },
  jobBoardEmbedExamples: {
    slug: "/job-board-embed-examples",
    label: "Job Board Embed Examples",
  },
  jobBoardEmbedExampleFullJobBoard: {
    slug: "/job-board-embed-examples/full-job-board",
    label: "Job Board Embed Example - Full Job Board Embed",
  },
  jobBoardEmbedExampleApplicationFormOnly: {
    slug: "/job-board-embed-examples/application-form-only",
    label: "Job Board Embed Example - Application Form Only",
  },
};

export const socialLinks: Record<string, RouteItem> = {
  twitter: { slug: "https://twitter.com/ashbyhq", label: "Twitter" },
  linkedIn: {
    slug: "https://www.linkedin.com/company/ashbyhq/mycompany/",
    label: "LinkedIn",
  },
};
