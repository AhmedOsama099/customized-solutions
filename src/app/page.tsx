import Link from "next/link";
import { ArrowRight, Paperclip } from "lucide-react";
import { CustomizedMark, MihnaMark, WhatsAppIcon } from "@/components/marks";
import { cn } from "@/lib/cn";

const CONTACT_EMAIL = "ahmedeng099@gmail.com";
const WHATSAPP_NUMBER = "201011494459";
const WHATSAPP_DISPLAY = "+20 101 149 4459";
const PORTFOLIO_URL = "https://ahmedosamadev.vercel.app";
const MIHNA_URL = "https://portfolio-model-peach.vercel.app/mihna";

const NAV = [
  { href: "#what", label: "What we do" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
];

const CAPABILITIES = [
  { value: "End‑to‑end", note: "idea → design → ship" },
  { value: "AR · EN", note: "bilingual, RTL‑ready" },
  { value: "Owned", note: "your code, your domain" },
  { value: "Built to scale", note: "multi‑tenant from day one" },
];

const SERVICES = [
  {
    n: "01",
    title: "Product design",
    body: "We shape the flows, the screens and the brand before a line of code — so what we build looks made for you, not generic.",
  },
  {
    n: "02",
    title: "Web & app development",
    body: "Modern, fast, SEO-first builds with secure auth, validation and tests — shipped on infrastructure that stays cheap to run.",
  },
  {
    n: "03",
    title: "Custom platforms",
    body: "Multi-tenant systems, dashboards and live theming — one codebase that serves many clients, each with their own site.",
  },
  {
    n: "04",
    title: "Ongoing partnership",
    body: "We host, maintain and keep your product secure — and add to it as you grow. You stay in control from a simple dashboard.",
  },
];

const MIHNA_TAGS = ["Multi-tenant", "Bilingual · RTL", "Live theming", "11 role templates"];

const STEPS = [
  {
    n: "STEP 01",
    title: "Understand",
    body: "We learn the problem, the users and the constraints — and agree on what “done” looks like.",
  },
  {
    n: "STEP 02",
    title: "Design & build",
    body: "Tailored design, then a fast, secure build — shipped in increments you can see and steer.",
  },
  {
    n: "STEP 03",
    title: "Launch & keep",
    body: "Go live on your own domain — then we host, maintain and grow it alongside you.",
  },
];

/* Shared button styles */
const primaryBtn =
  "inline-flex items-center gap-2 rounded-full bg-accent px-[26px] py-[14px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(91,108,255,0.75)] transition-transform duration-150 hover:-translate-y-0.5";
const outlineBtn =
  "inline-flex items-center gap-2 rounded-full border border-border-cta bg-white px-[26px] py-[14px] font-semibold text-ink shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-transform duration-150 hover:-translate-y-0.5";

const dotGrid: React.CSSProperties = {
  backgroundImage: "radial-gradient(rgba(20,22,29,0.05) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
  maskImage: "linear-gradient(180deg,#000,transparent 78%)",
  WebkitMaskImage: "linear-gradient(180deg,#000,transparent 78%)",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Header />

      <main id="top">
        <Hero />
        <CapabilityStrip />
        <WhatWeDo />
        <Work />
        <Approach />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-[rgba(246,247,251,0.78)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-7 py-[14px]">
        <Link href="#top" className="flex items-center gap-[11px] text-ink">
          <CustomizedMark size={34} id="hdr" />
          <span className="font-display text-[19px] font-bold tracking-[-0.02em]">
            Customized Solutions
          </span>
        </Link>
        <nav className="flex items-center gap-1.5 text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-[14px] py-2 text-muted transition-colors hover:text-ink sm:inline-block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1.5 rounded-full bg-accent px-[18px] py-[9px] font-semibold text-white shadow-[0_8px_18px_-10px_rgba(91,108,255,0.8)] transition-transform duration-150 hover:-translate-y-0.5"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative border-b border-border-soft"
      style={{
        background:
          "radial-gradient(58rem 32rem at 50% -18%, rgba(91,108,255,0.16), #f6f7fb 64%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0" style={dotGrid} />
      <div className="relative mx-auto max-w-[920px] px-7 pb-[100px] pt-[90px] text-center">
        <div className="inline-flex items-center gap-[9px] rounded-full border border-[rgba(91,108,255,0.32)] bg-[rgba(91,108,255,0.08)] px-[14px] py-[7px] font-mono text-xs uppercase tracking-[0.16em] text-accent-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(91,108,255,0.9)] animate-blink" />
          Software studio
        </div>

        <h1 className="mt-[26px] text-balance font-display text-[clamp(40px,7vw,76px)] font-bold leading-[1.02] tracking-[-0.03em]">
          We build software,
          <br />
          <span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">
            tailored to fit.
          </span>
        </h1>

        <p className="mx-auto mt-[26px] max-w-[620px] text-pretty text-[19px] leading-[1.6] text-muted">
          Customized Solutions is a product studio. We design and ship
          software end-to-end — from the first sketch to a live product on its
          own domain. <span className="font-semibold text-ink">Mihna</span>, our
          platform for professional websites, is the first of them.
        </p>

        <div className="mt-[38px] flex flex-wrap justify-center gap-[13px]">
          <a href="#contact" className={primaryBtn}>
            Start a project <ArrowRight size={17} strokeWidth={2.4} />
          </a>
          <a href="#work" className={outlineBtn}>
            See our work
          </a>
        </div>

        <div className="mt-10 font-mono text-[12.5px] tracking-[0.05em] text-muted-3">
          <span className="text-accent">const</span> studio ={" "}
          <span className="text-teal">&quot;Customized Solutions&quot;</span>;{" "}
          <span className="text-[#b4bcca]">// product · platform · partnership</span>
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <section className="border-b border-border-soft bg-white">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 md:grid-cols-4">
        {CAPABILITIES.map((cap, i) => (
          <div
            key={cap.value}
            className={cn(
              "px-[22px] py-[30px] text-center",
              "border-b border-border-line md:border-b-0",
              i % 2 === 0 && "border-r border-border-line",
              i < 3 && "md:border-r md:border-border-line",
            )}
          >
            <p className="font-display text-[22px] font-bold tracking-[-0.02em]">
              {cap.value}
            </p>
            <p className="mt-1.5 text-[12.5px] text-muted-2">{cap.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
      {children}
    </p>
  );
}

function WhatWeDo() {
  return (
    <section id="what" className="mx-auto max-w-[1120px] px-7 py-24">
      <SectionLabel>// what we do</SectionLabel>
      <h2 className="mt-3.5 max-w-[680px] text-balance font-display text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.025em]">
        Four ways we turn an idea into a product
      </h2>
      <div className="mt-11 grid gap-[18px] md:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className="rounded-[20px] border border-border-soft bg-white p-[30px] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(20,22,29,0.25)]"
          >
            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-[rgba(91,108,255,0.12)] font-mono text-[18px] font-semibold text-accent-deep">
              {s.n}
            </div>
            <h3 className="mt-[18px] font-display text-[21px] font-semibold tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="mt-[9px] text-[15px] leading-[1.62] text-muted">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="border-y border-border-soft bg-band"
    >
      <div className="mx-auto max-w-[1120px] px-7 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>// our work</SectionLabel>
            <h2 className="mt-3.5 font-display text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.025em]">
              Products we&rsquo;ve built
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] leading-[1.6] text-muted">
            Each one started as a problem worth solving. We design, build and run
            them.
          </p>
        </div>

        {/* Flagship: Mihna */}
        <div className="mt-11 grid grid-cols-1 overflow-hidden rounded-[24px] border border-[rgba(13,148,136,0.28)] bg-white shadow-[0_20px_50px_-30px_rgba(13,148,136,0.45)] md:grid-cols-[1.05fr_0.95fr]">
          <div className="p-10">
            <div className="flex items-center gap-[13px]">
              <MihnaMark size={44} id="card" />
              <div>
                <p className="font-display text-[24px] font-bold tracking-[-0.02em]">
                  mihna{" "}
                  <span className="font-arabic font-bold text-teal">· مهنة</span>
                </p>
                <p className="mt-0.5 font-mono text-[11px] tracking-[0.05em] text-teal">
                  LIVE · malafpro.com
                </p>
              </div>
            </div>
            <p className="mt-[22px] text-[16px] leading-[1.65] text-[#3f4654]">
              Polished, bilingual websites for professionals — doctors, lawyers,
              engineers, tutors and more. Role-tailored templates, booking, leads
              and a simple dashboard. A multi-tenant platform that spins up a new
              client site in minutes.
            </p>
            <div className="mt-[22px] flex flex-wrap gap-2">
              {MIHNA_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(13,148,136,0.22)] bg-[rgba(13,148,136,0.10)] px-[11px] py-[5px] text-xs text-teal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={MIHNA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[26px] inline-flex items-center gap-2 font-semibold text-[14.5px] text-teal transition-transform duration-150 hover:translate-x-0.5"
            >
              Visit mihna <ArrowRight size={16} strokeWidth={2.4} />
            </a>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center border-t border-[rgba(13,148,136,0.16)] bg-[#f0fdf9] p-[30px] md:border-l md:border-t-0">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(13,148,136,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(13,148,136,0.12) 1px,transparent 1px)",
                backgroundSize: "30px 30px",
                maskImage: "radial-gradient(62% 62% at 50% 50%,#000,transparent)",
                WebkitMaskImage:
                  "radial-gradient(62% 62% at 50% 50%,#000,transparent)",
              }}
            />
            <div className="relative drop-shadow-[0_24px_44px_rgba(13,148,136,0.34)]">
              <MihnaMark size={148} id="hero" />
            </div>
          </div>
        </div>

        {/* Your project next */}
        <div className="mt-[18px] flex flex-wrap items-center justify-between gap-6 rounded-[24px] border border-dashed border-[#c7ccd9] bg-white px-10 py-[34px]">
          <div>
            <h3 className="font-display text-[22px] font-semibold tracking-[-0.01em]">
              Your product next
            </h3>
            <p className="mt-[7px] max-w-[520px] text-[15px] leading-[1.6] text-muted">
              Have an idea that needs to become real software? That&rsquo;s
              exactly what we do. Tell us about it.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-[13px] font-semibold text-white shadow-[0_12px_26px_-12px_rgba(91,108,255,0.7)] transition-transform duration-150 hover:-translate-y-0.5"
          >
            Start a project <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-[1120px] px-7 py-24">
      <SectionLabel>// how we work</SectionLabel>
      <h2 className="mt-3.5 max-w-[620px] text-balance font-display text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.025em]">
        From a conversation to a live product
      </h2>
      <div className="mt-11 grid gap-[18px] md:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="rounded-[20px] border border-border-soft bg-white p-[30px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          >
            <div className="font-mono text-[13px] tracking-[0.1em] text-accent">
              {step.n}
            </div>
            <h3 className="mt-3 font-display text-[20px] font-semibold">
              {step.title}
            </h3>
            <p className="mt-[9px] text-[14.5px] leading-[1.6] text-muted">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contact" className="mx-auto max-w-[1120px] px-7 pb-24">
      <div
        className="relative overflow-hidden rounded-[28px] border border-[rgba(91,108,255,0.28)] px-10 py-16 text-center"
        style={{
          background:
            "radial-gradient(50rem 26rem at 50% -10%, rgba(91,108,255,0.16), #fff 72%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(20,22,29,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(60% 80% at 50% 0%,#000,transparent)",
            WebkitMaskImage: "radial-gradient(60% 80% at 50% 0%,#000,transparent)",
          }}
        />
        <div className="relative">
          <h2 className="text-balance font-display text-[clamp(30px,4.4vw,46px)] font-bold tracking-[-0.03em]">
            Let&rsquo;s build something tailored.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-[1.6] text-muted">
            Tell us what you&rsquo;re trying to make. We&rsquo;ll come back with
            how we&rsquo;d build it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-[13px]">
            <a href={`mailto:${CONTACT_EMAIL}`} className={primaryBtn}>
              Contact us <ArrowRight size={17} strokeWidth={2.4} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineBtn}
            >
              <WhatsAppIcon size={18} className="text-[#25d366]" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const footerLink =
  "flex flex-col items-center gap-1.5 text-muted transition-colors hover:text-ink";

function Footer() {
  return (
    <footer className="border-t border-border-soft bg-band">
      <div className="mx-auto max-w-[1120px] px-7 py-11">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-[11px]">
            <CustomizedMark size={30} id="ftr" />
            <span className="font-display text-[17px] font-bold">
              Customized Solutions
            </span>
          </div>

          <div className="flex items-start gap-9">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              <WhatsAppIcon size={22} />
              <span className="text-[13px] font-medium tabular-nums">
                {WHATSAPP_DISPLAY}
              </span>
            </a>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              <Paperclip size={22} strokeWidth={1.8} />
              <span className="text-[13px] font-medium">Portfolio</span>
            </a>
          </div>
        </div>

        <p className="mt-9 border-t border-border-soft pt-7 text-center font-mono text-[13.5px] text-muted-3">
          © 2026 Customized Solutions — software, tailored.
        </p>
      </div>
    </footer>
  );
}
