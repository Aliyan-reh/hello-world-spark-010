import React from "react";
import SEO from "@/components/SEO";

const team = [
  { name: "Riley Stone", role: "Creative Director", img: "/images/team-riley.jpg" },
  { name: "Jordan Fox", role: "Lead Developer", img: "/images/team-jordan.jpg" },
  { name: "Casey Rivers", role: "UX Designer", img: "/images/team-casey.jpg" },
  { name: "Sam Patel", role: "SEO Strategist", img: "/images/team-sam.jpg" },
];

const About: React.FC = () => {
  return (
    <>
      <SEO title="About Us | Creative Web Design Agency" description="Our story, team, and mission to craft exceptional digital experiences." />
      <main className="container py-16">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">About Us</h1>
          <p className="mt-3 text-muted-foreground">We’re a tight-knit team of designers and developers who love solving problems with great design.</p>
        </header>

        <figure className="mt-8 overflow-hidden rounded-xl border">
          <img src="/images/project-agency.jpg" alt="Team collaboration at creative web design agency" className="h-64 w-full object-cover md:h-80" loading="lazy" />
        </figure>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article>
            <h2 className="text-xl font-semibold">Our Story</h2>
            <p className="mt-2 text-sm text-muted-foreground">Founded to bridge strategy and craft, we partner with ambitious brands to deliver measurable outcomes. We combine research, UX, and modern engineering to ship fast without sacrificing quality—and we stay focused on the KPIs that matter.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Mission & Vision</h2>
            <p className="mt-2 text-sm text-muted-foreground">Design systems, thoughtful UX, and performance-first engineering for long-term growth. Our mission is to create accessible, scalable products that are as delightful as they are maintainable.</p>
          </article>
        </section>

        <section className="mt-10 md:grid md:grid-cols-2 md:items-center gap-6">
          <div>
            <h2 className="text-xl font-semibold">How we work</h2>
            <p className="mt-2 text-sm text-muted-foreground">We collaborate closely with stakeholders, plan with clarity, and iterate quickly. Our approach prioritizes accessibility, performance, and maintainability so your team can grow confidently.</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>• Discovery workshops and user research</li>
              <li>• Design systems and component libraries</li>
              <li>• Performance budgets and CI-based QA</li>
            </ul>
          </div>
          <figure className="overflow-hidden rounded-xl border">
            <img src="/images/about-workflow.jpg" alt="Design and engineering collaboration with components" className="h-64 w-full object-cover md:h-72" loading="lazy" />
          </figure>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Our Team</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-lg border p-4 text-center hover-scale">
                <img src={m.img} alt={`${m.name} profile photo`} className="mx-auto h-24 w-24 rounded-full object-cover" loading="lazy" />
                <h3 className="mt-3 font-medium">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
