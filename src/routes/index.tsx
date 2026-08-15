import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-tools.jpg";
import drillImg from "@/assets/product-drill.jpg";
import endmillImg from "@/assets/product-endmill.jpg";
import reamerImg from "@/assets/product-reamer.jpg";
import modularImg from "@/assets/product-modular.jpg";
import facilityImg from "@/assets/facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Tools — Precision Carbide Cutting Tools & OEM Solutions" },
      {
        name: "description",
        content:
          "Krishna Tools imports modular drills, solid carbide drills, carbide end mills and high-speed reamers. OEM service and neutral packaging for domestic and global partners.",
      },
      {
        property: "og:title",
        content: "Krishna Tools — Precision Carbide Cutting Tools",
      },
      {
        property: "og:description",
        content:
          "Importer of modular drills, solid carbide drills, carbide end mills and high-speed reamers. OEM service and neutral packaging for global partners.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://cdn.gpteng.co/blank-app-v1.svg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRODUCTS = [
  {
    img: modularImg,
    name: "Modular Drills",
    tag: "Exchangeable Heads",
    desc: "Modular drilling systems with exchangeable carbide heads for high-feed, deep-hole machining. Reduced inventory, faster changeovers.",
    specs: ["Ø6–Ø32 mm", "Internal coolant", "TiAlN / AlTiN coatings"],
  },
  {
    img: drillImg,
    name: "Solid Carbide Drills",
    tag: "High-Performance",
    desc: "Solid tungsten-carbide drills engineered for precision holes in steel, cast iron and hardened alloys. Exceptional tool life and hole quality.",
    specs: ["Ø1–Ø20 mm", "Up to 8×D depth", "Mirror-polished flutes"],
  },
  {
    img: endmillImg,
    name: "Carbide End Mills",
    tag: "Multi-Flute",
    desc: "Carbide end mills for slotting, profiling and roughing across steels and non-ferrous materials. Optimised geometry for chatter-free cuts.",
    specs: ["2–8 flutes", "Corner radius options", "NAC / DLC coatings"],
  },
  {
    img: reamerImg,
    name: "High-Speed Reamers",
    tag: "H7 Tolerance",
    desc: "High-speed steel and carbide reamers delivering tight-tolerance finishing holes for OEM assemblies. Consistent diameter and surface finish.",
    specs: ["H7 / H6 tolerance", "Straight & helical flutes", "Coolant-through option"],
  },
];

