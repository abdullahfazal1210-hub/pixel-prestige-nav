import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MapPin, Phone, Mail, Clock, Cpu, Wrench, Wifi, Shield, Video } from "lucide-react";

const footerLinks = {
  systems: [
    { label: "Laptop PC", href: "#" },
    { label: "Desktop / Gaming PC", href: "#" },
    { label: "Business Server", href: "#" },
    { label: "Parts & Accessories", href: "#" },
  ],
  services: [
    { label: "Repair & Networking", icon: Wrench },
    { label: "Residential VoIP", icon: Phone },
    { label: "Commercial VoIP", icon: Wifi },
    { label: "Cellular Signal Boosting", icon: Shield },
    { label: "Video Surveillance", icon: Video },
  ],
  company: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Support Center", href: "#" },
    { label: "Warranty Info", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X / Twitter", href: "#" },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-footer-col]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      });
      gsap.from("[data-footer-bottom]", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out",
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-border bg-[image:var(--gradient-dark)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-primary)]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-[320px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div data-footer-col>
            <a href="#" className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-md bg-[image:var(--gradient-primary)] font-display text-lg font-black text-primary-foreground shadow-[var(--shadow-glow)]">
                P
              </span>
              <span className="font-display text-base font-black tracking-widest">
                PREMIUM <span className="text-primary">COMPUTER</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hand-built gaming PCs, business systems, repairs, networking and VoIP — all under one roof with in-house support.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Computer systems */}
          <div data-footer-col>
            <h3 className="flex items-center gap-2 font-display text-xs font-bold tracking-widest text-primary">
              <Cpu className="size-4" /> COMPUTER SYSTEMS
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.systems.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-footer-col>
            <h3 className="font-display text-xs font-bold tracking-widest text-primary">
              SERVICES
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <l.icon className="size-4 text-primary" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-footer-col>
            <h3 className="font-display text-xs font-bold tracking-widest text-primary">
              CONTACT
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                120 Tech Boulevard, Karachi, Pakistan
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="size-4 shrink-0 text-primary" />
                (555) 018-2200
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-primary" />
                support@premiumcomputersystem.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="size-4 shrink-0 text-primary" />
                Mon - Sat: 10:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          data-footer-bottom
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
        >
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Premium Computer System. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Warranty
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
