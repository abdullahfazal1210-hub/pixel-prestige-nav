import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Gamepad2,
  Headphones,
  Laptop,
  Monitor,
  Network,
  PhoneCall,
  Server,
  ShieldCheck,
  Signal,
  SlidersHorizontal,
  Video,
  Wrench,
  Zap,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import gamingPc from "@/assets/gaming-pc.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Computer Systems | Custom PCs & Technology Services" },
      {
        name: "description",
        content:
          "Explore custom gaming PCs, laptops, business systems, repairs, networking, VoIP and surveillance with Premium Computer Systems.",
      },
    ],
  }),
  component: Index,
});
const systems = [
  {
    id: "gaming",
    number: "01",
    icon: Gamepad2,
    title: "Gaming & desktop PCs",
    desc: "From your first setup to a statement build. A PC tailored to your games, creative work, and everyday life.",
    features: [
      "Custom component selection",
      "Air & liquid cooling options",
      "Assembly & stability testing",
    ],
    tag: "BUILT FOR YOUR NEXT LEVEL",
  },
  {
    id: "laptops",
    number: "02",
    icon: Laptop,
    title: "Laptops that keep up",
    desc: "Find the right balance of power, portability, and battery life for studying, working, or creating on the move.",
    features: [
      "Everyday & professional options",
      "Memory & storage guidance",
      "Setup & data transfer support",
    ],
    tag: "TAKE YOUR WORK ANYWHERE",
  },
  {
    id: "business",
    number: "03",
    icon: Server,
    title: "Business-ready systems",
    desc: "Equip your team with practical workstations, servers, and storage built around the way your business operates.",
    features: [
      "Office & creative workstations",
      "Server & NAS configuration",
      "Deployment & ongoing support",
    ],
    tag: "POWER YOUR PRODUCTIVITY",
  },
  {
    id: "upgrades",
    number: "04",
    icon: Cpu,
    title: "Parts & smart upgrades",
    desc: "Make more of the system you already own with compatible components and a clear, practical upgrade path.",
    features: [
      "Graphics, memory & SSDs",
      "Cooling & power supplies",
      "Peripherals & compatibility checks",
    ],
    tag: "MORE FROM YOUR MACHINE",
  },
];
const services = [
  {
    id: "repair",
    icon: Wrench,
    title: "Repair & diagnostics",
    desc: "Slow startup, overheating, or a PC that won’t turn on? Find the cause and understand your repair options.",
    detail: "Hardware troubleshooting · Software setup · Maintenance",
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking & Wi-Fi",
    desc: "Connect every corner of your home or office with a network planned around your space and devices.",
    detail: "Wi-Fi planning · Structured cabling · Network setup",
  },
  {
    id: "voip",
    icon: PhoneCall,
    title: "Phone & VoIP",
    desc: "Bring home and business calling together with flexible phone systems and straightforward setup.",
    detail: "Residential calling · Business extensions · Configuration",
  },
  {
    id: "signal",
    icon: Signal,
    title: "Cellular signal boosting",
    desc: "Explore ways to improve indoor reception with a coverage assessment and suitable equipment.",
    detail: "Site assessment · Equipment selection · Installation",
  },
  {
    id: "surveillance",
    icon: Video,
    title: "Video surveillance",
    desc: "Keep an eye on what matters with camera placement, recording, and remote viewing configured for you.",
    detail: "Camera installation · NVR setup · Remote monitoring",
  },
];
const faqs = [
  {
    q: "Can you build a PC around my budget?",
    a: "Yes. Start with your budget, the games or applications you use, and any preferences for size or appearance. We can then discuss compatible components and the trade-offs before you decide on a build.",
  },
  {
    q: "Can I upgrade my existing computer?",
    a: "Share your computer model or current specifications and what you want to improve. We’ll review compatibility and help you decide whether a targeted upgrade or a new system makes more sense.",
  },
  {
    q: "What should I bring in for a repair?",
    a: "Bring the device, its power adapter where applicable, and a description of the issue. Back up important files if possible. For desktop repairs, ask which peripherals are needed before bringing your setup.",
  },
  {
    q: "Do you support homes and businesses?",
    a: "Our services cover personal setups and business environments, including computers, networking, phone systems, and surveillance. Tell us about your location and requirements so installation and support options can be discussed.",
  },
  {
    q: "How long will a build or repair take?",
    a: "Timing depends on component availability, the diagnosis, and the scope of the work. Request an estimate for your particular job; the expected turnaround and any warranty terms should be confirmed with your quote.",
  },
];
function Index() {
  const [inquiry, setInquiry] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setInquiry(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterested in: ${data.get("service")}\n\n${data.get("message")}`,
    );
    setCopied(false);
  }
  return (
    <div id="home" className="min-h-screen bg-background">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <section className="hero-section">
          <div className="hero-grid page-container">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="small-rule" /> BUILT WITH PURPOSE. POWERED BY YOU.
              </p>
              <h1>
                Your ambition.
                <br />
                Our expertise.
                <br />
                <span className="text-gradient-primary">Zero limits.</span>
              </h1>
              <p className="hero-description">
                From your dream gaming rig to a better-connected business. Custom computers, expert
                repairs, and complete technology solutions — all under one roof.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#systems">
                  Find your perfect PC <ArrowUpRight size={18} />
                </a>
                <a className="button button-secondary" href="#services">
                  Explore services <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-reassurance">
                <span>
                  <CheckCircle2 size={15} /> Built around your needs
                </span>
                <span>
                  <CheckCircle2 size={15} /> Support from real people
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orbit" />
              <div className="visual-topline">
                <span>
                  <span className="status-dot" /> THE CUSTOM BUILD COLLECTION
                </span>
                <span>PCS / 01</span>
              </div>
              <img
                src={gamingPc}
                alt="Custom black gaming PC with orange illuminated cooling fans and a glass side panel"
                width={1200}
                height={1200}
                fetchPriority="high"
              />
              <div className="visual-caption">
                <span className="visual-icon">
                  <Zap size={21} />
                </span>
                <div>
                  <strong>Serious power. Personal by design.</strong>
                  <span>Hand-assembled. Carefully configured.</span>
                </div>
                <ArrowUpRight size={22} />
              </div>
              <span className="vertical-label">ENGINEERED FOR YOUR EVERYDAY</span>
            </div>
          </div>
          <div className="hero-bottom page-container">
            <span>GOOD TECHNOLOGY. GREAT POSSIBILITIES.</span>
            <a href="#systems">
              Discover the difference <ArrowDown size={14} />
            </a>
          </div>
        </section>
        <div className="benefit-strip">
          <div className="page-container benefit-grid">
            {[
              {
                icon: SlidersHorizontal,
                title: "Made for you",
                desc: "Your needs. Your budget. Your build.",
              },
              {
                icon: ShieldCheck,
                title: "Every detail checked",
                desc: "Careful assembly & system testing.",
              },
              {
                icon: Headphones,
                title: "People-first support",
                desc: "Practical advice, without the jargon.",
              },
              {
                icon: Monitor,
                title: "One technology partner",
                desc: "For home, work, and everything between.",
              },
            ].map((item) => (
              <div key={item.title}>
                <item.icon size={24} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.desc}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
        <section id="systems" className="page-container section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR FIT</p>
              <h2>
                A system for
                <br />
                every kind of <span>ambition.</span>
              </h2>
            </div>
            <p>
              Play harder. Work smarter. Create more.
              <br />
              Let’s find the technology that takes you there.
            </p>
          </div>
          <div className="systems-grid">
            {systems.map((item) => (
              <article id={item.id} className="system-card" key={item.id}>
                <div className="card-top">
                  <span className="category-icon">
                    <item.icon size={29} strokeWidth={1.5} />
                  </span>
                  <span className="card-number">{item.number}</span>
                </div>
                <p className="micro-label">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className="card-link" href="#contact">
                  Let’s talk {item.id === "upgrades" ? "upgrades" : "options"}
                  <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="services" className="services-section section-space">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">MORE THAN COMPUTERS</p>
                <h2>
                  We make technology
                  <br />
                  <span>work for you.</span>
                </h2>
              </div>
              <p>
                From a quick fix to a fully connected workspace,
                <br />
                get the help you need from one team.
              </p>
            </div>
            <div className="services-grid">
              {services.map((item) => (
                <article id={item.id} key={item.id} className="service-card">
                  <item.icon className="service-icon" size={27} strokeWidth={1.5} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <small>{item.detail}</small>
                  <a href="#contact" aria-label={`Ask about ${item.title}`}>
                    <ArrowUpRight size={20} />
                  </a>
                </article>
              ))}
              <div className="service-cta">
                <span className="eyebrow">LET’S FIGURE IT OUT</span>
                <h3>
                  Not sure where
                  <br />
                  to start?
                </h3>
                <p>
                  Tell us what you’re trying to do.
                  <br />
                  We’ll help with the next step.
                </p>
                <a className="text-link" href="#contact">
                  Talk to our team <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="page-container section-space about-grid">
          <div className="about-panel">
            <div className="about-grid-pattern" />
            <span className="eyebrow">THE PREMIUM APPROACH</span>
            <div className="about-monogram">
              <Cpu size={68} strokeWidth={1} />
            </div>
            <h3>
              Good hardware.
              <br />
              <span>Even better humans.</span>
            </h3>
            <p>
              Technology is personal.
              <br />
              Your support should be, too.
            </p>
            <div className="about-tags">
              <span>Thoughtfully built</span>
              <span>Locally supported</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">YOUR IDEAS. OUR KNOW-HOW.</p>
            <h2>
              A little less complexity.
              <br />
              <span>A lot more possibility.</span>
            </h2>
            <p>
              Choosing the right technology shouldn’t feel overwhelming. We bring systems, service,
              and support together so you can focus on what you actually want to do.
            </p>
            {[
              {
                title: "Advice that starts with listening",
                desc: "We start with your goals, budget, and everyday needs to help you choose confidently.",
              },
              {
                title: "Care in every connection",
                desc: "From component compatibility to tidy installation, the small details make a big difference.",
              },
              {
                title: "A partner beyond the purchase",
                desc: "Get help with setup, troubleshooting, and planning your next upgrade as your needs grow.",
              },
            ].map((item, i) => (
              <div className="approach-item" key={item.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="process-section">
          <div className="page-container section-space">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SIMPLE FROM THE START</p>
                <h2>
                  From “what if” to <span>all set.</span>
                </h2>
              </div>
            </div>
            <div className="process-grid">
              {[
                {
                  title: "Tell us what you need",
                  desc: "Share your idea, your current setup, and the budget you have in mind.",
                },
                {
                  title: "Make a plan together",
                  desc: "Review the recommended options, scope, and quote before moving forward.",
                },
                {
                  title: "We handle the details",
                  desc: "Your system is assembled, repaired, or installed and checked for your use.",
                },
                {
                  title: "You’re ready for more",
                  desc: "Get a walkthrough of your setup and discuss the support available to you.",
                },
              ].map((item, i) => (
                <div key={item.title}>
                  <span className="step-number">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="page-container section-space faq-grid">
          <div>
            <p className="eyebrow">A FEW THINGS TO KNOW</p>
            <h2>
              Good questions.
              <br />
              <span>Clear answers.</span>
            </h2>
            <p>
              Have something else in mind?
              <br />
              Let’s talk about it.
            </p>
            <a className="text-link" href="#contact">
              Ask our team <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <ChevronDown size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="page-container contact-grid">
            <div>
              <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
              <h2>
                Got a project?
                <br />
                <span>Let’s power it.</span>
              </h2>
              <p>
                A new PC, a stubborn problem, or a big idea for your business. Tell us a little
                about it and take the first step.
              </p>
              <div className="contact-note">
                <Headphones size={24} />
                <span>
                  Real conversations. Practical solutions.
                  <small>Start with what you need. We’ll take it from there.</small>
                </span>
              </div>
            </div>
            <form
              className="inquiry-form"
              onSubmit={prepareInquiry}
              onChange={() => {
                setInquiry(null);
                setCopied(false);
              }}
            >
              <h3>What can we help you with?</h3>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Full name"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={200}
                  />
                </label>
              </div>
              <label>
                I’m interested in
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a system or service
                  </option>
                  <option>Custom gaming PC</option>
                  <option>Laptop</option>
                  <option>Business system</option>
                  <option>Parts & upgrades</option>
                  <option>Repair & diagnostics</option>
                  <option>Networking & Wi-Fi</option>
                  <option>Phone & VoIP</option>
                  <option>Cellular signal boosting</option>
                  <option>Video surveillance</option>
                </select>
              </label>
              <label>
                A little about your project
                <textarea
                  name="message"
                  placeholder="Tell us about your setup, requirements, or budget…"
                  rows={3}
                  required
                  maxLength={3000}
                />
              </label>
              <button className="button button-primary" type="submit">
                Prepare my inquiry <ArrowUpRight size={17} />
              </button>
              <p className="form-hint">
                Demo inquiry builder — your details are not sent or stored.
              </p>
              {inquiry && (
                <div className="inquiry-preview" role="status">
                  <strong>Your inquiry is ready to copy</strong>
                  <pre>{inquiry}</pre>
                  <button
                    type="button"
                    className="text-link"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(inquiry);
                        setCopied(true);
                      } catch {
                        setCopied(false);
                      }
                    }}
                  >
                    {copied ? "Copied to clipboard" : "Copy inquiry"}
                    {copied ? <Check size={16} /> : <ArrowRight size={16} />}
                  </button>
                  <small>You can also select and copy the text above.</small>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
