import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SiteNav } from "@/components/SiteNav";
import gamingPc from "@/assets/gaming-pc.jpg";
import { Cpu, Gauge, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexaTech | Premium Gaming PCs, Computer Systems & VoIP" },
      {
        name: "description",
        content:
          "Custom gaming PCs, laptops, business servers, repair, networking, VoIP, cellular boosting and video surveillance from NexaTech.",
      },
      { property: "og:title", content: "NexaTech | Premium Gaming PCs & Computer Systems" },
      {
        property: "og:description",
        content:
          "Custom-built gaming rigs, laptops, servers, repair and networking, VoIP and surveillance services.",
      },
    ],
  }),
  component: Index,
});

const specs = [
  { icon: Zap, k: "RTX 5090", v: "24GB GDDR7" },
  { icon: Cpu, k: "i9-14900KS", v: "6.2 GHz Boost" },
  { icon: Gauge, k: "360mm AIO", v: "Liquid Cooled" },
  { icon: ShieldCheck, k: "3-Year", v: "On-Site Warranty" },
];

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-line]", { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 })
        .from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.35")
        .from(
          "[data-hero-img]",
          { scale: 0.9, opacity: 0, rotate: -3, duration: 1.1, ease: "power4.out" },
          "-=0.9",
        )
        .from("[data-spec]", { y: 24, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.5");

      gsap.to("[data-glow]", {
        scale: 1.18,
        opacity: 0.75,
        duration: 2.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to("[data-hero-img]", {
        y: -14,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main ref={heroRef}>
        <section className="relative overflow-hidden">
          <div
            data-glow
            className="pointer-events-none absolute -right-20 top-10 size-[520px] rounded-full bg-primary/25 blur-[130px]"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <span
                data-hero-line
                className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-display text-[10px] font-bold tracking-[0.2em] text-primary"
              >
                CUSTOM GAMING BUILDS
              </span>
              <h1
                data-hero-line
                className="mt-5 text-4xl font-black leading-[1.05] sm:text-6xl"
              >
                BUILT TO <span className="text-gradient-primary">DOMINATE</span> EVERY FRAME
              </h1>
              <p data-hero-line className="mt-5 max-w-lg text-muted-foreground">
                Hand-assembled gaming rigs, business systems and network services — engineered,
                stress-tested and supported in house.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  data-hero-cta
                  href="#"
                  className="rounded-md bg-[image:var(--gradient-primary)] px-6 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  BUILD YOUR PC
                </a>
                <a
                  data-hero-cta
                  href="#"
                  className="rounded-md border border-border px-6 py-3 font-display text-xs font-bold tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  BOOK A REPAIR
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-6 rounded-[2rem] bg-primary/20 blur-3xl" />
              <img
                data-hero-img
                src={gamingPc}
                alt="Custom gaming PC with orange lighting and glass side panel"
                width={1200}
                height={1200}
                className="relative mx-auto w-full max-w-md rounded-2xl border border-border object-cover shadow-[var(--shadow-elevate)]"
              />
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-3 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((s) => (
              <div
                key={s.k}
                data-spec
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <s.icon className="size-5 text-primary" />
                <p className="mt-3 font-display text-sm font-bold tracking-wider">{s.k}</p>
                <p className="text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
