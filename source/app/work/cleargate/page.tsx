import type { Metadata } from "next";
import { SiteNav, SiteFooter, MoreWork } from "../../SiteChrome";

export const metadata: Metadata = {
  title: "ClearGate - Safe AI Requests Case Study | Aditi Nair",
  description: "An independent B2B SaaS prototype for routing AI document requests through local pattern checks, review and data minimisation.",
  openGraph: {
    title: "ClearGate — Safe AI Requests for B2B SaaS",
    description: "An independent AI adoption and data-protection portfolio prototype.",
    type: "article",
    url: "https://aditinair.in/work/cleargate",
    images: [{ url: "/cleargate-social-preview.png", width: 1200, height: 630, alt: "ClearGate — Safe AI requests for B2B SaaS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearGate — Safe AI Requests for B2B SaaS",
    description: "An independent AI adoption and data-protection portfolio prototype.",
    images: ["/cleargate-social-preview.png"],
  },
};

const stages = [
  ["01", "Check locally", "A document is selected and the prototype checks the first ten pages for a limited set of patterns."],
  ["02", "Explain the route", "The employee sees either a standard path or a clear reason why review is required."],
  ["03", "Minimise and review", "A sensitive request asks for task context and proposes the smallest approved data set."],
  ["04", "Keep a human option", "A reviewer or specialised data-processing team can complete an exception safely."],
];

export default function ClearGatePage() {
  return <main className="editorialPortfolio caseTheme">
    <SiteNav current="work" />
    <header className="projectHero shell"><div><p className="eyebrow">AI ADOPTION · DATA PROTECTION · HUMAN-IN-THE-LOOP WORKFLOW</p><h1>ClearGate</h1><p className="projectDek">A B2B SaaS prototype for deciding when an AI document request can continue, when it needs review and what data is actually necessary.</p><p className="boundaryNote"><b>Independent fictional portfolio prototype.</b> It performs a limited browser-based pattern check; it is not a production security scanner, legal control or deployed customer system.</p><div className="actions"><a className="button primary" href="https://cleargate.aditinair.in" target="_blank" rel="noreferrer">Open working prototype ↗</a></div></div><aside className="projectFacts"><span><b>Project type</b>AI adoption and data-protection prototype</span><span><b>My role</b>Problem framing, workflow design and prototype logic</span><span><b>Evidence</b>Fictional scenario and disclosed local pattern checks</span><span><b>Design decision</b>Route by risk rather than block AI by default</span></aside></header>
    <section className="projectStatement"><div className="shell statementGrid"><p className="eyebrow">THE OPERATING PROBLEM</p><h2>AI adoption fails when teams cannot tell the difference between a normal request and a high-risk exception.</h2><div><p>Employees need AI to stay useful for ordinary work. Customer administrators and privacy teams need clear controls when documents may contain identifiers, contact details or other sensitive information.</p><p className="principle"><b>Product principle</b> Let ordinary work move; slow down only when the request gives a concrete reason to do so.</p></div></div></section>
    <section className="projectSection projectTint"><div className="shell"><div className="projectSectionHead"><p className="eyebrow">PROTOTYPE SCOPE</p><h2>A visible decision path instead of an unexplained block.</h2></div><div className="responsibilityList"><span><b>INPUT</b>Employee chooses a document and states the task outcome.</span><span><b>CHECK</b>Local prototype check looks for PAN-style IDs, Aadhaar-style numbers, emails and phone numbers.</span><span><b>ROUTE</b>No selected pattern found: proceed. Pattern found: request review and propose minimisation.</span><span><b>BOUNDARY</b>Only a limited demonstration. It cannot replace policy, compliance review or production detection tooling.</span></div></div></section>
    <section className="projectSection shell"><div className="projectSectionHead"><p className="eyebrow">WORKFLOW DESIGN</p><h2>Useful AI begins with a decision people can understand.</h2></div><div className="journeyGrid">{stages.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="projectSection evidenceSection"><div className="shell"><div className="projectSectionHead"><p className="eyebrow">DATA MINIMISATION</p><h2>Approval should be specific to the task, not a blanket permission for a document.</h2></div><div className="evidenceColumns"><article><h3>Original document</h3><ul><li>Protected by default</li><li>Not sent to AI before a decision</li><li>Available to the human review path when needed</li></ul></article><article><h3>Task context</h3><ul><li>Employee explains the intended outcome</li><li>Customer policy informs the route</li><li>Review is limited to genuine exceptions</li></ul></article><article className="evidenceNo"><h3>Approved AI input</h3><ul><li>Only data needed for the task</li><li>Example: verification status and date</li><li>Exclude ID number, image and address unless truly required</li></ul></article></div></div></section>
    <section className="projectSection shell"><div className="projectSectionHead"><p className="eyebrow">WHAT A FUTURE PILOT WOULD TEST</p><h2>Measure safety and usability before claiming adoption impact.</h2></div><div className="validationCards"><span><b>Safety</b>Share of restricted requests caught and correctly routed</span><span><b>Speed</b>Time to review or human handoff for exceptions</span><span><b>Trust</b>Whether employees and customer admins understand the decision</span></div><p className="boundaryNote"><b>No pilot has been run.</b> These are proposed validation measures, not measured results.</p></section>
    <section className="projectCta"><div className="shell"><p className="eyebrow">INTERACTIVE PROTOTYPE</p><h2>Try the decision path yourself.</h2><p className="projectCtaCopy">Choose a non-sensitive sample PDF, run the local pattern check, then compare the standard path with the review-and-minimisation flow.</p><div className="actions"><a className="button light" href="https://cleargate.aditinair.in" target="_blank" rel="noreferrer">Explore ClearGate ↗</a></div></div></section>
  <MoreWork current="/work/cleargate" />
    <SiteFooter />
  </main>;
}
