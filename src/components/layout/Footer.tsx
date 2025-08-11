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
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <h4 className="text-base font-semibold">Agency</h4>
          <p className="text-sm text-muted-foreground">Designing and building high-quality websites.</p>
        </div>
        <div>
          <h5 className="mb-3 text-sm font-semibold">Quick Links</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="mb-3 text-sm font-semibold">Newsletter</h5>
          <p className="mb-4 text-sm text-muted-foreground">Get our latest insights and tips in your inbox.</p>
          <form onSubmit={onSubscribe} className="flex w-full max-w-md items-center gap-2">
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
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Agency. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/">Privacy</Link>
            <span>•</span>
            <Link to="/">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
