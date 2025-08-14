import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  { title: "SaaS Dashboard", desc: "Product marketing site and app UI.", img: "/images/portfolio-saas.jpg" },
  { title: "E-commerce Brand", desc: "Shop with custom checkout.", img: "/images/portfolio-ecommerce.jpg" },
  { title: "Fintech Landing", desc: "High-converting launch page.", img: "/images/portfolio-fintech.jpg" },
  { title: "Agency Redesign", desc: "Full brand and web overhaul.", img: "/images/portfolio-agency.jpg" },
  { title: "Education Platform", desc: "Course library and onboarding.", img: "/images/portfolio-education.jpg" },
  { title: "B2B Lead Gen", desc: "CMS-driven blog and resources.", img: "/images/portfolio-b2b.jpg" },
  { title: "Healthcare Portal", desc: "HIPAA-ready patient experience.", img: "/images/portfolio-healthcare.jpg" },
  { title: "Travel Booking", desc: "Search, filter, and smooth checkout.", img: "/images/portfolio-travel.jpg" },
  { title: "Real Estate Showcase", desc: "Listings with advanced search.", img: "/images/portfolio-realestate.jpg" },
  { title: "Nonprofit Campaign", desc: "Donation flows and impact pages.", img: "/images/portfolio-nonprofit.jpg" },
  { title: "Mobile App Microsite", desc: "Launch site with product tour.", img: "/images/portfolio-mobile.jpg" },
  { title: "Analytics Dashboard", desc: "Data visualizations and insights.", img: "/images/portfolio-analytics.jpg" },
];

const Portfolio: React.FC = () => {
  return (
    <>
      <SEO title="Portfolio | Creative Web Design Agency" description="A selection of our recent websites and digital experiences." />
      <main className="container py-16">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Portfolio</h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Case studies and recent work demonstrating our approach and results across diverse industries and project types.
              Each project showcases our commitment to delivering measurable outcomes through strategic design and thoughtful user experience.
              From SaaS platforms to e-commerce sites, we craft digital solutions that drive engagement and convert visitors into customers.
            </p>
            <p>
              Our portfolio reflects years of collaboration with ambitious brands who trust us to bring their vision to life.
              We combine cutting-edge technology with timeless design principles to create websites that not only look stunning but perform exceptionally.
              Every project tells a story of innovation, creativity, and the relentless pursuit of digital excellence.
            </p>
          </div>
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
