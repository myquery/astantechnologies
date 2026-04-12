import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type ServiceCard = {
  title: string;
  label: string;
  description: string;
  toneClass: string;
  icon: ReactNode;
};

type FocusLane = {
  title: string;
  description: string;
  bullets: string[];
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type DeliveryPrinciple = {
  title: string;
  description: string;
};

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  counter?: string;
  showLogo?: boolean;
};

const iconProps = {
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const serviceCards: ServiceCard[] = [
  {
    title: "Web apps",
    label: "Customer-facing and AI-integrated platforms",
    description:
      "Responsive product sites, AI-enabled dashboards, portals, and SaaS experiences built for speed, polish, and maintainable growth.",
    toneClass: "bg-[#eef2ff] text-[#2a3ef4]",
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
    title: "Mobile apps",
    label: "AI-integrated iOS and Android delivery",
    description:
      "Native-feeling mobile experiences, AI-assisted companion apps, and operational tools shaped around real user journeys.",
    toneClass: "bg-[#effbff] text-[#0f8cc7]",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10 5.5h4" />
        <circle cx="12" cy="17.5" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Cryptocurrency wallets",
    label: "Secure and AI-integrated wallet flows",
    description:
      "Wallet UX, transfer journeys, portfolio views, and AI-assisted support flows for digital asset experiences that still prioritize custody-aware design.",
    toneClass: "bg-[#f4efff] text-[#6b4ce6]",
    icon: (
      <svg {...iconProps}>
        <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5v-7Z" />
        <path d="M4 9h13.5A2.5 2.5 0 0 1 20 11.5v1A2.5 2.5 0 0 1 17.5 15H4" />
        <circle cx="16.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Web3 apps",
    label: "AI-integrated on-chain product experiences",
    description:
      "dApps, tokenized user flows, smart contract integrations, and AI-assisted web3 frontends that still feel mainstream.",
    toneClass: "bg-[#eef7ff] text-[#2563eb]",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="5.5" r="2.5" />
        <circle cx="6" cy="16.5" r="2.5" />
        <circle cx="18" cy="16.5" r="2.5" />
        <path d="M10.4 7.5 7.6 14.4" />
        <path d="M13.6 7.5 16.4 14.4" />
        <path d="M8.5 16.5h7" />
      </svg>
    ),
  },
  {
    title: "Bitcoin development",
    label: "Bitcoin-first and AI-assisted products",
    description:
      "Applications that support Bitcoin payments, settlement flows, AI-assisted operational tooling, infrastructure planning, and future-ready transaction design.",
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
  {
    title: "Shopify builds",
    label: "AI-integrated commerce systems",
    description:
      "Storefront design, Shopify extensions, AI-assisted merchandising tools, platform migrations, and backend workflows that keep commerce operations moving.",
    toneClass: "bg-[#effcf4] text-[#16a34a]",
    icon: (
      <svg {...iconProps}>
        <path d="M7 8.5h10l-1 10H8L7 8.5Z" />
        <path d="M9.5 9V7.5a2.5 2.5 0 0 1 5 0V9" />
        <path d="M10 12.5c.5.7 1.2 1 2 1s1.5-.3 2-1" />
      </svg>
    ),
  },
  {
    title: "Enterprise applications",
    label: "AI-integrated internal platforms and operations",
    description:
      "Custom business systems, ERP-connected tools, AI-assisted admin environments, and workflow platforms for teams that need reliability.",
    toneClass: "bg-[#f8fafc] text-[#0f172a]",
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
    title: "Custom training",
    label: "Enablement and workshops",
    description:
      "Tailored team training for products, internal systems, blockchain workflows, and the operational habits that sustain adoption.",
    toneClass: "bg-[#f5f3ff] text-[#7c3aed]",
    icon: (
      <svg {...iconProps}>
        <path d="M4 6.5h16v9H4z" />
        <path d="m8 19 2.5-3h3L16 19" />
        <path d="m9 11 2 2 4-4" />
      </svg>
    ),
  },
];

const focusLanes: FocusLane[] = [
  {
    title: "Product launches",
    description:
      "For startups and teams releasing new customer-facing products with strong design and dependable engineering.",
    bullets: [
      "Web platforms",
      "Mobile experiences",
      "Wallet-connected interfaces",
    ],
  },
  {
    title: "Blockchain systems",
    description:
      "For organizations introducing crypto, Bitcoin, or web3 features without losing the clarity users expect.",
    bullets: [
      "Crypto wallets",
      "Bitcoin application flows",
      "Web3 product architecture",
    ],
  },
  {
    title: "Commerce and operations",
    description:
      "For brands and institutions modernizing commerce, enterprise processes, and the people running them.",
    bullets: [
      "Shopify storefronts",
      "Enterprise applications",
      "Custom training programs",
    ],
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery and architecture",
    description:
      "We align on goals, users, system constraints, and the shape of the product before the build starts moving.",
  },
  {
    step: "02",
    title: "Interface and delivery design",
    description:
      "We define the product experience, technical stack, rollout sequence, and the design language that will hold up over time.",
  },
  {
    step: "03",
    title: "Build and integration",
    description:
      "Astan delivers the application layer, service connections, commerce rails, or blockchain components as one coordinated system.",
  },
  {
    step: "04",
    title: "Launch, training, and handoff",
    description:
      "The finish line includes rollout support, internal knowledge transfer, and training that helps teams operate with confidence.",
  },
];

const ecarePharmHighlights = [
  "Customer storefront",
  "Admin portal",
  "Paystack checkout",
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

const introHeroSlide: HeroSlide = {
  id: "intro",
  eyebrow: "Astan at a glance",
  title: "Focused delivery across the products your business needs next.",
  showLogo: true,
};

const heroSlides: HeroSlide[] = [
  introHeroSlide,
  {
    id: "web-mobile-ai",
    eyebrow: "Delivery lane",
    counter: "01 / 03",
    title: "Web, mobile & AI-integrated apps",
    description:
      "Customer-facing products, AI-assisted workflows, and operational apps shaped for real use.",
  },
  {
    id: "crypto-web3",
    eyebrow: "Delivery lane",
    counter: "02 / 03",
    title: "Crypto & web3",
    description:
      "Wallets, Bitcoin flows, and on-chain experiences without product friction.",
  },
  {
    id: "commerce-enterprise",
    eyebrow: "Delivery lane",
    counter: "03 / 03",
    title: "Commerce & enterprise",
    description:
      "Shopify builds, internal systems, and training that supports adoption.",
  },
];

const SLIDE_CYCLE_MS = 4800;
const INITIAL_SLIDE_DELAY_MS = 520;
const SLIDE_LOADING_DELAY_MS = 280;
const VISIBLE_SLIDE_MS = SLIDE_CYCLE_MS - SLIDE_LOADING_DELAY_MS;
const PRODUCT_SHOWCASE_CYCLE_MS = 6800;

const deliveryPrinciples: DeliveryPrinciple[] = [
  {
    title: "Architecture before acceleration",
    description:
      "We shape delivery around system fit, scalability, and operational reality so the product can keep growing after launch.",
  },
  {
    title: "Design that respects operators",
    description:
      "Interfaces are crafted for both external users and internal teams who need clarity, speed, and low-friction workflows.",
  },
  {
    title: "Training that makes adoption stick",
    description:
      "Custom sessions and enablement materials help teams absorb new tools, blockchain workflows, and enterprise process shifts.",
  },
];

const handoffPhases = ["Plan", "Build", "Launch"];

function Hero() {
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const [visibleSlideIndex, setVisibleSlideIndex] = useState<number | null>(
    null
  );
  const [activeProductShowcase, setActiveProductShowcase] = useState<
    "ecare" | "homa"
  >("ecare");
  const visibleSlide =
    visibleSlideIndex !== null
      ? heroSlides[visibleSlideIndex] ?? introHeroSlide
      : null;
  const isSlideLoading =
    visibleSlideIndex === null || visibleSlideIndex !== activeCapabilityIndex;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveCapabilityIndex(
        (currentIndex) => (currentIndex + 1) % heroSlides.length
      );
    }, SLIDE_CYCLE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(
      () => {
        setVisibleSlideIndex(activeCapabilityIndex);
      },
      visibleSlideIndex === null
        ? INITIAL_SLIDE_DELAY_MS
        : SLIDE_LOADING_DELAY_MS
    );

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeCapabilityIndex]);

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
      <section className="relative isolate overflow-hidden bg-brand-ink text-white">
        <div className="absolute inset-0 bg-brand-ink" />
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-brand-sky/20 blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-sky/10 blur-3xl animate-floaty" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="section-shell relative pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Software for teams building
                <span className="headline-gradient block">
                  beyond the ordinary.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Astan designs and ships web, mobile, AI-integrated, blockchain,
                commerce, and enterprise software with a clear path from
                strategy to launch.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="primary-button">
                  Start your next build
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  Explore services
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="relative animate-slide-up lg:pl-10">
              <div className="absolute left-0 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 lg:block" />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="border-y border-white/10 py-8"
              >
                <div
                  className="flex min-h-[1.5rem] items-center gap-3"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait">
                    {isSlideLoading ? (
                      <motion.div
                        key={`loading-${activeCapabilityIndex}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex items-center gap-3"
                      >
                        <span className="flex items-center gap-1.5">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              animate={{ opacity: [0.25, 1, 0.25] }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: dot * 0.15,
                                ease: "easeInOut",
                              }}
                              className="h-1.5 w-1.5 rounded-full bg-brand-sky"
                            />
                          ))}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                          Preparing slide
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`ready-${visibleSlide?.id ?? "slide"}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex items-center gap-3"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" />
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                          Slide ready
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  {isSlideLoading ? (
                    <motion.div
                      key={`placeholder-${activeCapabilityIndex}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-6 flex min-h-[12rem] flex-col sm:min-h-[13rem]"
                    >
                      <div className="h-3.5 w-24 rounded-full bg-white/10" />
                      <div className="mt-6 h-4 w-40 rounded-full bg-white/10" />
                      <div className="mt-4 h-10 max-w-[28rem] rounded-2xl bg-white/[0.08]" />
                      <div className="mt-3 h-10 max-w-[22rem] rounded-2xl bg-white/[0.06]" />
                    </motion.div>
                  ) : visibleSlide ? (
                    <motion.article
                      key={visibleSlide.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="mt-6 flex min-h-[12rem] flex-col sm:min-h-[13rem]"
                    >
                      {visibleSlide.showLogo ? (
                        <>
                          <div className="flex items-center gap-4">
                            <img
                              src="/brand/astan-iconmark-white.svg"
                              alt=""
                              className="h-9 w-9"
                            />
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                              {visibleSlide.eyebrow}
                            </p>
                          </div>
                          <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                            {visibleSlide.title}
                          </h2>
                        </>
                      ) : (
                        <>
                          <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
                            {visibleSlide.counter}
                          </span>
                          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                            {visibleSlide.eyebrow}
                          </p>
                          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                            {visibleSlide.title}
                          </h2>
                          <p className="mt-4 max-w-md text-base leading-8 text-slate-300 sm:text-lg">
                            {visibleSlide.description}
                          </p>
                        </>
                      )}
                    </motion.article>
                  ) : null}
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between gap-5">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    {isSlideLoading ? (
                      <motion.div
                        key={`loading-progress-${activeCapabilityIndex}`}
                        initial={{ opacity: 0.35 }}
                        animate={{ opacity: [0.35, 0.85, 0.35] }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-full w-1/4 rounded-full bg-white/25"
                      />
                    ) : (
                      <motion.div
                        key={`${visibleSlide?.id ?? "slide"}-progress`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: VISIBLE_SLIDE_MS / 1000,
                          ease: "linear",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-sky to-primary"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {heroSlides.map((slide, index) => {
                      const isActive = index === activeCapabilityIndex;

                      return (
                        <button
                          key={slide.id}
                          type="button"
                          aria-label={`Show ${slide.title}`}
                          aria-pressed={isActive}
                          onClick={() => setActiveCapabilityIndex(index)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-10 bg-brand-sky"
                              : "w-2.5 bg-white/25 hover:bg-white/45"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.9, ease: "easeOut" }}
                className="mt-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                  From strategy to handoff
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {handoffPhases.map((phase) => (
                    <div
                      key={phase}
                      className="border border-white/10 px-4 py-4 text-center text-sm font-medium text-slate-200"
                    >
                      {phase}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-28 bg-brand-paper py-24 text-slate-900 sm:py-28"
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow border-slate-200 bg-white text-slate-500">
              Service stack
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Modern builds for AI-integrated customer products, blockchain
              systems, and internal platforms.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Astan blends product design, engineering, AI workflow
              integration, commerce thinking, and technical training into one
              delivery motion, so customer experiences and the systems behind
              the scenes evolve together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_88px_rgba(15,23,42,0.1)]"
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.toneClass}`}
                >
                  {service.icon}
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {service.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Selected product deliveries
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Real product work across ecommerce and AI-assisted mobile
                experiences.
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Instead of treating platforms as abstract capabilities, we ship
                products that handle storefront operations, payments,
                household coordination, and cooperative workflows in one
                working system.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
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
                    Auto-rotating between the web commerce build and the mobile
                    product experience.
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
                        Commerce delivery
                      </p>
                      <div className="mt-4 flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            eCarePharm
                          </h4>
                          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            A full-fledged ecommerce application for pharmacy
                            and health product sales, paired with an admin
                            portal and Paystack-integrated checkout for daily
                            operations.
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
                            Mobile app delivery
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
                          A mobile-first home management app for groceries,
                          shopping, AI-assisted planning, crypto wallet support,
                          and cooperative feature delivery inside one household
                          workflow.
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
                                      Groceries, wallet activity, and
                                      cooperative tasks are coordinated in one
                                      screen.
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
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-28 bg-white py-24 text-slate-900 sm:py-28"
      >
        <div className="section-shell">
          <div className="overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
            <div className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(42,62,244,0.08),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
              <div className="max-w-3xl">
                <span className="eyebrow border-slate-200 bg-white text-slate-500">
                  Why Astan
                </span>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                  A delivery model that stays practical from architecture to
                  adoption.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We do not treat app delivery, blockchain features, enterprise
                  workflows, and team enablement as separate silos. The same
                  plan covers product UX, integration risk, launch readiness,
                  and the people who will run the system day to day.
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

              <div className="mt-8 border-t border-slate-200 pt-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Delivery lanes
                  </p>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {focusLanes.map((lane) => (
                    <article
                      key={lane.title}
                      className="rounded-[1.75rem] bg-brand-ink p-5 text-white"
                    >
                      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
                        {lane.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {lane.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {lane.bullets.map((bullet) => (
                          <span
                            key={bullet}
                            className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-sm text-slate-200"
                          >
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Working rhythm
                  </p>
                </div>
                <div className="mt-5 grid gap-4 xl:grid-cols-4 md:grid-cols-2">
                  {processSteps.map((step) => (
                    <article
                      key={step.step}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-paper font-mono text-sm font-semibold text-primary shadow-[0_12px_28px_rgba(42,62,244,0.14)]">
                        {step.step}
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  Ready to build?
                </span>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Bring Astan in for the product, the platform, or the training
                  that gets it over the line.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Tell us what you&apos;re launching or modernizing. We can help
                  with customer-facing apps, enterprise integrations, blockchain
                  features, Shopify commerce, and hands-on training for the
                  teams who will own the result.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:dev@astantechnologies.com?subject=Project%20Inquiry%20for%20Astan%20Technologies"
                  className="primary-button w-full min-w-[16rem]"
                >
                  dev@astantechnologies.com
                </a>
                <a
                  href="#services"
                  className="outline-button w-full border-white/[0.12] bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                >
                  Review service scope
                </a>
              </div>
            </div>

            <div className="relative mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
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

              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                Astan Technologies builds web, mobile, commerce, blockchain,
                Bitcoin, and enterprise experiences with a product mindset and a
                rollout plan teams can actually use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
