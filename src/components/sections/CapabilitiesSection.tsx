"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Reveal } from "../motion";

type Capability = {
  id: string;
  label: string;
  shortLabel: string;
  angle: number;
  description: string;
  services: string[];
  color: string;
};

const capabilities: Capability[] = [
  {
    id: "enterprise",
    label: "Enterprise & Operations Systems",
    shortLabel: "Enterprise",
    angle: 270,
    description: "Internal applications, ERP-connected workflows, inventory and operations tooling, administration systems, and process digitisation.",
    services: ["Internal applications", "ERP/CRM workflows", "Inventory tooling", "Admin systems", "Process digitisation"],
    color: "rgba(42,62,244,0.9)",
  },
  {
    id: "integration",
    label: "Integration & Payments",
    shortLabel: "Integration",
    angle: 342,
    description: "APIs, payment systems, reconciliation, system synchronisation, and enterprise integration between platforms that currently operate in silos.",
    services: ["APIs & connections", "Payment systems", "Reconciliation", "System sync", "Enterprise integration"],
    color: "rgba(93,211,255,0.9)",
  },
  {
    id: "ai",
    label: "AI & Automation",
    shortLabel: "AI & Auto",
    angle: 54,
    description: "Workflow automation, AI-assisted operations, document and data processing, customer-service automation, and intelligent operational tools.",
    services: ["Workflow automation", "AI-assisted ops", "Document processing", "Service automation", "Intelligent tools"],
    color: "rgba(167,139,250,0.9)",
  },
  {
    id: "digital",
    label: "Digital Products",
    shortLabel: "Digital",
    angle: 126,
    description: "Web applications, mobile apps, commerce platforms, customer portals, and SaaS products designed around real user journeys.",
    services: ["Web applications", "Mobile apps", "Commerce platforms", "Customer portals", "SaaS products"],
    color: "rgba(34,197,94,0.9)",
  },
  {
    id: "specialized",
    label: "Specialized Technology",
    shortLabel: "Specialized",
    angle: 198,
    description: "Bitcoin, blockchain, wallets, digital assets, tokenization, and supporting operational technology for businesses that need it.",
    services: ["Bitcoin applications", "Blockchain & smart contracts", "Wallets & digital assets", "Tokenization", "Operational tech"],
    color: "rgba(251,191,36,0.9)",
  },
];

const RADIUS = 130;
const CX = 200;
const CY = 200;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function nodePos(angle: number) {
  return {
    x: CX + RADIUS * Math.cos(toRad(angle)),
    y: CY + RADIUS * Math.sin(toRad(angle)),
  };
}

