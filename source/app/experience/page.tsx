import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "../SiteChrome";

export const metadata: Metadata = {
  title: "Experience | Aditi Nair",
  description: "Five roles across SaaS client success, customer-facing operations, automotive marketing and software testing, with 30+ Core and Enterprise accounts supported at Phreesia.",
  openGraph: { title: "Experience | Aditi Nair", description: "From software testing to hands-on Customer Success in healthcare SaaS.", url: "https://aditinair.in/experience", type: "website", images: [{ url: "/customer-success-preview-2026.png", width: 1200, height: 630, alt: "Aditi Nair - Customer Success portfolio" }] },
};

import { experience } from "../experience-data";
import { RoleList } from "../HomeClient";


export default function Experience() {
  return <main className="editorialPortfolio">
    <SiteNav current="experience" />
    <section className="editorialSection experienceSection" style={{paddingTop:64}}>
      <p className="sectionKicker editorialEyebrow">Experience</p>
      <h2 style={{fontSize:"clamp(38px,5vw,60px)",lineHeight:1,letterSpacing:"-.06em",margin:"20px 0 18px"}}>Customer reality is the starting point.</h2>
      <p className="editorialSectionIntro">My career has moved from building and testing software to working directly with customers when a workflow needs to be understood, configured or unblocked. Each role below adds one piece of that story.</p>
      <div className="editorialActions"><a className="buttonPrimary" href="/Aditi-Nair-Resume.pdf" download>Download résumé</a><a className="buttonSecondary" href="/#work">See the case studies</a></div>
      <RoleList roles={experience} />
    </section>
    <SiteFooter />
  </main>
}
