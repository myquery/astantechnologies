"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Reveal } from "../motion";
import { ArchitectureDiagram, type DiagramNode, type DiagramConnection } from "../system";

type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  url?: string;
  nodes: DiagramNode[];
  connections: DiagramConnection[];
};

const projects: Project[] = [
  {
    id: "ecarepharm",
    index: "01",
    name: "eCarePharm",
    category: "Commerce & Operations Infrastructure",
    description:
      "A pharmacy and health product business needed an ecommerce platform, admin portal for inventory and fulfilment, and integrated payment processing — all connected into one operational system.",
    tags: ["Commerce", "Inventory", "Payments", "Fulfilment", "Admin Portal"],
    url: "https://www.ecarepharm.com",
    nodes: [
      { id: "storefront", label: "Storefront", x: 60, y: 50, status: "active" },
      { id: "orders", label: "Orders", x: 180, y: 50, status: "active" },
      { id: "inventory", label: "Inventory", x: 300, y: 50, status: "active" },
      { id: "payments", label: "Paystack", x: 120, y: 140, status: "active" },
      { id: "admin", label: "Admin Portal", x: 240, y: 140, status: "active" },
      { id: "fulfilment", label: "Fulfilment", x: 180, y: 220, status: "active" },
    ],
    connections: [
      { from: "storefront", to: "orders", status: "data-flow", showSignal: true },
      { from: "orders", to: "inventory", status: "connected" },
      { from: "orders", to: "payments", status: "data-flow", showSignal: true },
      { from: "orders", to: "fulfilment", status: "connected" },
      { from: "admin", to: "inventory", status: "connected" },
      { from: "admin", to: "fulfilment", status: "connected" },
    ],
  },
  {
    id: "homa",
    index: "02",
    name: "Homa",
    category: "Mobile Product Delivery",
    description:
      "A household management problem — groceries, shopping, planning, cooperative contributions, and wallet coordination — solved through a mobile-first app combining AI-assisted workflows with practical everyday tools.",
    tags: ["Mobile App", "AI Workflows", "Crypto Wallet", "Cooperative", "Groceries"],
    url: "https://gethoma.app",
    nodes: [
      { id: "app", label: "Homa App", x: 180, y: 50, status: "active" },
      { id: "ai", label: "AI Engine", x: 60, y: 130, status: "active" },
      { id: "groceries", label: "Groceries", x: 180, y: 130, status: "active" },
      { id: "wallet", label: "Wallet", x: 300, y: 130, status: "active" },
      { id: "coop", label: "Cooperative", x: 120, y: 210, status: "active" },
      { id: "plan", label: "Planning", x: 240, y: 210, status: "active" },
    ],
    connections: [
      { from: "app", to: "ai", status: "data-flow", showSignal: true },
      { from: "app", to: "groceries", status: "connected" },
      { from: "app", to: "wallet", status: "connected" },
      { from: "ai", to: "coop", status: "connected" },
      { from: "ai", to: "plan", status: "data-flow", showSignal: true },
      { from: "wallet", to: "coop", status: "connected" },
    ],
  },
];

export function SelectedWork() {
  const [activeId, setActiveId] = useState(projects[0]!.id);
  const shouldReduceMotion = useReducedMotion();
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <section id="work" className="relative overflow-hidden bg-brand-ink py-14 lg:py-20">
      <div className="absolute inset-0 tech-grid opacity-25" />

      <div className="section-shell relative">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal delay={0.05}>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Selected systems
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                Real solutions for{" "}
                <span className="headline-gradient">real operational problems.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Project tabs */}
        <Reveal delay={0.15}>
          <div className="mb-8 flex gap-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className="rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  borderColor: activeId === project.id ? "rgba(42,62,244,0.5)" : "rgba(255,255,255,0.08)",
                  backgroundColor: activeId === project.id ? "rgba(42,62,244,0.1)" : "rgba(255,255,255,0.02)",
                  color: activeId === project.id ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                }}
              >
                {project.index} / {project.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start"
          >
            {/* Left: info */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
                    {active.category}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em] text-white">
                    {active.name}
                  </h3>
                </div>
                {active.url && (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-wider text-white/70 transition hover:border-white/[0.15] hover:text-white/80"
                  >
                    Visit ↗
                  </a>
                )}
              </div>

              <p className="text-sm leading-relaxed text-white/75">{active.description}</p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* System summary */}
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
                  System components
                </p>
                <div className="space-y-2">
                  {active.nodes.map((node) => (
                    <div key={node.id} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span className="text-xs text-white/70">{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: architecture diagram */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
                  system.architecture
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    {!shouldReduceMotion && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-sky opacity-75" />
                    )}
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-sky" />
                  </span>
                  <span className="font-mono text-[0.55rem] uppercase tracking-wider text-white/40">Live</span>
                </div>
              </div>

              <ArchitectureDiagram
                nodes={active.nodes}
                connections={active.connections}
                width={360}
                height={280}
                baseDelay={0.1}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