export function CapabilitiesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const active = capabilities.find((c) => c.id === activeId) ?? null;

  return (
    <section id="capabilities" className="relative overflow-hidden bg-[var(--bg-alt)] py-14 lg:py-20">
      <div className="absolute inset-0 tech-grid-dense opacity-30" />
      <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="section-shell relative">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <Reveal delay={0.05}>
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
              Capabilities
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              The technical range to match{" "}
              <span className="headline-gradient">any operational problem.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Astan does not have a preferred technology. We have a broad capability set that lets us select the right intervention based on what the problem actually requires.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-start">
          {/* Left: constellation SVG */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-[400px]">
              <svg viewBox="0 0 400 400" className="w-full" style={{ height: 400 }}>
                <defs>
                  <pattern id="cap-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#cap-grid)" />

                {/* Outer ring */}
                <circle cx={CX} cy={CY} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={1} strokeDasharray="4 4" />

                {/* Connection lines */}
                {capabilities.map((cap) => {
                  const pos = nodePos(cap.angle);
                  const isActive = activeId === cap.id;
                  const isDimmed = activeId !== null && !isActive;
                  return (
                    <motion.line
                      key={cap.id}
                      x1={CX} y1={CY}
                      x2={pos.x} y2={pos.y}
                      stroke={isActive ? cap.color : "rgba(255,255,255,0.06)"}
                      strokeWidth={isActive ? 1.5 : 1}
                      animate={{ opacity: isDimmed ? 0.2 : 1 }}
                      transition={{ duration: 0.25 }}
                    />
                  );
                })}

                {/* Signal particles on active connection */}
                {activeId && !shouldReduceMotion && (() => {
                  const cap = capabilities.find((c) => c.id === activeId)!;
                  const pos = nodePos(cap.angle);
                  return (
                    <motion.circle
                      r={3}
                      fill={cap.color}
                      initial={{ opacity: 0 }}
                      animate={{
                        cx: [CX, pos.x],
                        cy: [CY, pos.y],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    />
                  );
                })()}

                {/* Capability nodes */}
                {capabilities.map((cap, i) => {
                  const pos = nodePos(cap.angle);
                  const isActive = activeId === cap.id;
                  const isDimmed = activeId !== null && !isActive;

                  // Label positioning
                  const labelOffsetX = pos.x < CX - 20 ? -14 : pos.x > CX + 20 ? 14 : 0;
                  const labelOffsetY = pos.y < CY - 20 ? -22 : pos.y > CY + 20 ? 22 : 0;
                  const textAnchor = pos.x < CX - 20 ? "end" : pos.x > CX + 20 ? "start" : "middle";

                  return (
                    <motion.g
                      key={cap.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveId(activeId === cap.id ? null : cap.id)}
                      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      animate={{ opacity: isDimmed ? 0.3 : 1 }}
                    >
                      {/* Glow */}
                      {isActive && !shouldReduceMotion && (
                        <motion.circle
                          cx={pos.x} cy={pos.y} r={20}
                          fill={cap.color}
                          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{ opacity: 0.15 }}
                        />
                      )}
                      {/* Node */}
                      <circle
                        cx={pos.x} cy={pos.y} r={12}
                        fill={isActive ? `${cap.color}20` : "rgba(255,255,255,0.04)"}
                        stroke={isActive ? cap.color : "rgba(255,255,255,0.12)"}
                        strokeWidth={isActive ? 2 : 1.5}
                      />
                      <circle cx={pos.x} cy={pos.y} r={4} fill={isActive ? cap.color : "rgba(255,255,255,0.3)"} />
                      {/* Label */}
                      <text
                        x={pos.x + labelOffsetX}
                        y={pos.y + labelOffsetY}
                        textAnchor={textAnchor}
                        fill={isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)"}
                        fontSize={9}
                        fontFamily="IBM Plex Mono, monospace"
                        fontWeight={isActive ? 600 : 400}
                      >
                        {cap.shortLabel.toUpperCase()}
                      </text>
                    </motion.g>
                  );
                })}

                {/* Center: ASTAN node */}
                <motion.g
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {!shouldReduceMotion && (
                    <motion.circle
                      cx={CX} cy={CY} r={28}
                      fill="rgba(42,62,244,0.08)"
                      animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <circle cx={CX} cy={CY} r={22} fill="rgba(42,62,244,0.15)" stroke="rgba(42,62,244,0.5)" strokeWidth={1.5} />
                  <text
                    x={CX} y={CY + 4}
                    textAnchor="middle"
                    fill="rgba(42,62,244,0.95)"
                    fontSize={9}
                    fontFamily="IBM Plex Mono, monospace"
                    fontWeight={700}
                    letterSpacing="0.1em"
                  >
                    ASTAN
                  </text>
                </motion.g>
              </svg>

              <p className="mt-2 text-center font-mono text-[0.6rem] uppercase tracking-wider text-white/25">
                Select a capability
              </p>
            </div>
          </Reveal>

          {/* Right: detail panel */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  {/* Header */}
                  <div className="mb-5 flex items-start gap-4">
                    <div
                      className="mt-0.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: active.color, boxShadow: `0 0 8px ${active.color}` }}
                    />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{active.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{active.description}</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
                      Includes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {active.services.map((service, i) => (
                        <motion.span
                          key={service}
                          initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.05 }}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/75"
                        >
                          {service}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-white/[0.06]"
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-white/20">
                    Select a node to explore
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile: list fallback */}
            <div className="mt-6 space-y-2 lg:hidden">
              {capabilities.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveId(activeId === cap.id ? null : cap.id)}
                  className="flex w-full items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-left transition hover:border-white/[0.1]"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: cap.color }} />
                  <span className="text-sm font-medium text-white/70">{cap.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
