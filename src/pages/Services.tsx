import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Website Design",
    desc: "Custom, responsive websites built for performance and conversion.",
    img: "/images/services-1.jpg",
    alt: "Responsive website mockups on devices",
  },
  {
    title: "UI/UX Design",
    desc: "User-centered interfaces with clean visuals and intuitive flows.",
    img: "/images/services-2.jpg",
    alt: "UI design process with sketches and wireframes",
  },
  {
    title: "Branding",
    desc: "Identity systems, logos, and guidelines that scale across touchpoints.",
    img: "/images/services-3.jpg",
    alt: "Brand identity elements like logo and typography",
  },
  {
    title: "SEO",
    desc: "Technical and on-page SEO to improve visibility and organic growth.",
    img: "/images/services-4.jpg",
    alt: "Analytics dashboard showing SEO growth",
  },
  {
    title: "E-commerce Development",
    desc: "High-converting storefronts with fast checkout and analytics.",
    img: "/images/services-5.jpg",
    alt: "E-commerce storefront grid and checkout UI",
  },
  {
    title: "Design Systems",
    desc: "Components and documentation to ship faster with consistency.",
    img: "/images/services-6.jpg",
    alt: "Design system components laid out on a board",
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
            <Card key={s.title} className="overflow-hidden hover-scale animate-fade-in">
              <img src={s.img} alt={s.alt} className="h-32 w-full object-cover" loading="lazy" />
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
