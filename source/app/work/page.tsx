import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "../SiteChrome";

export const metadata: Metadata = {
  title: "Work | Aditi Nair",
  description: "Four independent case studies: SignalPath, Amicus Vera, Swiggy Delay Recovery and ClearGate, each with clear evidence labels.",
  openGraph: { title: "Work | Aditi Nair", description: "Independent Customer Success, AI product and analytics case studies.", url: "https://aditinair.in/work", type: "website", images: [{ url: "/customer-success-preview-2026.png", width: 1200, height: 630, alt: "Aditi Nair - Customer Success portfolio" }] },
};

const work = [
  ["Customer success", "SignalPath", "Onboarding signals that surface risk early, trace it to one workflow module and propose a customer-approved test.", "Synthetic data · Pilot proposed, not run", "/work/signalpath"],
  ["AI product", "Amicus Vera", "A consent-led AI companion concept for older adults and their families, with clear lines between AI, rules and human decisions.", "Clickable prototype · Not validated with users", "/work/amicus-vera"],
  ["Product analytics", "Swiggy Delay Recovery", "A recovery journey and controlled experiment for delayed food orders, built on a synthetic dataset.", "Independent work · Not affiliated with Swiggy", "/work/swiggy-delay-recovery"],
  ["Responsible AI", "ClearGate", "A browser-based check that spots limited sensitive-data patterns in PDFs locally and explains review paths for exceptions.", "Fictional prototype · Not a production control", "/work/cleargate"],
];

export default function Work() {
  return <main className="editorialPortfolio">
    <SiteNav current="work" />
    <section className="editorialSection workSection" style={{ paddingTop: 64 }}>
      <p className="sectionKicker editorialEyebrow">Work</p>
      <h2 style={{ fontSize: "clamp(38px,5vw,60px)", lineHeight: 1, letterSpacing: "-.06em", margin: "20px 0 18px" }}>Questions worth working through.</h2>
      <p className="editorialSectionIntro">Four independent case studies. Their evidence labels distinguish real experience, synthetic data, prototypes and proposed validation.</p>
      <div className="editorialProjectGrid">{work.map(([category, title, description, status, href]) => <article className="editorialProject" key={title}><p className="cardLabel">{category}</p><h3>{title}</h3><p>{description}</p><span className="statusChip">{status}</span><a href={href}>Read the case study <span>→</span></a></article>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
