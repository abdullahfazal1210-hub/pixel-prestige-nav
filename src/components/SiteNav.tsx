import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, Cpu, Menu, Monitor, Phone, Laptop, Server, X } from "lucide-react";

const systems = [
  { label: "LAPTOP PC", desc: "Ultrabooks & mobile workstations", icon: Laptop },
  { label: "DESKTOP / GAMING PC", desc: "RTX rigs, liquid-cooled builds", icon: Monitor, hot: true },
  { label: "BUSINESS SERVER", desc: "Rack, tower & NAS solutions", icon: Server },
  { label: "PARTS AND ACCESSORIES", desc: "GPUs, RAM, cooling, peripherals", icon: Cpu },
];

const links = [
  "HOME",
  "REPAIR SERVICES AND NETWORKING",
  "PHONE SERVICES",
  "RESIDENTIAL VOIP",
  "COMMERCIAL VOIP",
  "CELLULAR SIGNAL BOOSTING",
  "VIDEO SURVEILLANCE",
  "CONTACT",
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = barRef.current?.querySelectorAll("[data-nav-item]");
    if (!items) return;
    gsap.fromTo(
      items,
      { y: -18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power3.out" },
    );
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const cards = panel.querySelectorAll("[data-drop-card]");
    if (open) {
      gsap.set(panel, { display: "block" });
      gsap
        .timeline()
        .fromTo(
          panel,
          { opacity: 0, y: -12, clipPath: "inset(0% 0% 100% 0%)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "power3.out" },
        )
        .fromTo(
          cards,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.06, ease: "power2.out" },
          "-=0.2",
        );
    } else {
      gsap.to(panel, {
        opacity: 0,
        y: -10,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5 text-[11px] tracking-widest text-muted-foreground">
          <span>FREE DIAGNOSTICS · SAME-DAY GAMING PC BUILDS</span>
          <span className="hidden items-center gap-2 sm:flex">
            <Phone className="size-3 text-primary" /> (555) 018-2200
          </span>
        </div>
      </div>

      <div
        ref={barRef}
        onMouseLeave={() => setOpen(false)}
        className="relative border-b border-border bg-background/95 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <a href="#" data-nav-item className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-md bg-[image:var(--gradient-primary)] font-display text-lg font-black text-primary-foreground shadow-[var(--shadow-glow)]">
              P
            </span>
            <span className="font-display text-base font-black tracking-widest sm:text-lg">
              PREMIUM <span className="text-primary">COMPUTER</span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-1 xl:flex">
            <NavLink label="HOME" active />
            <button
              data-nav-item
              onMouseEnter={() => setOpen(true)}
              onClick={() => setOpen((v) => !v)}
              className={`group flex items-center gap-1 rounded-md px-3 py-2 font-display text-[11px] font-bold tracking-widest transition-colors ${
                open ? "bg-primary/15 text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              COMPUTER SYSTEMS
              <ChevronDown
                className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
            {links.slice(1).map((l) => (
              <NavLink key={l} label={l} />
            ))}
          </nav>

          <button
            className="ml-auto rounded-md border border-border p-2 xl:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mega dropdown */}
        <div
          ref={panelRef}
          style={{ display: "none" }}
          className="absolute inset-x-0 top-full border-b border-primary/30 bg-[image:var(--gradient-dark)] shadow-[var(--shadow-elevate)]"
        >
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-6 md:grid-cols-4">
            {systems.map((s) => (
              <a
                key={s.label}
                href="#"
                data-drop-card
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="absolute inset-x-0 -bottom-px h-px bg-[image:var(--gradient-primary)] opacity-0 transition-opacity group-hover:opacity-100" />
                <s.icon className="mb-3 size-6 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
                <p className="font-display text-xs font-bold tracking-wider">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                {s.hot && (
                  <span className="mt-3 inline-block rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold tracking-widest text-primary">
                    MOST POPULAR
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="animate-fade-in border-b border-border bg-card px-5 py-4 xl:hidden">
          <p className="font-display text-[11px] font-bold tracking-widest text-primary">HOME</p>
          <p className="mt-4 font-display text-[11px] font-bold tracking-widest">
            COMPUTER SYSTEMS
          </p>
          <ul className="mt-2 space-y-2 border-l border-primary/40 pl-3">
            {systems.map((s) => (
              <li key={s.label} className="text-xs text-muted-foreground">
                {s.label}
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-3">
            {links.slice(1).map((l) => (
              <li key={l} className="font-display text-[11px] font-bold tracking-widest">
                {l}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({ label, active }: { label: string; active?: boolean }) {
  return (
    <a
      href="#"
      data-nav-item
      className={`relative rounded-md px-3 py-2 font-display text-[11px] font-bold tracking-widest transition-colors after:absolute after:bottom-1 after:left-3 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-1.5rem)] ${
        active ? "text-primary" : "text-foreground/80 hover:text-primary"
      }`}
    >
      {label}
    </a>
  );
}
