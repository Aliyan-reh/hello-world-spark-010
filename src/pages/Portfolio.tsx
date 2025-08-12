import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  { title: "SaaS Dashboard", desc: "Product marketing site and app UI.", img: "/images/project-saas.jpg" },
  { title: "E-commerce Brand", desc: "Shop with custom checkout.", img: "/images/project-ecommerce.jpg" },
  { title: "Fintech Landing", desc: "High-converting launch page.", img: "/images/project-fintech.jpg" },
  { title: "Agency Redesign", desc: "Full brand and web overhaul.", img: "/images/project-agency.jpg" },
  { title: "Education Platform", desc: "Course library and onboarding.", img: "/images/project-education.jpg" },
  { title: "B2B Lead Gen", desc: "CMS-driven blog and resources.", img: "/images/project-b2b.jpg" },
  { title: "Healthcare Portal", desc: "HIPAA-ready patient experience.", img: "/images/project-saas.jpg" },
  { title: "Travel Booking", desc: "Search, filter, and smooth checkout.", img: "/images/project-ecommerce.jpg" },
  { title: "Real Estate Showcase", desc: "Listings with advanced search.", img: "/images/project-agency.jpg" },
  { title: "Nonprofit Campaign", desc: "Donation flows and impact pages.", img: "/images/project-education.jpg" },
  { title: "Mobile App Microsite", desc: "Launch site with product tour.", img: "/images/project-fintech.jpg" },
  { title: "Analytics Dashboard", desc: "Data visualizations and insights.", img: "/images/project-b2b.jpg" },
];

const Portfolio: React.FC = () => {
  return (
    <>
      <SEO title="Portfolio | Creative Web Design Agency" description="A selection of our recent websites and digital experiences." />
      <main className="container py-16">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Portfolio</h1>
          <p className="mt-3 text-muted-foreground">Case studies and recent work demonstrating our approach and results.</p>
        </header>
        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="overflow-hidden hover-scale">
              <img src={p.img} alt={`${p.title} project preview`} className="h-44 w-full object-cover" loading="lazy" />
              <CardContent className="pt-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
};

export default Portfolio;
