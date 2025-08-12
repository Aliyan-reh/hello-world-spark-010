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

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article>
            <h2 className="text-xl font-semibold">Our Story</h2>
            <p className="mt-2 text-sm text-muted-foreground">Founded to bridge strategy and craft, we partner with ambitious brands to deliver measurable outcomes.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Mission & Vision</h2>
            <p className="mt-2 text-sm text-muted-foreground">Design systems, thoughtful UX, and performance-first engineering for long-term growth.</p>
          </article>
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