const CAPABILITIES = [
  {
    title: "OEM Service",
    desc: "Manufacture to your print. Brand the tools, packaging and labelling as your own for resale under your identity.",
    icon: "factory",
  },
  {
    title: "Neutral Packaging",
    desc: "Unbranded, generic packaging for distributors and trading houses shipping under private labels — domestic and global.",
    icon: "box",
  },
  {
    title: "Global Sourcing",
    desc: "Direct import relationships with vetted carbide and HSS manufacturers. Steady supply, competitive landed cost.",
    icon: "globe",
  },
  {
    title: "Quality Assurance",
    desc: "Lot-wise inspection of geometry, coating and metallurgy. Documentation and traceability on every shipment.",
    icon: "shield",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold">
              K
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              KRISHNA<span className="text-primary"> TOOLS</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Products", "#products"],
              ["Capabilities", "#capabilities"],
              ["OEM", "#oem"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-block"
          >
            Request Quote
          </a>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-card/95 px-5 py-4 md:hidden">
            {[
              ["Products", "#products"],
              ["Capabilities", "#capabilities"],
              ["OEM", "#oem"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-muted-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Request Quote
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-steel-gradient pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Importer · OEM · Neutral Packaging
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Precision carbide
                <br />
                cutting tools, <span className="text-gradient-amber">delivered globally</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Krishna Tools imports modular drills, solid carbide drills,
                carbide end mills and high-speed reamers — backed by OEM
                service and neutral packaging for domestic and global partners.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
                >
                  Request a Quote
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-muted-foreground">
                {[
                  ["25+", "Tool Series"],
                  ["30+", "Countries Served"],
                  ["99.2%", "On-time Shipments"],
                  ["ISO", "Inspection Standard"],
                ].map(([n, l]) => (
                  <div key={l} className="flex flex-col">
                    <span className="font-display text-2xl font-bold text-foreground">{n}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-up [animation-delay:120ms]">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-2xl" />
                <img
                  src={heroImg}
                  alt="Carbide cutting tools arranged on a brushed steel surface"
                  width={1600}
                  height={900}
                  className="relative aspect-[16/10] w-full rounded-xl border border-border object-cover shadow-2xl"
                />
                <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-border bg-card/90 p-4 backdrop-blur-md sm:block">
                  <p className="font-mono text-xs text-muted-foreground">QC INSPECTED</p>
                  <p className="font-display text-sm font-semibold">Lot #KT-2026-0814</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-card/40 py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-12">
              {[
                "Solid Carbide Drills",
                "Modular Drills",
                "Carbide End Mills",
                "High-Speed Reamers",
                "OEM Branding",
                "Neutral Packaging",
                "Global Shipping",
                "H7 Tolerance",
              ].map((t) => (
                <span key={t} className="flex items-center gap-3 font-display text-sm font-medium text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Our Catalogue</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tools engineered for the cut
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four core product lines imported from vetted manufacturers, each
            inspected for geometry, coating integrity and metallurgy before
            dispatch.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={816}
                  height={816}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">What We Do</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Beyond the tool — a full supply partner
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-background/40 p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CapabilityIcon name={c.icon} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM */}
      <section id="oem" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-primary/10 blur-2xl" />
            <img
              src={facilityImg}
              alt="Krishna Tools partner CNC machining and inspection facility"
              loading="lazy"
              width={1200}
              height={800}
              className="relative aspect-[3/2] w-full rounded-xl border border-border object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">OEM & Private Label</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Your brand. Our supply chain.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Resell our imported tools under your own identity, or ship them
              unbranded under neutral packaging. We handle sourcing, inspection
              and documentation so you focus on your customers.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                ["Branded labelling", "Apply your logo, part numbers and barcodes to tools and packaging."],
                ["Neutral packaging", "Generic boxes and inserts — ideal for distributors and trading houses."],
                ["Custom specifications", "Coatings, geometries and tolerances tuned to your application."],
                ["Export documentation", "COO, packing lists and HS-coded invoices for seamless global shipping."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">About Krishna Tools</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Importers of precision, partners in production
              </h2>
              <p className="mt-4 text-muted-foreground">
                Krishna Tools is a specialised importer of high-performance
                cutting tools — modular drills, solid carbide drills, carbide
                end mills and high-speed reamers. We bridge trusted overseas
                manufacturers with domestic and global customers who need
                consistent quality, fair pricing and reliable supply.
              </p>
              <p className="mt-4 text-muted-foreground">
                Through OEM service and neutral packaging, we let partners
                build their own brands without the burden of running a factory.
                Every shipment is inspected, documented and traceable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Import", "Vetted carbide & HSS sources"],
                ["Inspect", "Lot-wise geometry & coating QC"],
                ["Brand", "OEM / private-label options"],
                ["Ship", "Domestic & global, documented"],
              ].map(([t, d], i) => (
                <div key={t} className="rounded-xl border border-border bg-background/40 p-5">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <p className="mt-2 font-display text-lg font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Request a quote or OEM brief
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us what you need — a product line, a spec, or a private-label
                programme. We'll respond with pricing, lead times and samples.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <ContactRow label="Email" value="sales@krishnatools.com" />
                <ContactRow label="Phone" value="+91 98xxx xxxxx" />
                <ContactRow label="Hours" value="Mon–Sat, 09:00–18:00 IST" />
                <ContactRow label="Shipping" value="Domestic & global export" />
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. Our team will respond within one business day.");
              }}
              className="space-y-4 rounded-xl border border-border bg-background/50 p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Company" name="company" placeholder="Company / brand" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Country" name="country" placeholder="India" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Requirement
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="e.g. Solid carbide drills Ø6–Ø12, OEM branding, 500 pcs/month"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold">
                  K
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  KRISHNA<span className="text-primary"> TOOLS</span>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Importer of precision carbide cutting tools. OEM service and
                neutral packaging for domestic and global partners.
              </p>
            </div>
            <FooterCol
              title="Products"
              links={["Modular Drills", "Solid Carbide Drills", "Carbide End Mills", "High-Speed Reamers"]}
            />
            <FooterCol
              title="Services"
              links={["OEM Branding", "Neutral Packaging", "Custom Specs", "Export Documentation"]}
            />
            <div>
              <h4 className="font-display text-sm font-semibold">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>sales@krishnatools.com</li>
                <li>+91 98xxx xxxxx</li>
                <li>Mon–Sat, 09:00–18:00 IST</li>
              </ul>
            </div>
          </div>
          <div className="divider-glow my-8" />
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Krishna Tools. All rights reserved.</p>
            <p className="font-mono">Precision · Reliability · Partnership</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CapabilityIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "factory":
      return (
        <svg {...common}><path d="M3 21h18M5 21V10l5 3V7l5 4V4h4v17" /></svg>
      );
    case "box":
      return (
        <svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" /></svg>
      );
    case "globe":
      return (
        <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>
      );
    case "shield":
      return (
        <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
      );
    default:
      return null;
  }
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}><a href="#products" className="transition-colors hover:text-foreground">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
