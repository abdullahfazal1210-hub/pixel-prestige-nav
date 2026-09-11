import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Cpu,
  Laptop,
  Menu,
  Monitor,
  Network,
  PhoneCall,
  Server,
  ShieldCheck,
  Signal,
  Wrench,
  X,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
const menus = [
  {
    key: "systems",
    label: "Systems",
    items: [
      {
        label: "Gaming & desktop PCs",
        desc: "Built around the way you play",
        icon: Monitor,
        href: "#gaming",
      },
      { label: "Laptops", desc: "Performance wherever you work", icon: Laptop, href: "#laptops" },
      {
        label: "Business systems",
        desc: "Workstations, servers & storage",
        icon: Server,
        href: "#business",
      },
      {
        label: "Parts & upgrades",
        desc: "Give your setup its next upgrade",
        icon: Cpu,
        href: "#upgrades",
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    items: [
      {
        label: "Computer repair",
        desc: "Diagnostics, repairs & maintenance",
        icon: Wrench,
        href: "#repair",
      },
      {
        label: "Networking",
        desc: "Reliable Wi-Fi & wired connections",
        icon: Network,
        href: "#networking",
      },
      { label: "Phone & VoIP", desc: "Home and business calling", icon: PhoneCall, href: "#voip" },
      {
        label: "Signal boosting",
        desc: "Improve indoor cellular coverage",
        icon: Signal,
        href: "#signal",
      },
      {
        label: "Surveillance",
        desc: "Camera systems & remote access",
        icon: ShieldCheck,
        href: "#surveillance",
      },
    ],
  },
];
export function SiteNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(null);
        setMobile(false);
      }
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  function close() {
    setOpen(null);
    setMobile(false);
  }
  return (
    <header
      ref={headerRef}
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          if (open) triggerRefs.current[open]?.focus();
          else if (mobile) mobileRef.current?.focus();
          close();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <div className="announcement">
        <div className="page-container">
          <span>
            <span className="status-dot" /> YOUR NEXT UPGRADE STARTS HERE
          </span>
          <span className="announcement-extra">Custom builds. Real people. Local support.</span>
        </div>
      </div>
      <div className="page-container nav-row">
        <BrandLogo />
        <nav aria-label="Main navigation" className="desktop-nav">
          <a className="nav-link nav-home" href="#home" onClick={close}>
            Home
          </a>
          {menus.map((menu) => (
            <div className="nav-dropdown" key={menu.key}>
              <button
                ref={(node) => {
                  triggerRefs.current[menu.key] = node;
                }}
                className={`nav-link ${open === menu.key ? "is-open" : ""}`}
                aria-expanded={open === menu.key}
                aria-controls={`nav-${menu.key}`}
                onClick={() => setOpen(open === menu.key ? null : menu.key)}
              >
                {menu.label}
                <ChevronDown size={14} />
              </button>
              {open === menu.key && (
                <div id={`nav-${menu.key}`} className="dropdown-panel">
                  <p className="eyebrow">EXPLORE {menu.label.toUpperCase()}</p>
                  {menu.items.map((item) => (
                    <a href={item.href} key={item.label} onClick={close}>
                      <item.icon size={21} />
                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.desc}</small>
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a className="nav-link" href="#about" onClick={close}>
            About us
          </a>
        </nav>
        <a className="button button-primary nav-quote" href="#contact" onClick={close}>
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          ref={mobileRef}
          className="mobile-toggle"
          onClick={() => {
            setMobile(!mobile);
            setOpen(null);
          }}
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
      {mobile && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          <a href="#home" onClick={close}>
            Home
          </a>
          {menus.map((menu) => (
            <details key={menu.key}>
              <summary>
                {menu.label}
                <ChevronDown size={16} />
              </summary>
              <div>
                {menu.items.map((item) => (
                  <a key={item.label} href={item.href} onClick={close}>
                    <item.icon size={17} />
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          ))}
          <a href="#about" onClick={close}>
            About us
          </a>
          <a href="#contact" onClick={close}>
            Get a quote <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
