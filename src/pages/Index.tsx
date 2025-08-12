import React from "react";
import SEO from "@/components/SEO";

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
      </main>
    </>
  );
};

export default Index;
