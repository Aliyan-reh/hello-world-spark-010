import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Map from "@/components/Map";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [mapToken, setMapToken] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message) {
      toast({ 
        title: "Missing details", 
        description: "Please complete all fields with a valid email.",
        variant: "destructive"
      });
      return;
    }
    toast({ 
      title: "Message sent successfully!", 
      description: "We'll get back to you within 1 business day." 
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <SEO title="Contact | Creative Web Design Agency" description="Get in touch for quotes, collaborations, or general inquiries." />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container relative">
          <header className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Contact
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Let's talk about your project and bring your vision to life. We're here to answer your questions, provide detailed quotes, and discuss how we can help you achieve your digital goals. Our team responds quickly and we're committed to starting meaningful conversations that lead to exceptional results.
            </p>
          </header>
        </div>
      </section>

      <main className="container pb-16 -mt-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-semibold">Send us a message</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="name">
                      Full Name *
                    </label>
                    <Input 
                      id="name" 
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })} 
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="email">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={form.email} 
                      onChange={(e) => setForm({ ...form, email: e.target.value })} 
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="message">
                    Project Details *
                  </label>
                  <Textarea 
                    id="message" 
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-12 text-base font-medium">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Hero Image */}
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/contact-side.jpg"
                  alt="Modern creative studio workspace showcasing our collaborative environment"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Our Creative Space</h3>
                  <p className="text-sm opacity-90">Where ideas come to life</p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(000) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Global Remote Team</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Interactive Map
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Add your Mapbox token to explore our interactive map. Click anywhere to drop a pin!
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="mapbox-token">
                    Mapbox Public Token
                  </label>
                  <Input
                    id="mapbox-token"
                    value={mapToken}
                    onChange={(e) => setMapToken(e.target.value)}
                    placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJ..."
                    className="font-mono text-xs"
                  />
                  <p className="text-xs text-muted-foreground">
                    Get your token from{" "}
                    <a 
                      href="https://mapbox.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      mapbox.com
                    </a>
                  </p>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  {mapToken ? (
                    <Map token={mapToken} />
                  ) : (
                    <div className="h-72 flex items-center justify-center bg-muted/30 text-center p-8">
                      <div>
                        <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Add your Mapbox token above to load the interactive map
                        </p>
                        <p className="text-xs text-muted-foreground">
                          For production use, store the token in Supabase Edge Function Secrets
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;