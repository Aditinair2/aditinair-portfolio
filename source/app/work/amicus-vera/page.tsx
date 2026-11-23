import type { Metadata } from "next";
import { SiteNav, SiteFooter, MoreWork } from "../../SiteChrome";

export const metadata: Metadata = {
  title: "Amicus Vera Case Study | Aditi Nair",
  description: "An independent AI product strategy project with a public clickable prototype, responsible-AI decision boundaries and an evaluation plan.",
  openGraph: {
    title: "Amicus Vera Case Study | Aditi Nair",
    description: "An independent AI product strategy project with a public clickable prototype, responsible-AI decision boundaries and an evaluation plan.",
    type: "article",
    url: "https://aditinair.in/work/amicus-vera",
    images: [{
      url: "/amicus-vera-linkedin-preview-2026.png",
      width: 1536,
      height: 912,
      alt: "Amicus Vera - AI product concept and interactive prototype",
    }],
  },
  twitter: {
    title: "Amicus Vera Case Study | Aditi Nair",
    description: "An independent AI product strategy project with a public clickable prototype, responsible-AI decision boundaries and an evaluation plan.",
    images: ["/amicus-vera-linkedin-preview-2026.png"],
  },
};

const journeys = [
  {
    number: "01",
    title: "Daily connection",
    copy: "A familiar, low-pressure check-in helps an older adult share how they are feeling and move through reminders without a clinical tone.",
  },
  {
    number: "02",
    title: "Concerning moment",
    copy: "The proposed AI experience responds calmly, avoids diagnosis and offers a clear path to a trusted human or emergency support when needed.",
  },
  {
    number: "03",
    title: "Family reassurance",
    copy: "A consent-led family view provides useful signals without turning support into constant surveillance.",
  },
];

const responsibilities = [
  "Problem framing and product thesis",
  "Personas, needs and end-to-end journeys",
  "Feature prioritisation and requirements",
  "AI behaviour and safety boundaries",
  "Prototype direction and QA",
  "Success measures and staged roadmap",
];

const decisionBoundaries = [
  {
    number: "AI",
    title: "Assist and propose",
    copy: "Draft short conversational responses and propose a memory item. The user can ignore, correct or reject the output.",
  },
  {
    number: "RULES",
    title: "Control permissions",
    copy: "Consent, sharing, deletion, reminders and SOS routing remain deterministic product logic—not model decisions.",
  },
  {
    number: "HUMAN",
    title: "Own high-stakes decisions",
    copy: "Qualified people and emergency services handle medical interpretation, emergency decisions and serious safety incidents.",
  },
];

