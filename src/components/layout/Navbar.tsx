import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          <span className="sr-only">Agency</span>
          <span>Agency</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`story-link text-sm ${location.pathname === item.href ? "text-foreground" : "text-muted-foreground"}`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="gradient" size="sm">
            <Link to="/contact" aria-label="Start a project">Start a project</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.href} className="text-base" aria-label={item.name}>
                    {item.name}
                  </Link>
                ))}
                <Button asChild variant="gradient" className="mt-2">
                  <Link to="/contact">Start a project</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
