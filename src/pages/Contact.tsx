import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Map from "@/components/Map";
const Contact: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [mapToken, setMapToken] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message) {
      toast({ title: "Missing details", description: "Please complete all fields with a valid email." });
      return;
    }
    toast({ title: "Message sent", description: "We’ll get back to you within 1 business day." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <SEO title="Contact | Creative Web Design Agency" description="Get in touch for quotes, collaborations, or general inquiries." />
      <main className="container py-16">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact</h1>
          <p className="mt-3 text-muted-foreground">Let’s talk about your project. We’ll reply quickly.</p>
        </header>

        <section className="mt-10 grid gap-10 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="name">Name</label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="email">Email</label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="message">Message</label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project" rows={6} />
            </div>
            <Button type="submit" variant="gradient">Send message</Button>
          </form>

          <div className="space-y-6">
            <figure className="overflow-hidden rounded-md border">
              <img
                src="/images/contact-side.jpg"
                alt="Creative studio workspace with contact details"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div>
              <h2 className="text-xl font-semibold">Contact Info</h2>
              <p className="mt-2 text-sm text-muted-foreground">Email: hello@example.com<br />Phone: (000) 000-0000<br />Social: @agency</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Interactive Map</h2>
              <p className="mt-2 text-sm text-muted-foreground">Enter your Mapbox public token to load the map, then click anywhere to drop a pin for easy location sharing.</p>
              <div className="mt-3 flex gap-2">
                <Input
                  value={mapToken}
                  onChange={(e) => setMapToken(e.target.value)}
                  placeholder="Mapbox public token"
                  aria-label="Mapbox token"
                />
              </div>
              <div className="mt-3 overflow-hidden rounded-md border">
                {mapToken ? (
                  <Map token={mapToken} />
                ) : (
                  <div className="p-4 text-sm text-muted-foreground">
                    Add your Mapbox public token to load the interactive map. Tip: store it in Supabase Edge Function Secrets and proxy it if needed.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
