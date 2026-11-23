"use client";
import { useEffect, useState } from "react";

export function RevealInit() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    root.classList.add("js-reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((el) => io.observe(el));
    return () => { io.disconnect(); root.classList.remove("js-reveal"); };
  }, []);
  return null;
}

export function RoleList({ roles }: { roles: string[][] }) {
  const [open, setOpen] = useState<number[]>([0]);
  const all = open.length === roles.length;
  return <div className="roleList">
    <div className="roleListTools"><span>{roles.length} roles · Apr 2018 to Jun 2026</span><button type="button" className="textButton" onClick={() => setOpen(all ? [] : roles.map((_, i) => i))}>{all ? "Collapse all" : "Expand all"}</button></div>
    {roles.map(([dates, role, context, contribution], i) => <details key={role} className="roleItem" open={open.includes(i)} onToggle={(e) => { const isOpen = (e.currentTarget as HTMLDetailsElement).open; setOpen((o) => isOpen ? (o.includes(i) ? o : [...o, i]) : o.filter((x) => x !== i)); }}>
      <summary><time>{dates}</time><span className="roleTitle"><strong>{role}</strong><em>{context}</em></span><span className="roleToggle" aria-hidden="true" /></summary>
      <div className="roleBody"><p className="storyLabel">What I did</p><p>{contribution}</p></div>
    </details>)}
  </div>;
}

type Project = { title: string; category: string; description: string; status: string; href: string; tags: string[]; thumb: string; alt: string; live?: string };
const projects: Project[] = [
  { title: "SignalPath", category: "Customer success", description: "Onboarding signals that surface risk early, trace it to one workflow module and propose a customer-approved test.", status: "Synthetic data · Pilot proposed, not run", href: "/work/signalpath", tags: ["Customer Success", "Analytics", "AI"], thumb: "/thumb-signalpath.webp", alt: "SignalPath case study cover", live: "https://signalpath.aditinair.in" },
  { title: "Amicus Vera", category: "AI product", description: "A consent-led AI companion concept for older adults and their families, with clear lines between AI, rules and human decisions.", status: "Clickable prototype · Not validated with users", href: "/work/amicus-vera", tags: ["AI", "Product"], thumb: "/thumb-amicus-vera.webp", alt: "Amicus Vera case study cover", live: "https://amicus.aditinair.in" },
  { title: "Swiggy Delay Recovery", category: "Product analytics", description: "A recovery journey and controlled experiment for delayed food orders, built on a synthetic dataset.", status: "Independent work · Not affiliated with Swiggy", href: "/work/swiggy-delay-recovery", tags: ["Analytics", "Product"], thumb: "/thumb-swiggy.webp", alt: "Swiggy Delay Recovery case study cover" },
  { title: "ClearGate", category: "Responsible AI", description: "A browser-based check that spots limited sensitive-data patterns in PDFs locally and explains review paths for exceptions.", status: "Fictional prototype · Not a production control", href: "/work/cleargate", tags: ["AI"], thumb: "/thumb-cleargate.webp", alt: "ClearGate case study cover", live: "https://cleargate.aditinair.in" },
];
const filters = ["All", "Customer Success", "AI", "Analytics", "Product"];

export function WorkExplorer() {
  const [active, setActive] = useState("All");
  const shown = projects.filter((p) => active === "All" || p.tags.includes(active));
  return <section data-reveal className="editorialSection workSection" id="work">
    <h2>Selected work</h2>
    <p className="editorialSectionIntro">Four independent case studies. Their evidence labels distinguish real experience, synthetic data, prototypes and proposed validation. Three have a live prototype you can try.</p>
    <div className="filterBar" role="group" aria-label="Filter case studies by skill">{filters.map((f) => <button type="button" key={f} className={"filterChip" + (active === f ? " active" : "")} aria-pressed={active === f} onClick={() => setActive(f)}>{f}</button>)}</div>
    <div className="workGrid">{shown.map((p) => <article className="workCard" key={p.title}>
      <a className="workThumb" href={p.href} aria-label={`Read the ${p.title} case study`}><img src={p.thumb} alt={p.alt} width={900} height={473} loading="lazy" /></a>
      <div className="workBody"><p className="cardLabel">{p.category}</p><h3>{p.title}</h3><p>{p.description}</p><span className="statusChip">{p.status}</span>
        <div className="workLinks"><a href={p.href}>Read the case study <span>→</span></a>{p.live && <a className="liveLink" href={p.live} target="_blank" rel="noreferrer">Try the live prototype ↗</a>}</div></div>
    </article>)}</div>
  </section>;
}
