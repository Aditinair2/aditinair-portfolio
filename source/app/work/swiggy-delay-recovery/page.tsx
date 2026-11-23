import type { Metadata } from "next";
import { SiteNav, SiteFooter, MoreWork } from "../../SiteChrome";

export const metadata: Metadata = {
  title: "Swiggy Delay Recovery - Independent Case Study | Aditi Nair",
  description: "An independent product and analytics case study using a disclosed synthetic scenario model to explore late-order recovery.",
  openGraph: {
    title: "Swiggy Delay Recovery - Independent Case Study | Aditi Nair",
    description: "An independent product and analytics case study using a disclosed synthetic scenario model to explore late-order recovery.",
    type: "article",
    url: "https://aditinair.in/work/swiggy-delay-recovery",
    images: [{
      url: "/swiggy-delay-recovery-linkedin-preview-2026.png",
      width: 1536,
      height: 912,
      alt: "Swiggy Delay Recovery - independent product and analytics case study",
    }],
  },
  twitter: {
    title: "Swiggy Delay Recovery - Independent Case Study | Aditi Nair",
    description: "An independent product and analytics case study using a disclosed synthetic scenario model to explore late-order recovery.",
    images: ["/swiggy-delay-recovery-linkedin-preview-2026.png"],
  },
};

const hypotheses = [
  {
    number: "01",
    title: "Restaurant capacity",
    copy: "Peak-hour order volume may exceed the restaurant's practical preparation capacity.",
  },
  {
    number: "02",
    title: "Preparation estimates",
    copy: "Restaurants may enter estimates that do not adjust enough for order size and live demand.",
  },
  {
    number: "03",
    title: "Promise logic",
    copy: "A single delivery estimate can miss peak periods, large baskets and compounding journey delays.",
  },
];

