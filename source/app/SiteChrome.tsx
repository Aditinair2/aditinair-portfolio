export function SiteNav({ current }: { current?: "work" | "experience" }) {
  return <header className="editorialNav"><a href="/" className="editorialName">Aditi Nair</a><nav aria-label="Primary navigation"><a href="/#work" aria-current={current === "work" ? "page" : undefined}>Work</a><a href="/experience" aria-current={current === "experience" ? "page" : undefined}>Experience</a><a href="/Aditi-Nair-Resume.pdf" download>Résumé (PDF)</a><a href="/#contact">Contact</a></nav></header>;
}
export function SiteFooter() {
  return <footer className="editorialFooter" id="contact"><h2>Let’s talk.</h2><p>Open to Customer Success opportunities. Open to relocation.</p><div><a href="mailto:aditi7493@gmail.com">aditi7493@gmail.com</a><a href="https://www.linkedin.com/in/aditi7493" target="_blank" rel="noreferrer">linkedin.com/in/aditi7493</a></div><small>© 2026 Aditi Nair · Jabalpur, India</small></footer>;
}
const cases = [
  ["SignalPath", "Customer success", "Onboarding signals that surface risk early and propose a customer-approved test.", "/work/signalpath"],
  ["Amicus Vera", "AI product", "A consent-led AI companion concept for older adults and their families.", "/work/amicus-vera"],
  ["Swiggy Delay Recovery", "Product analytics", "A recovery journey and controlled experiment for delayed food orders.", "/work/swiggy-delay-recovery"],
  ["ClearGate", "Responsible AI", "A browser-based check for limited sensitive-data patterns in PDFs.", "/work/cleargate"],
];
export function MoreWork({ current }: { current: string }) {
  return <section className="editorialSection moreWork" aria-labelledby="more-work"><h2 id="more-work">More case studies</h2><div className="editorialProjectGrid">{cases.filter((c) => c[3] !== current).map(([title, category, description, href]) => <article className="editorialProject" key={title}><p className="cardLabel">{category}</p><h3>{title}</h3><p>{description}</p><a href={href}>Read the case study <span>→</span></a></article>)}</div></section>;
}
