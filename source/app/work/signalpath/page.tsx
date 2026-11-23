import type { Metadata } from "next";
import { SiteNav, SiteFooter, MoreWork } from "../../SiteChrome";

export const metadata: Metadata = {
  title: "SignalPath - AI Customer Success & Analytics Case Study | Aditi Nair",
  description: "An independent AI Customer Success and funnel analytics prototype using synthetic account, onboarding and module data.",
  openGraph: {
    title: "SignalPath - AI Customer Success & Analytics Case Study | Aditi Nair",
    description: "Detect onboarding risk, investigate workflow friction and prepare a customer-approved recovery experiment.",
    type: "article",
    url: "https://aditinair.in/work/signalpath",
    images: [{ url: "/signalpath-social-preview.png", width: 1200, height: 630, alt: "SignalPath - Detect onboarding risk, investigate the workflow, demonstrate the next step" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SignalPath - AI Customer Success & Analytics Case Study | Aditi Nair",
    description: "A synthetic, human-supervised AI Customer Success and funnel analytics prototype.",
    images: ["/signalpath-social-preview.png"],
  },
};

const tests = [
  ["01", "Reproduce the journey", "Run self-service, staff-assisted and pre-visit paths."],
  ["02", "Inspect field behaviour", "Check required, conditional and repeated insurance fields."],
  ["03", "Test device states", "Compare mobile, desktop, refresh and back-navigation behaviour."],
];

export default function SignalPathPage() {
  return <main className="editorialPortfolio caseTheme">
    <SiteNav current="work" />

    <header className="projectHero shell"><div>
      <p className="eyebrow">CUSTOMER SUCCESS ANALYTICS · WORKFLOW TESTING · HUMAN-SUPERVISED AI</p>
      <h1>SignalPath</h1>
      <p className="projectDek">An AI Customer Success copilot concept for detecting onboarding risk, investigating the broken workflow step and preparing a customer-approved recovery experiment.</p>
      <p className="boundaryNote"><b>Independent portfolio concept using fictional accounts and synthetic data.</b> No hospital relationship, production deployment or measured customer outcome.</p>
      <div className="actions"><a className="button primary" href="https://signalpath.aditinair.in" target="_blank" rel="noreferrer">Open interactive prototype ↗</a></div>
    </div><aside className="projectFacts" aria-label="Project facts">
      <span><b>Project type</b>AI Customer Success and analytics prototype</span><span><b>My role</b>Dataset design, product logic and prototype</span><span><b>Data</b>Synthetic account, funnel, module and test-workflow data</span><span><b>Decision</b>Investigate first; test before changing production</span>
    </aside></header>

    <section className="projectStatement"><div className="shell statementGrid"><p className="eyebrow">THE OPERATING PROBLEM</p><h2>Account health can show that risk exists without explaining where the workflow is failing.</h2><div><p>A Customer Success Manager needs to know which account deserves attention, which part of onboarding changed, and what should be tested before recommending a solution.</p><p className="principle"><b>Product insight</b> Connect the warning signal to a transparent evidence trail—not an unexplained AI answer.</p></div></div></section>

    <section className="projectSection projectTint"><div className="shell"><div className="projectSectionHead findingsHead"><p className="eyebrow">SYNTHETIC SCENARIO</p><h2>One account worsens; one module explains where to look.</h2><p>These figures are constructed inputs for demonstrating the analysis workflow. They are not operational findings from a healthcare organisation.</p></div><div className="findingGrid">
      <article><b>1,000</b><span>Synthetic workflow starts for the prioritised account</span></article><article><b>32.0%</b><span>Current synthetic onboarding drop-off</span></article><article><b>+7.0 pp</b><span>Month-over-month deterioration</span></article><article><b>+22.0 pp</b><span>Insurance Information anomaly versus the prior period</span></article>
    </div><p className="methodNote">Priority is directional, not predictive: it tells the CSM where to investigate first.</p></div></section>

    <section className="projectSection shell"><div className="projectSectionHead"><p className="eyebrow">PRODUCT WORKFLOW</p><h2>Detect the risk. Investigate the cause. Demonstrate the next step.</h2></div><div className="journeyGrid">
      <article><span>01</span><h3>Detect</h3><p>Rank fictional accounts using transparent trend and severity signals.</p></article><article><span>02</span><h3>Investigate</h3><p>Resolve the account warning into a module-level anomaly and human testing plan.</p></article><article><span>03</span><h3>Demonstrate</h3><p>Prepare a recovery workflow with explicit customer approvals and measurement.</p></article>
    </div></section>

    <section className="projectSection evidenceSection"><div className="shell"><div className="projectSectionHead"><p className="eyebrow">WORKFLOW TESTING</p><h2>Analytics identifies where to look; testing explains what may be wrong.</h2></div><div className="journeyGrid">{tests.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="projectSection shell"><div className="projectSectionHead"><p className="eyebrow">PROPOSED RECOVERY</p><h2>Turn the investigation into a reviewable customer conversation.</h2></div><div className="responsibilityList"><span><b>01</b>Simplify insurance capture in the test workflow</span><span><b>02</b>Add clearer guidance for required information</span><span><b>03</b>Compare suitable global modules or screeners</span><span><b>04</b>Instrument starts, completions, errors and abandonment</span></div><p className="boundaryNote"><b>Approval rule:</b> No production change is made until the customer reviews and approves the proposal.</p></section>

    <section className="projectSection evidenceSection"><div className="shell experimentGrid"><div><p className="eyebrow">PROPOSED PILOT</p><h2>Measure whether the revised workflow helps before claiming success.</h2><p>Confirm the baseline, test the revised insurance step with a defined cohort, compare performance and adopt, iterate or revert based on pre-agreed rules.</p></div><div className="metricCard"><span>PRIMARY METRIC</span><b>Module completion</b><p>The percentage of users who finish the Insurance Information module.</p></div><div className="guardrailCard"><h3>Guardrails</h3><ul><li>Error rate</li><li>Staff escalations</li><li>Time to complete</li><li>Customer review and approval</li></ul></div></div></section>

    <section className="projectSection shell methodologySection"><p className="eyebrow">EVIDENCE BOUNDARY</p><h2>Synthetic evidence, prototype output and proposed experiment remain distinct.</h2><p>The project demonstrates analysis and product reasoning. It does not claim that SignalPath has predicted churn, improved a hospital workflow or produced measured business impact.</p></section>

    <section className="projectCta"><div className="shell"><p className="eyebrow">WORKING PROTOTYPE</p><h2>Follow the complete evidence trail yourself.</h2><p className="projectCtaCopy">Review the account signal, inspect the module anomaly, complete the workflow-testing checklist and approve the proposed recovery steps.</p><div className="actions"><a className="button light" href="https://signalpath.aditinair.in" target="_blank" rel="noreferrer">Explore SignalPath ↗</a></div></div></section>
  <MoreWork current="/work/signalpath" />
    <SiteFooter />
  </main>;
}
