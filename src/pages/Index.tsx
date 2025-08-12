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
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Website Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Custom, responsive sites built on a modern stack for speed and accessibility.</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>UI/UX</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Research-driven interfaces that are simple, beautiful, and easy to use.</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>SEO & Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Technical SEO, site audits, and optimizations that improve Core Web Vitals.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Our process</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2"><CardTitle>1 — Discover</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Goals, audience, and audit to align on outcomes.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle>2 — Design</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Wireframes to polished UI in a reusable design system.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle>3 — Develop</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Fast, accessible, and scalable implementation.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle>4 — Launch</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">QA, performance tuning, and go-live support.</CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">What clients say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="hover-scale">
              <CardContent className="pt-6 text-sm text-muted-foreground">“The new site increased conversions by 40% within the first month.” — Taylor, CMO</CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6 text-sm text-muted-foreground">“Beautiful design, rock-solid performance, and great communication.” — Alex, Founder</CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6 text-sm text-muted-foreground">“They shipped fast and nailed the details. Our team loved working together.” — Priya, Product Lead</CardContent>
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