export default function SwiggyDelayRecoveryPage() {
  return (
    <main className="editorialPortfolio caseTheme">
      <SiteNav current="work" />

      <header className="projectHero shell">
        <div>
          <p className="eyebrow">PRODUCT DISCOVERY · DATA ANALYSIS · EXPERIMENT DESIGN</p>
          <h1>Swiggy Delay Recovery</h1>
          <p className="projectDek">A product and analytics case study for reducing uncertainty before a late order becomes a trust failure.</p>
          <p className="boundaryNote"><b>Independent portfolio concept using synthetic data.</b> Not affiliated with or endorsed by Swiggy.</p>
          <div className="actions">
            <a className="button secondary" href="/Swiggy-Delay-Recovery-Independent-Product-Analytics-Case-Study.pdf" target="_blank">Open revised case-study deck ↗</a>
          </div>
        </div>
        <aside className="projectFacts" aria-label="Project facts">
          <span><b>Project type</b>Independent portfolio case</span>
          <span><b>My role</b>Product management and analytics</span>
          <span><b>Dataset</b>600 synthetic orders</span>
          <span><b>Decision</b>Test with a 10% exposure cap; calculate the required sample separately</span>
        </aside>
      </header>

      <section className="projectStatement swiggyStatement">
        <div className="shell statementGrid">
          <p className="eyebrow">THE CUSTOMER PROBLEM</p>
          <h2>The worst part is not always waiting. It is finding out too late.</h2>
          <div>
            <p>A customer may willingly wait for the meal they actually want. Trust breaks when the promised time becomes unreliable and an eventual cancellation arrives after the customer has lost both time and alternatives.</p>
            <p className="principle"><b>Product insight</b> Give customers an honest estimate and an early choice—before support becomes the only path.</p>
          </div>
        </div>
      </section>

      <section className="projectSection shell">
        <div className="projectSectionHead">
          <p className="eyebrow">HYPOTHESES</p>
          <h2>Start with the preparation signal, then inspect the full journey.</h2>
        </div>
        <div className="journeyGrid">
          {hypotheses.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projectSection projectTint">
        <div className="shell">
          <div className="projectSectionHead findingsHead">
            <p className="eyebrow">SYNTHETIC SCENARIO MODEL</p>
            <h2>A transparent simulation for testing the analysis workflow.</h2>
            <p>I constructed 600 orders so peak periods and larger orders carry more delay and cancellation risk. The outputs show how I would segment and compare the journey; they do not discover or prove relationships at Swiggy.</p>
          </div>
          <div className="findingGrid">
            <article><b>53 / 600</b><span>Modeled cancellations in the complete synthetic scenario</span></article>
            <article><b>2.1% / 13.3%</b><span>Modeled cancellation rates in normal and peak scenarios</span></article>
            <article><b>49.9% / 72.8%</b><span>Static-promise versus rule-based accuracy among 547 modeled deliveries</span></article>
            <article><b>+5 / +1 / +3</b><span>Minutes added by the transparent peak, medium-order and large-order rules</span></article>
          </div>
          <p className="methodNote">These are scenario outputs created from explicit assumptions—not Swiggy operational findings or measured company performance.</p>
        </div>
      </section>

      <section className="projectSection shell solutionSection">
        <div className="projectSectionHead">
          <p className="eyebrow">PROPOSED MVP</p>
          <h2>Make the changing promise visible—and make recovery easy.</h2>
        </div>
        <div className="solutionFlow" aria-label="Proposed delay recovery flow">
          <article><span>01</span><h3>Scenario-aware estimate</h3><p>Use a transparent rule-based estimate in the analysis; a future product could evaluate live demand, order size and restaurant signals.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02</span><h3>Early warning</h3><p>Explain the likely delay as soon as confidence drops, not after the promise is missed.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03</span><h3>Customer choice</h3><p>Let the customer continue waiting or cancel without needing to contact support.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>04</span><h3>Fast recovery</h3><p>Show the available refund paths clearly so the customer can order again.</p></article>
        </div>
      </section>

      <section className="projectSection evidenceSection">
        <div className="shell experimentGrid">
          <div>
            <p className="eyebrow">PILOT DESIGN</p>
            <h2>Test the recovery journey with limited exposure.</h2>
            <p>Randomize eligible at-risk orders between the current journey and the new recovery experience. Begin with a 10% exposure cap for operational safety, then calculate the required sample from eligible volume, baseline reorder rate and the minimum meaningful lift.</p>
          </div>
          <div className="metricCard">
            <span>PRIMARY SUCCESS METRIC</span>
            <b>30-day reorder</b>
            <p>Measure lift among customers affected by a restaurant- or platform-initiated cancellation. Set the minimum detectable effect after baseline and power analysis.</p>
          </div>
          <div className="guardrailCard">
            <h3>Guardrails</h3>
            <ul>
              <li>No rise in avoidable cancellations</li>
              <li>ETA error and promise accuracy remain acceptable</li>
              <li>Support-contact and post-recovery satisfaction</li>
              <li>Refund, compensation and contribution-margin cost</li>
              <li>No harmful repeat exposure within the test window</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projectSection shell">
        <div className="projectSectionHead">
          <p className="eyebrow">LEADING INDICATORS</p>
          <h2>Know whether recovery is working before waiting 30 days.</h2>
        </div>
        <div className="journeyGrid">
          <article><span>01</span><h3>Warning timing</h3><p>Share of at-risk customers warned before the original promise is missed.</p></article>
          <article><span>02</span><h3>Self-serve recovery</h3><p>Recovery completed without support, plus time to a clear wait-or-cancel decision.</p></article>
          <article><span>03</span><h3>Ability to reorder</h3><p>Time until funds are available, replacement-order rate and time to replacement.</p></article>
        </div>
      </section>

      <section className="projectSection shell methodologySection">
        <p className="eyebrow">METHODOLOGY NOTE</p>
        <h2>Transparent assumptions make the work stronger.</h2>
        <p>The scenario assigns higher support contact and lower satisfaction and reorder behaviour to cancelled orders so the comparison workflow can be demonstrated. It does not establish causality or represent access to Swiggy systems, internal metrics or measured impact.</p>
      </section>

      <section className="projectCta">
        <div className="shell">
          <p className="eyebrow">CURRENT EVIDENCE</p>
          <h2>Explore the recruiter-safe case study.</h2>
          <p className="projectCtaCopy">The revised deck now matches this page: synthetic scenario outputs are labelled, the estimate is described as rule-based, and the pilot separates its 10% exposure cap from statistical sample sizing.</p>
          <div className="actions">
            <a className="button light" href="/Swiggy-Delay-Recovery-Independent-Product-Analytics-Case-Study.pdf" target="_blank">Read revised deck ↗</a>
          </div>
        </div>
      </section>
    <MoreWork current="/work/swiggy-delay-recovery" />
    <SiteFooter />
    </main>
  );
}
