import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Website Design",
    desc: "Custom, responsive websites built for performance and conversion.",
  },
  {
    title: "UI/UX Design",
    desc: "User-centered interfaces with clean visuals and intuitive flows.",
  },
  {
    title: "Branding",
    desc: "Identity systems, logos, and guidelines that scale across touchpoints.",
  },
  {
    title: "SEO",
    desc: "Technical and on-page SEO to improve visibility and organic growth.",
  },
  {
    title: "E-commerce Development",
    desc: "High-converting storefronts with fast checkout and analytics.",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <SEO title="Services | Creative Web Design Agency" description="Website Design, UI/UX, Branding, SEO, and E-commerce Development." />
      <main className="container py-16">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Services</h1>
          <p className="mt-3 text-muted-foreground">We plan, design, and build digital experiences that help brands grow.</p>
        </header>
        <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="hover-scale">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
};

export default Services;
