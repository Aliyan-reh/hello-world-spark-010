import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Footer: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address." });
      return;
    }
    toast({ title: "Subscribed", description: "Thanks for subscribing to our newsletter!" });
    setEmail("");
  };

  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-base font-semibold">Agency</h4>
            <p className="text-sm text-muted-foreground">We craft fast, accessible, and SEO-friendly websites that help brands grow. Our team blends strategy, design, and engineering to deliver outcomes—not just deliverables.</p>
            <p className="text-sm text-muted-foreground">From discovery to launch and beyond, we focus on performance, maintainability, and a collaborative process that keeps stakeholders aligned.</p>
          </div>

          <div className="md:col-span-2">
            <h5 className="mb-3 text-sm font-semibold">Services</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="story-link">Website Design</Link></li>
              <li><Link to="/services" className="story-link">UI/UX Design</Link></li>
              <li><Link to="/services" className="story-link">Branding</Link></li>
              <li><Link to="/services" className="story-link">SEO & Performance</Link></li>
              <li><Link to="/services" className="story-link">E-commerce</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="mb-3 text-sm font-semibold">Company</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="story-link">About</Link></li>
              <li><Link to="/portfolio" className="story-link">Portfolio</Link></li>
              <li><Link to="/contact" className="story-link">Contact</Link></li>
              <li><Link to="/" className="story-link">Privacy</Link></li>
              <li><Link to="/" className="story-link">Terms</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="mb-3 text-sm font-semibold">Newsletter</h5>
            <p className="mb-4 text-sm text-muted-foreground">Monthly insights on design, UX, and performance. No spam—ever.</p>
            <form onSubmit={onSubscribe} className="flex w-full max-w-sm items-center gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email address"
              />
              <Button type="submit" variant="gradient">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Agency. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/" className="story-link">Privacy</Link>
              <Link to="/" className="story-link">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