export default function AmicusVeraPage() {
  return (
    <main className="editorialPortfolio caseTheme">
      <SiteNav current="work" />

      <header className="projectHero shell">
        <div>
          <p className="eyebrow">AI PRODUCT STRATEGY · RESPONSIBLE AI · PROTOTYPE</p>
          <h1>Amicus Vera</h1>
          <p className="projectDek">A calm AI companion and family-support experience designed to help older adults feel connected, supported and in control.</p>
          <div className="actions">
            <a className="button primary" href="https://amicus.aditinair.in" target="_blank" rel="noreferrer">Explore prototype ↗</a>
            <a className="button secondary" href="/Amicus-Vera-AI-Product-Case-Study.pdf" target="_blank">Open case-study deck ↗</a>
            <a className="button secondary" href="/Amicus-Vera-Product-Documentation-v0.2.pdf" target="_blank">Read product documentation ↗</a>
          </div>
        </div>
        <aside className="projectFacts" aria-label="Project facts">
          <span><b>Project type</b>Independent portfolio project</span>
          <span><b>My role</b>AI product strategy and prototype</span>
          <span><b>Stage</b>Public prototype · pre-validation</span>
          <span><b>Evidence</b>Prototype, case-study deck and Version 0.2 documentation</span>
        </aside>
      </header>

      <section className="projectStatement">
        <div className="shell statementGrid">
          <p className="eyebrow">THE OPPORTUNITY</p>
          <h2>Support should feel like companionship—not surveillance.</h2>
          <div>
            <p>Older adults can need help with connection, routines and moments of uncertainty, while families need reassurance that respects independence. Existing experiences can feel fragmented, clinical or intrusive.</p>
            <p className="principle"><b>Product thesis</b> Dignity before automation: use AI to make support feel more human, while keeping people in control.</p>
          </div>
        </div>
      </section>

      <section className="projectSection shell">
        <div className="projectSectionHead">
          <p className="eyebrow">DECISION BOUNDARIES</p>
          <h2>AI can assist. Rules and people retain control.</h2>
        </div>
        <div className="journeyGrid">
          {decisionBoundaries.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projectSection shell">
        <div className="projectSectionHead">
          <p className="eyebrow">CORE JOURNEYS</p>
          <h2>Designed around real moments of need.</h2>
        </div>
        <div className="journeyGrid">
          {journeys.map((journey) => (
            <article key={journey.number}>
              <span>{journey.number}</span>
              <h3>{journey.title}</h3>
              <p>{journey.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projectSection projectTint">
        <div className="shell splitSection">
          <div>
            <p className="eyebrow">AI ROLE</p>
            <h2>Useful context, careful response and clear escalation.</h2>
            <p>The product concept specifies how AI could understand conversational context, respond in a warm and accessible way, support continuity and recognise when a human should take over.</p>
            <p className="boundaryNote"><b>Important boundary:</b> this is a product and interaction specification demonstrated through a clickable prototype—not a claim of a production AI system or live model integration.</p>
          </div>
          <div className="aiSequence" aria-label="Proposed AI interaction sequence">
            <span><b>01 · Context</b>Understand the user&apos;s words and current journey</span>
            <span><b>02 · Response</b>Use calm, clear and non-diagnostic language</span>
            <span><b>03 · Escalation</b>Offer trusted human support when risk appears</span>
            <span><b>04 · Continuity</b>Remember only what the user has agreed to share</span>
          </div>
        </div>
      </section>

      <section className="projectSection shell">
        <div className="splitSection contributionSection">
          <div>
            <p className="eyebrow">MY CONTRIBUTION</p>
            <h2>From ambiguous need to inspectable product direction.</h2>
          </div>
          <div className="responsibilityList">
            {responsibilities.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="projectSection evidenceSection">
        <div className="shell evidenceColumns">
          <div>
            <p className="eyebrow">WHAT EXISTS TODAY</p>
            <h2>Evidence, stated precisely.</h2>
          </div>
          <article className="evidenceYes">
            <h3>Demonstrated</h3>
            <ul>
              <li>A public, clickable product prototype</li>
              <li>Defined users, journeys and product principles</li>
              <li>Specified AI behaviours and responsible-use boundaries</li>
              <li>Version 0.2 product documentation, evaluation gates and roadmap</li>
            </ul>
          </article>
          <article className="evidenceNo">
            <h3>Not claimed</h3>
            <ul>
              <li>Live database or production AI integration</li>
              <li>Clinical validation or medical-device status</li>
              <li>Institutional deployment or measured outcomes</li>
              <li>Production security or regulatory readiness</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="projectSection shell validationSection">
        <div>
          <p className="eyebrow">NEXT VALIDATION</p>
          <h2>Test comprehension, comfort and safety before adding complexity.</h2>
        </div>
        <div className="validationCards">
          <span><b>5–8</b>older-adult usability sessions</span>
          <span><b>3–5</b>family-member interviews</span>
          <span><b>0</b>acceptable critical failures in safety scenarios</span>
        </div>
        <p className="methodNote">These are proposed research targets, not completed studies or reported outcomes.</p>
        <p className="boundaryNote"><b>Portfolio truth statement:</b> Amicus Vera demonstrates product strategy, intended journeys and a clickable interaction concept. It is not a live AI model, database, clinical product, production security implementation or institutional deployment.</p>
      </section>

      <section className="projectCta">
        <div className="shell">
          <p className="eyebrow">EXPLORE THE WORK</p>
          <h2>See the product thinking in action.</h2>
          <div className="actions">
            <a className="button light" href="https://amicus.aditinair.in" target="_blank" rel="noreferrer">Open prototype ↗</a>
            <a className="button outlineLight" href="/Amicus-Vera-AI-Product-Case-Study.pdf" target="_blank">Read full deck ↗</a>
            <a className="button outlineLight" href="/Amicus-Vera-Product-Documentation-v0.2.pdf" target="_blank">Read Version 0.2 documentation ↗</a>
          </div>
        </div>
      </section>
    <MoreWork current="/work/amicus-vera" />
    <SiteFooter />
    </main>
  );
}
