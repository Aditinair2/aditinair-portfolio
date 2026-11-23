import type { Metadata } from "next";
import "./globals.css";
import "./folio.css";
import "./portfolio-overrides.css";
import "./case-theme.css";
import "./home-upgrade.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aditinair.in"),
  title: "Aditi Nair | Customer Success & AI Adoption",
  description: "Customer Success grounded in hands-on SaaS workflow implementation, customer insights and escalation management, strengthened by AI-assisted analytics and adoption projects.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Aditi Nair | Customer Success & AI Adoption",
    description: "Customer Success first. Hands-on workflow implementation, customer insights and escalations, supported by AI-assisted analytics and independent adoption projects.",
    url: "https://aditinair.in",
    type: "website",
    images: [{
      url: "/customer-success-preview-2026.png",
      width: 1200,
      height: 630,
      alt: "Aditi Nair - Customer Success portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditi Nair | Customer Success & AI Adoption",
    description: "Hands-on SaaS customer success, workflow implementation and customer insights, strengthened by AI-assisted analytics.",
    images: ["/customer-success-preview-2026.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
