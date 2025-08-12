import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <>
      <SEO title="Creative Web Design Agency | Modern Websites" description="We craft fast, beautiful websites that convert. Browse services, work, and contact us." />
      <main className="container py-12">
        <header className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">We design and build modern websites</h1>
            <p className="mt-3 text-muted-foreground">Performance-first, SEO-friendly, and beautifully crafted.</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-prose">We partner with startups and enterprises to plan, design, and launch digital products that are fast, accessible, and easy to maintain. Our work blends strategy, design systems, and modern engineering to drive measurable outcomes.</p>
          </div>
          <figure className="relative overflow-hidden rounded-xl border">
            <img
              src="/images/hero-workspace.jpg"
              alt="Creative web design workspace with laptop and code"
              className="h-64 w-full object-cover md:h-80"
              loading="eager"
            />
          </figure>
        </header>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-2 text-sm text-muted-foreground">We design, build, and optimize digital experiences that help brands grow.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            <Card className="overflow-hidden hover-scale">
              <img src="/images/project-agency.jpg" alt="Website design examples for modern brands" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>Website Design</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Custom, responsive sites built on a modern stack for speed and accessibility.</CardContent>
            </Card>
            <Card className="overflow-hidden hover-scale">
              <img src="/images/project-saas.jpg" alt="UI and UX screens showcasing app interfaces" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>UI/UX Design</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Research-driven interfaces that are simple, beautiful, and easy to use.</CardContent>
            </Card>
            <Card className="overflow-hidden hover-scale">
              <img src="/images/project-b2b.jpg" alt="Brand identity mockups for a B2B company" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>Branding</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Identity systems, logos, and guidelines that scale across touchpoints.</CardContent>
            </Card>
            <Card className="overflow-hidden hover-scale">
              <img src="/images/project-fintech.jpg" alt="Analytics chart illustrating SEO performance" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>SEO & Performance</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Technical SEO and Core Web Vitals improvements that drive traffic.</CardContent>
            </Card>
            <Card className="overflow-hidden hover-scale">
              <img src="/images/project-ecommerce.jpg" alt="E-commerce storefront with product grid and checkout" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>E-commerce Development</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">High-converting storefronts with optimized checkout and analytics.</CardContent>
            </Card>
            <Card className="overflow-hidden hover-scale">
              <img src="/images/project-education.jpg" alt="Design system components and guidelines" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>Design Systems</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Reusable components and documentation to scale design consistently.</CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Our process</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden">
              <img src="/images/project-agency.jpg" alt="Discover phase research and audit" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>1 — Discover</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Goals, audience, and audit to align the team on outcomes.</CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src="/images/project-b2b.jpg" alt="Define phase roadmap and requirements" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>2 — Define</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Scope, roadmap, and measurable KPIs for clarity and focus.</CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src="/images/project-saas.jpg" alt="Design phase UI screens and components" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>3 — Design</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Wireframes to polished UI in a reusable design system.</CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src="/images/project-fintech.jpg" alt="Develop phase code and performance tools" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>4 — Develop</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Fast, accessible, and scalable implementation.</CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src="/images/project-ecommerce.jpg" alt="Launch phase with QA and checklists" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>5 — Launch</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">QA, performance tuning, and go-live support.</CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src="/images/project-education.jpg" alt="Optimize phase analytics and experiments" className="h-32 w-full object-cover" loading="lazy" />
              <CardHeader className="pb-2"><CardTitle>6 — Optimize</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Measure, iterate, and improve based on real user data.</CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">What clients say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <img src="/images/team-riley.jpg" alt="Portrait of Jamie Lee, Marketing Director" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">Jamie Lee</p>
                    <p className="text-xs text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">"The new site increased conversions by 40% within the first month. The process was smooth and collaborative."</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <img src="/images/team-jordan.jpg" alt="Portrait of Morgan Cruz, Founder" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">Morgan Cruz</p>
                    <p className="text-xs text-muted-foreground">Founder</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">"Beautiful design, rock-solid performance, and great communication from start to finish."</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <img src="/images/team-casey.jpg" alt="Portrait of Priya Shah, Product Lead" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">Priya Shah</p>
                    <p className="text-xs text-muted-foreground">Product Lead</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">"They shipped fast and nailed the details. Our team loved working together and the handoff was excellent."</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <img src="/images/team-sam.jpg" alt="Portrait of Daniel Kim, COO" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">Daniel Kim</p>
                    <p className="text-xs text-muted-foreground">COO</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">"Performance improved dramatically and our SEO rankings followed. Highly recommend."</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <img src="/images/team-riley.jpg" alt="Portrait of Sofia Alvarez, VP Growth" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">Sofia Alvarez</p>
                    <p className="text-xs text-muted-foreground">VP Growth</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">"A seamless partnership—clear roadmap, strong design system, and measurable results."</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <img src="/images/team-jordan.jpg" alt="Portrait of Ahmed Saleh, Head of Digital" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">Ahmed Saleh</p>
                    <p className="text-xs text-muted-foreground">Head of Digital</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">"The handoff to our internal team was smooth. Documentation and components were top-notch."</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="cta" className="mt-16 rounded-xl border p-8 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 id="cta" className="text-2xl font-semibold tracking-tight">Ready to start?</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tell us about your goals and we’ll propose a clear plan and timeline.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Link to="/services"><Button>See services</Button></Link>
              <Link to="/contact"><Button variant="gradient">Get a quote</Button></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
