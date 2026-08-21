import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { blogArticles } from "../data/blogArticles";

const iconProps = {
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

type ProblemCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type CapabilityGroup = {
  title: string;
  description: string;
  items: string[];
  toneClass: string;
  icon: ReactNode;
};

type SolutionMode = {
  label: string;
  title: string;
  description: string;
};

type Industry = {
  title: string;
  description: string;
};

type DeliveryPrinciple = {
  title: string;
  description: string;
};

const problemCards: ProblemCard[] = [
  {
    title: "Manual and repetitive workflows",
    description:
      "Teams spending hours on tasks that should take minutes — rekeying data, copying between spreadsheets, chasing approvals through chat threads.",
    icon: (
      <svg {...iconProps}>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Disconnected systems",
    description:
      "Your ecommerce platform, accounting tool, inventory system, and payment gateway all operate in silos. Nothing talks to anything else.",
    icon: (
      <svg {...iconProps}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98" />
        <path d="m15.41 6.51-6.82 3.98" />
      </svg>
    ),
  },
  {
    title: "Poor operational visibility",
    description:
      "Leadership cannot see what is happening in real time. Reports are late, incomplete, or built from data that is already stale.",
    icon: (
      <svg {...iconProps}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Scaling friction",
    description:
      "The processes that worked for 10 people break at 50. The tools that served one location cannot support five.",
    icon: (
      <svg {...iconProps}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Customer-service bottlenecks",
    description:
      "Response times grow as demand grows. Support teams are overwhelmed by repetitive enquiries that a better system could handle automatically.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Technology gaps",
    description:
      "You know you need better systems but cannot determine whether to build custom, buy off-the-shelf, automate what exists, or integrate what you have.",
    icon: (
      <svg {...iconProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "We study how your operations actually work — the workflows, the tools, the handoffs, the workarounds — to find where friction is concentrated.",
  },
  {
    step: "02",
    title: "Validate",
    description:
      "We confirm the business problem is real, measurable, and worth solving before any technology decisions are made.",
  },
  {
    step: "03",
    title: "Architect",
    description:
      "We design the solution architecture: what to build, what to buy, what to automate, what to integrate, and what supporting technology is needed.",
  },
  {
    step: "04",
    title: "Compose",
    description:
      "We assemble the right combination of custom software, existing platforms, AI, automation, integrations, and third-party systems into one coherent solution.",
  },
  {
    step: "05",
    title: "Deliver",
    description:
      "Astan leads technical delivery from development through launch, including training, handoff, and the operational context your team needs to run it.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "The system evolves. We monitor performance, gather feedback, and refine the solution as your operations grow and change.",
  },
];

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Operations & Enterprise Systems",
    description:
      "Internal applications, ERP-connected workflows, inventory and operations tooling, administration systems, and process digitisation.",
    items: [
      "Internal applications",
      "ERP/CRM-connected workflows",
      "Inventory and operations tooling",
      "Administration systems",
      "Process digitisation",
    ],
    toneClass: "bg-[#eef2ff] text-[#2a3ef4]",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20h16" />
        <path d="M6 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
        <path d="M9 8h1" />
        <path d="M14 8h1" />
        <path d="M9 12h1" />
        <path d="M14 12h1" />
        <path d="M11 20v-4h2v4" />
      </svg>
    ),
  },
  {
    title: "Integration & Payments",
    description:
      "APIs, payment systems, reconciliation, system synchronisation, and enterprise integration between platforms that currently operate in silos.",
    items: [
      "APIs and system connections",
      "Payment systems",
      "Reconciliation",
      "System synchronisation",
      "Enterprise integration",
    ],
    toneClass: "bg-[#effcff] text-[#0f8cc7]",
    icon: (
      <svg {...iconProps}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    description:
      "Workflow automation, AI-assisted operations, document and data processing, customer-service automation, and intelligent operational tools.",
    items: [
      "Workflow automation",
      "AI-assisted operations",
      "Document and data processing",
      "Customer-service automation",
      "Intelligent operational tools",
    ],
    toneClass: "bg-[#f4efff] text-[#6b4ce6]",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.93A3.5 3.5 0 0 0 7.5 13.5 3.5 3.5 0 0 0 11 17h2a3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3.75-3.57A4 4 0 0 0 16 6a4 4 0 0 0-4-4z" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    title: "Digital Products",
    description:
      "Web applications, mobile apps, commerce platforms, customer portals, and SaaS products designed around real user journeys.",
    items: [
      "Web applications",
      "Mobile apps",
      "Commerce platforms",
      "Customer portals",
      "SaaS products",
    ],
    toneClass: "bg-[#effbff] text-[#2563eb]",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="14" rx="3" />
        <path d="m8 10-2 2 2 2" />
        <path d="m16 10 2 2-2 2" />
        <path d="M12 9.5 10.5 14.5" />
      </svg>
    ),
  },
  {
    title: "Specialized Technology",
    description:
      "Bitcoin, blockchain, wallets, digital assets, tokenization, and supporting operational technology for businesses that need it.",
    items: [
      "Bitcoin applications",
      "Blockchain and smart contracts",
      "Wallets and digital assets",
      "Tokenization",
      "Supporting operational technology",
    ],
    toneClass: "bg-[#fff7ed] text-[#f97316]",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M10 8h3.1a2 2 0 0 1 0 4H9.5h4a2 2 0 0 1 0 4H10" />
        <path d="M12 6.5v11" />
        <path d="M9.5 7V5.5" />
        <path d="M14.5 18.5V17" />
      </svg>
    ),
  },
];

const solutionModes: SolutionMode[] = [
  {
    label: "BUILD",
    title: "Custom systems",
    description:
      "When bespoke software is the right answer — built around your exact workflows, data model, and operational reality.",
  },
  {
    label: "BUY",
    title: "Existing products",
    description:
      "When rebuilding an existing product would add little value — we identify, evaluate, and implement the right platform.",
  },
  {
    label: "AUTOMATE",
    title: "AI and workflow automation",
    description:
      "Where repetitive work can be removed — applying AI, rules engines, and workflow automation to eliminate manual overhead.",
  },
  {
    label: "INTEGRATE",
    title: "System connections",
    description:
      "Connecting systems that currently operate in silos — APIs, data synchronisation, and enterprise integration.",
  },
  {
    label: "SOURCE",
    title: "Supporting technology",
    description:
      "Identifying or coordinating the hardware, third-party systems, or external services needed to complete an Astan-led solution.",
  },
  {
    label: "HYBRID",
    title: "Combined approach",
    description:
      "Most real problems require a combination. Astan selects and composes the right mix based on the problem, not a preferred technology.",
  },
];

const industries: Industry[] = [
  {
    title: "Logistics, warehousing and distribution",
    description:
      "Inventory tracking, order management, fleet coordination, and warehouse operations that need to scale without adding headcount proportionally.",
  },
  {
    title: "Manufacturing and processing",
    description:
      "Production tracking, material planning, quality control, and the connection between shop-floor data and back-office systems.",
  },
  {
    title: "Commerce and multi-location operations",
    description:
      "Ecommerce, retail, multi-branch inventory, payment reconciliation, and the systems that keep commercial operations coordinated.",
  },
  {
    title: "Payments and regulated operations",
    description:
      "Payment processing, reconciliation, compliance workflows, and the operational infrastructure that regulated businesses require.",
  },
  {
    title: "Field-service businesses",
    description:
      "Dispatch, scheduling, mobile data capture, customer communication, and the operational tools that keep field teams productive.",
  },
  {
    title: "Growing digital businesses",
    description:
      "Startups and scale-ups that have outgrown spreadsheets and need proper operational systems to support the next stage of growth.",
  },
];

const ecarePharmHighlights = [
  "Customer storefront",
  "Admin portal",
  "Paystack checkout",
  "Inventory and fulfilment",
];

const homaHighlights = [
  "AI-assisted home workflows",
  "Groceries and shopping",
  "Crypto wallet support",
  "Cooperative features",
];

const homaQuickStats = [
  { label: "Groceries", value: "12 items" },
  { label: "Wallet", value: "Connected" },
];

const homaBottomTabs = ["Home", "Plan", "Wallet"];

const homaScreenItems = [
  "Restock household basics",
  "Shopping run planned",
  "Cooperative contribution due",
  "Wallet connected",
];

const PRODUCT_SHOWCASE_CYCLE_MS = 6800;

const deliveryPrinciples: DeliveryPrinciple[] = [
  {
    title: "Problem-first, not technology-first",
    description:
      "We diagnose the operational problem before recommending any technology. The right solution depends on the problem, not on what we prefer to build.",
  },
  {
    title: "Architecture before acceleration",
    description:
      "We design the system for fit, scalability, and operational reality so the solution keeps working after launch — not just on demo day.",
  },
  {
    title: "Astan-led delivery",
    description:
      "Whether we build, buy, automate, integrate, or source — Astan remains responsible for the architecture and the outcome. You deal with one team.",
  },
];

const handoffPhases = ["Diagnose", "Architect", "Build", "Deliver"];

const tokenizationPillars = [
  {
    title: "Capital access",
    description:
      "Tokenized assets can make financing more accessible by turning ownership, yield rights, or project participation into smaller, transferable digital units.",
  },
  {
    title: "Trust and auditability",
    description:
      "A well-designed registry can preserve the link between the real asset, the legal claim, the investor record, and every movement that happens after issuance.",
  },
  {
    title: "Programmable compliance",
    description:
      "Rules for eligibility, transfer limits, reporting, and settlement can be built into the product instead of being bolted on after the market is live.",
  },
];

const tokenizationBuildBlocks = [
  "Asset registry",
  "Issuer onboarding",
  "KYC-aware transfers",
  "Investor dashboards",
  "Settlement workflows",
];

const whatsappServiceCapabilities = [
  "Tenant-isolated SME workspaces",
  "Shared support inboxes",
  "Broadcast and order automations",
  "Customer follow-up analytics",
];

function Hero() {
  const [activeProductShowcase, setActiveProductShowcase] = useState<
    "ecare" | "homa"
  >("ecare");
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveProductShowcase((currentShowcase) =>
        currentShowcase === "ecare" ? "homa" : "ecare"
      );
    }, PRODUCT_SHOWCASE_CYCLE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <main id="top" className="overflow-x-clip">
      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden bg-brand-ink text-white">
        <div className="absolute inset-0 bg-brand-ink" />
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-brand-sky/20 blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-sky/10 blur-3xl animate-floaty" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="section-shell relative pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
          <div className="grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-[2.75rem]">
                Technology should remove bottlenecks,
                <span className="headline-gradient block">
                  not create more of them.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Astan identifies costly operational friction in growing businesses
                and designs the right technology solution to remove it — combining
                software, AI, automation, integrations, existing platforms and
                supporting technology where required.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="primary-button">
                  Discuss an operational bottleneck
                </a>
                <a
                  href="#how-we-work"
                  className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  See how Astan works
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Motion element on the right */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
                <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-brand-sky/30 blur-2xl animate-floaty" />
                <div className="relative grid grid-cols-2 gap-4">
                  {["Diagnose", "Architect", "Build", "Deliver"].map((phase, index) => (
                    <motion.div
                      key={phase}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-mono text-xs font-semibold text-brand-sky">
                        {index + 1}
                      </span>
                      <p className="mt-3 text-sm font-medium text-white">{phase}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Operating model visual - mobile only */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-14 lg:hidden"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
              How we work
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-0">
              {handoffPhases.map((phase, index) => (
                <div key={phase} className="flex items-center">
                  <div className="flex items-center gap-2.5 border border-white/10 bg-white/[0.06] px-4 py-2.5 sm:px-5 sm:py-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 font-mono text-[0.65rem] font-semibold text-brand-sky">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {phase}
                    </span>
                  </div>
                  {index < handoffPhases.length - 1 && (
                    <svg
                      className="h-5 w-5 flex-none text-white/25 sm:-mx-px sm:h-6 sm:w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHERE GROWTH STARTS BREAKING ─── */}
      <section
        id="problems"
        className="scroll-mt-28 py-24 sm:py-28"
        style={{ background: 'var(--bg-surface)' }}
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-white/60">
              Where growth starts breaking
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              The operational problems that cost you time, money, and momentum.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              These are the conditions where businesses start losing efficiency
              as they grow. If any of them sound familiar, Astan can help.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((card) => (
              <article
                key={card.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-sky">
                  {card.icon}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section
        id="how-we-work"
        className="scroll-mt-28 py-24 sm:py-28"
        style={{ background: 'var(--bg-alt)' }}
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-white/60">
              How we work
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              From operational pain to delivered solution — one coordinated
              process.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Astan does not start with technology. We start with the problem.
              Every engagement follows a structured path from diagnosis through
              delivery.
            </p>
          </div>

          <div className="mt-14 grid gap-5 xl:grid-cols-3 md:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 font-mono text-sm font-semibold text-brand-sky">
                  {step.step}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section
        id="capabilities"
        className="scroll-mt-28 py-24 sm:py-28"
        style={{ background: 'var(--bg-surface)' }}
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-white/60">
              Capabilities
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              The technical capability to match the right solution to the right
              problem.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Astan does not have a preferred technology. We have a broad
              capability set that lets us select the right intervention based on
              what the problem actually requires.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilityGroups.map((group) => (
              <article
                key={group.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-sky"
                >
                  {group.icon}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {group.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION COMPOSITION ─── */}
      <section
        id="solutions"
        className="scroll-mt-28 py-24 sm:py-28"
        style={{ background: 'var(--bg-alt)' }}
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-white/60">
              Solution composition
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              We select the intervention based on the problem — not a preferred
              technology.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Most real operational problems require a combination of approaches.
              Astan remains responsible for the architecture and technical
              delivery while external vendors may provide appropriate components.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutionModes.map((mode) => (
              <article
                key={mode.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="inline-flex rounded-full bg-primary/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">
                  {mode.label}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-white">
                  {mode.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {mode.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section
        id="industries"
        className="scroll-mt-28 py-24 sm:py-28"
        style={{ background: 'var(--bg-surface)' }}
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-white/60">
              Industries
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Operating environments where Astan is particularly useful.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              These are not claims of exclusive specialization. They are the
              environments where we have seen the strongest fit between
              operational complexity and the technology solutions we deliver.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK / CASE STUDIES ─── */}
      <section
        id="work"
        className="scroll-mt-28 py-24 sm:py-28"
        style={{ background: 'var(--bg-alt)' }}
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-white/60">
              Selected work
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Real solutions delivered for real operational problems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Each project started with a business problem, moved through our
              diagnostic process, and resulted in a solution composed from the
              right combination of technology.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div className="inline-flex rounded-full border border-slate-200 bg-brand-paper p-1">
                <button
                  type="button"
                  onClick={() => setActiveProductShowcase("ecare")}
                  aria-pressed={activeProductShowcase === "ecare"}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeProductShowcase === "ecare"
                      ? "bg-white text-slate-950 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  eCarePharm
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProductShowcase("homa")}
                  aria-pressed={activeProductShowcase === "homa"}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeProductShowcase === "homa"
                      ? "bg-slate-950 text-white shadow-[0_8px_24px_rgba(2,6,23,0.18)]"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Homa
                </button>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-sm leading-6 text-slate-500">
                  Auto-rotating between commerce and mobile product deliveries.
                </p>
                <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-slate-200 sm:block">
                  <motion.div
                    key={`product-progress-${activeProductShowcase}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: PRODUCT_SHOWCASE_CYCLE_MS / 1000,
                      ease: "linear",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-brand-sky"
                  />
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeProductShowcase === "ecare" ? (
                <motion.article
                  key="ecare"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      Commerce &amp; operations delivery
                    </p>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                          eCarePharm
                        </h4>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                          A pharmacy and health product business needed an
                          ecommerce platform, admin portal for inventory and
                          fulfilment, and integrated payment processing — all
                          connected into one operational system with Paystack
                          checkout.
                        </p>
                      </div>
                      <a
                        href="https://www.ecarepharm.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-primary"
                      >
                        Visit
                        <span className="ml-2" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {ecarePharmHighlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.9rem] border border-slate-200 bg-brand-paper p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                      <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          Storefront
                        </p>
                        <p className="mt-3 text-xl font-semibold text-slate-950">
                          Product browsing and order flow
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          Built for customer checkout, product discovery, and
                          reliable order capture.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Admin portal
                          </p>
                          <p className="mt-3 text-sm font-medium leading-6 text-slate-900">
                            Inventory, fulfillment, and product management.
                          </p>
                        </div>
                        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Payments
                          </p>
                          <p className="mt-3 text-sm font-medium leading-6 text-slate-900">
                            Paystack checkout integrated into the daily sales
                            flow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <motion.article
                  key="homa"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative overflow-hidden bg-brand-ink p-6 text-white sm:p-8"
                >
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
                  <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-sky/15 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

                  <div className="relative grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
                    <div className="lg:pr-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                          Mobile product delivery
                        </p>
                        <a
                          href="https://gethoma.app"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-white transition hover:text-brand-sky"
                        >
                          Visit
                          <span className="ml-2" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      </div>

                      <div className="mt-6 flex items-center gap-3">
                        <span className="font-mono text-sm font-semibold text-brand-sky/90">
                          &gt;&lt;
                        </span>
                        <h4 className="font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                          Homa
                        </h4>
                        <span className="font-mono text-sm text-white/35">
                          /
                        </span>
                      </div>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                        A household management problem — groceries, shopping,
                        planning, cooperative contributions, and wallet
                        coordination — solved through a mobile-first app that
                        combines AI-assisted workflows with practical everyday
                        tools.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {homaHighlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-sm text-slate-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <div className="relative w-full max-w-[24rem] py-6">
                        <div className="absolute left-8 right-8 top-16 h-48 rounded-full bg-brand-sky/16 blur-3xl" />
                        <div className="absolute left-2 top-24 h-16 w-1 rounded-full bg-white/12" />
                        <div className="absolute left-2 top-42 h-12 w-1 rounded-full bg-white/12" />
                        <div className="absolute right-2 top-32 h-20 w-1 rounded-full bg-white/12" />

                        <div className="relative mx-auto origin-bottom rotate-[8deg] lg:mr-4 lg:rotate-[10deg]">
                          <div className="rounded-[3.25rem] bg-[linear-gradient(160deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08))] p-[1.4px] shadow-[0_40px_90px_rgba(2,6,23,0.55)]">
                            <div className="rounded-[3.1rem] bg-[#060b14] p-2.5">
                              <div className="relative overflow-hidden rounded-[2.55rem] border border-white/5 bg-[radial-gradient(circle_at_top,rgba(93,211,255,0.16),transparent_28%),linear-gradient(180deg,#151d31_0%,#0b111d_100%)] px-5 pb-5 pt-6">
                                <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black/70 ring-1 ring-white/5" />
                                <div className="mt-7 flex items-center justify-between">
                                  <div>
                                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/55">
                                      Homa
                                    </p>
                                    <p className="mt-1 text-xl font-semibold text-white">
                                      Home overview
                                    </p>
                                  </div>
                                  <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[0.65rem] font-medium text-emerald-200">
                                    AI on
                                  </span>
                                </div>

                                <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-4">
                                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Daily plan
                                  </p>
                                  <p className="mt-2 text-lg font-semibold text-white">
                                    Household flow prepared
                                  </p>
                                  <p className="mt-2 text-[0.78rem] leading-6 text-slate-300">
                                    Groceries, wallet activity, and cooperative
                                    tasks are coordinated in one screen.
                                  </p>
                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-3">
                                  {homaQuickStats.map((stat) => (
                                    <div
                                      key={stat.label}
                                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3"
                                    >
                                      <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/40">
                                        {stat.label}
                                      </p>
                                      <p className="mt-1.5 text-sm font-medium text-white">
                                        {stat.value}
                                      </p>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-3 space-y-2.5">
                                  {homaScreenItems.map((item, index) => (
                                    <div
                                      key={item}
                                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3"
                                    >
                                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[0.62rem] font-semibold text-white/70">
                                        0{index + 1}
                                      </span>
                                      <p className="text-sm font-medium text-white">
                                        {item}
                                      </p>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-4 flex items-center justify-between rounded-[1.3rem] border border-white/10 bg-white/[0.05] px-3 py-2.5">
                                  {homaBottomTabs.map((tab, index) => (
                                    <span
                                      key={tab}
                                      className={`text-[0.68rem] font-medium uppercase tracking-[0.18em] ${
                                        index === 0
                                          ? "text-white"
                                          : "text-white/35"
                                      }`}
                                    >
                                      {tab}
                                    </span>
                                  ))}
                                </div>

                                <div className="mt-4 mx-auto h-1.5 w-20 rounded-full bg-white/18" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── WHY ASTAN ─── */}
      <section
        id="why-astan"
        className="scroll-mt-28 bg-brand-paper py-24 text-slate-900 sm:py-28"
      >
        <div className="section-shell">
          <div className="overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
            <div className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(42,62,244,0.08),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
              <div className="max-w-3xl">
                <span className="eyebrow border-slate-200 bg-white text-slate-500">
                  Why Astan
                </span>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                  A delivery model that stays practical from diagnosis to
                  adoption.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We do not treat diagnosis, architecture, build, integration,
                  and team enablement as separate phases. The same plan covers
                  the problem definition, the solution design, the
                  implementation, and the people who will run the system day to
                  day.
                </p>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Delivery principles
                  </p>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {deliveryPrinciples.map((principle) => (
                    <article
                      key={principle.title}
                      className="rounded-[1.5rem] bg-brand-paper p-5"
                    >
                      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">
                        {principle.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {principle.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESEARCH (visually separated) ─── */}
      <section
        id="research"
        className="scroll-mt-28 bg-white py-24 text-slate-900 sm:py-28"
      >
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="eyebrow border-slate-200 bg-brand-paper text-slate-500">
                Astan Research
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Asset tokenization is not just a Web3 feature. It is a new
                financing interface for real-world assets.
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-lg leading-8 text-slate-600">
                Astan is researching how asset tokenization can help founders,
                cooperatives, property owners, and SMEs unlock capital from
                assets that are difficult to finance through traditional rails.
                This research demonstrates technical depth and forward thinking;
                it is separate from our core commercial proposition.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="border-l-4 border-primary bg-brand-paper px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Research-led
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Exploring the operating model before presenting it as a
                    production marketplace.
                  </p>
                </div>
                <div className="border-l-4 border-brand-sky bg-brand-paper px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    SME-focused
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Building practical service layers for small businesses that
                    need faster customer operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <article className="flex min-h-full flex-col overflow-hidden rounded-[2rem] bg-brand-ink p-6 text-white shadow-[0_24px_90px_rgba(2,6,23,0.22)] sm:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                    Astan research track
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                    Tokenized asset infrastructure
                  </h3>
                </div>
                <span className="inline-flex self-start rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-slate-200">
                  RWA-ready thinking
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The case for tokenization is strongest in markets where good
                assets exist but financing is slow, opaque, or concentrated.
                Astan is studying the full system: asset verification, ownership
                records, investor onboarding, compliant transfer, and the
                product experience that makes it understandable.
              </p>

              <div className="mt-auto pt-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {tokenizationBuildBlocks.map((block) => (
                    <span
                      key={block}
                      className="rounded-[1.1rem] border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-medium text-slate-200"
                    >
                      {block}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="flex min-h-full flex-col rounded-[2rem] border border-slate-200 bg-brand-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                SME operations
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                Multi-tenant WhatsApp service for SMEs
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Astan is also building a WhatsApp-first service layer for small
                businesses: one platform where multiple SMEs can manage customer
                conversations, campaigns, support, orders, and follow-ups from
                isolated tenant workspaces.
              </p>

              <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
                {whatsappServiceCapabilities.map((capability) => (
                  <div
                    key={capability}
                    className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-slate-700"
                  >
                    {capability}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {tokenizationPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section
        id="blog"
        className="scroll-mt-28 bg-brand-paper py-20 text-slate-900 sm:py-24"
      >
        <div className="section-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow border-slate-200 bg-white text-slate-500">
                Field notes
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Research and writing from Astan&apos;s work in the field.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Practical writing on tokenization, operations, product thinking,
                and the technologies Astan is working with.
              </p>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-primary"
            >
              View all articles
              <span className="ml-2" aria-hidden="true">
                -&gt;
              </span>
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blogArticles.slice(0, 4).map((article) => {
              const isExternal = article.href.startsWith("http");
              return (
                <article
                  key={article.href}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_88px_rgba(15,23,42,0.1)] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      {article.category}
                    </p>
                    {isExternal && (
                      <span className="rounded-full border border-slate-200 bg-brand-paper px-2 py-1 text-[0.65rem] font-medium text-slate-500">
                        Medium
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {article.description}
                  </p>
                  <a
                    href={article.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-primary"
                  >
                    Read article
                    <span className="ml-2" aria-hidden="true">
                      {isExternal ? "↗" : "-&gt;"}
                    </span>
                  </a>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary/30 hover:text-primary"
            >
              View all {blogArticles.length} articles -&gt;
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section
        id="contact"
        className="scroll-mt-28 bg-brand-paper py-20 sm:py-24"
      >
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-ink px-6 py-12 text-white shadow-[0_30px_90px_rgba(2,6,23,0.36)] sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-sky/[0.18] blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <span className="eyebrow border-white/10 bg-white/10 text-white/70">
                  Discuss a problem
                </span>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Tell us where growth is creating operational friction — we will
                  figure out the technology.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Whether the answer is custom software, an integration, AI
                  automation, an existing platform, or a combination — Astan
                  will diagnose the problem, design the solution, and lead the
                  delivery.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:dev@astantechnologies.com?subject=Operational%20Problem%20-%20Astan%20Technologies"
                  className="primary-button w-full min-w-[16rem]"
                >
                  dev@astantechnologies.com
                </a>
                <a
                  href="#how-we-work"
                  className="outline-button w-full border-white/[0.12] bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                >
                  Review how we work
                </a>
              </div>
            </div>

            <div className="relative mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/10">
                  <img
                    src="/brand/astan-iconmark-white.svg"
                    alt=""
                    className="h-7 w-7"
                  />
                </span>
                <img
                  src="/brand/astan-wordmark-white.svg"
                  alt="Astan Technologies"
                  className="h-8 w-auto"
                />
              </div>

              <div className="max-w-2xl">
                <p className="text-sm leading-7 text-slate-400">
                  Astan Technologies identifies operational bottlenecks and
                  delivers the technology solution to remove them — software,
                  AI, automation, integrations, or a combination.
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-300">
                  <a
                    href="/privacy-policy/"
                    className="transition hover:text-white"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-of-service/"
                    className="transition hover:text-white"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/user-data-deletion/"
                    className="transition hover:text-white"
                  >
                    User Data Deletion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
