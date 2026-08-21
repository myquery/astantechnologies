"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Reveal } from "../motion";

type SolutionMode = {
  id: string;
  label: string;
  title: string;
  description: string;
  color: string;
  nodes: { id: string; label: string; x: number; y: number }[];
  connections: { from: string; to: string; label?: string }[];
};

const modes: SolutionMode[] = [
  {
    id: "build",
    label: "BUILD",
    title: "Custom systems",
    description: "When bespoke software is the right answer — built around your exact workflows, data model, and operational reality.",
    color: "rgba(42,62,244,0.9)",
    nodes: [
      { id: "req", label: "Requirements", x: 50, y: 40 },
      { id: "design", label: "Design", x: 160, y: 40 },
      { id: "dev", label: "Development", x: 105, y: 110 },
      { id: "system", label: "Your System", x: 105, y: 175 },
    ],
    connections: [
      { from: "req", to: "design" },
      { from: "design", to: "dev" },
      { from: "req", to: "dev" },
      { from: "dev", to: "system" },
    ],
  },
  {
    id: "buy",
    label: "BUY",
    title: "Existing products",
    description: "When rebuilding an existing product would add little value — we identify, evaluate, and implement the right platform.",
    color: "rgba(34,197,94,0.9)",
    nodes: [
      { id: "eval", label: "Evaluate", x: 50, y: 40 },
      { id: "platform", label: "Platform", x: 160, y: 40 },
      { id: "config", label: "Configure", x: 105, y: 110 },
      { id: "ops", label: "Operations", x: 105, y: 175 },
    ],
    connections: [
      { from: "eval", to: "platform" },
      { from: "platform", to: "config" },
      { from: "config", to: "ops" },
    ],
  },
  {
    id: "automate",
    label: "AUTOMATE",
    title: "AI & workflow automation",
    description: "Where repetitive work can be removed — applying AI, rules engines, and workflow automation to eliminate manual overhead.",
    color: "rgba(167,139,250,0.9)",
    nodes: [
      { id: "invoice", label: "Invoice", x: 105, y: 20 },
      { id: "process", label: "Processing", x: 105, y: 70 },
      { id: "rules", label: "Rules", x: 105, y: 120 },
      { id: "approval", label: "Approval", x: 105, y: 170 },
      { id: "erp", label: "ERP", x: 105, y: 220 },
    ],
    connections: [
      { from: "invoice", to: "process" },
      { from: "process", to: "rules" },
      { from: "rules", to: "approval" },
      { from: "approval", to: "erp" },
    ],
  },
  {
    id: "integrate",
    label: "INTEGRATE",
    title: "System connections",
    description: "Connecting systems that currently operate in silos — APIs, data synchronisation, and enterprise integration.",
    color: "rgba(93,211,255,0.9)",
    nodes: [
      { id: "commerce", label: "Commerce", x: 30, y: 40 },
      { id: "api", label: "API", x: 115, y: 40 },
      { id: "inventory", label: "Inventory", x: 200, y: 40 },
      { id: "payments", label: "Payments", x: 60, y: 120 },
      { id: "finance", label: "Finance", x: 170, y: 120 },
    ],
    connections: [
      { from: "commerce", to: "api" },
      { from: "api", to: "inventory" },
      { from: "commerce", to: "payments" },
      { from: "payments", to: "finance" },
      { from: "api", to: "finance" },
    ],
  },
  {
    id: "source",
    label: "SOURCE",
    title: "Supporting technology",
    description: "Identifying or coordinating the hardware, third-party systems, or external services needed to complete an Astan-led solution.",
    color: "rgba(251,191,36,0.9)",
    nodes: [
      { id: "astan", label: "Astan", x: 115, y: 110 },
      { id: "hw", label: "Hardware", x: 30, y: 40 },
      { id: "vendor", label: "Vendor", x: 115, y: 40 },
      { id: "ext", label: "External", x: 200, y: 40 },
      { id: "solution", label: "Solution", x: 115, y: 180 },
    ],
    connections: [
      { from: "hw", to: "astan" },
      { from: "vendor", to: "astan" },
      { from: "ext", to: "astan" },
      { from: "astan", to: "solution" },
    ],
  },
  {
    id: "hybrid",
    label: "HYBRID",
    title: "Combined approach",
    description: "Most real problems require a combination. Astan selects and composes the right mix based on the problem, not a preferred technology.",
    color: "rgba(239,68,68,0.8)",
    nodes: [
      { id: "custom", label: "Custom App", x: 115, y: 20 },
      { id: "ai", label: "AI", x: 30, y: 90 },
      { id: "erp", label: "ERP", x: 200, y: 90 },
      { id: "payments", label: "Payments", x: 115, y: 160 },
      { id: "platform", label: "Platform", x: 30, y: 160 },
    ],
    connections: [
      { from: "custom", to: "ai" },
      { from: "custom", to: "erp" },
      { from: "custom", to: "payments" },
      { from: "ai", to: "payments" },
      { from: "platform", to: "payments" },
    ],
  },
];

function ComposerDiagram({ mode }: { mode: SolutionMode }) {
  const shouldReduceMotion = useReducedMotion();
  type ModeNode = SolutionMode["nodes"][number];
  const nodeMap = new Map<string, ModeNode>(mode.nodes.map((n) => [n.id, n]));

  const minY = Math.min(...mode.nodes.map((n) => n.y));
  const maxY = Math.max(...mode.nodes.map((n) => n.y));
  const height = Math.max(maxY - minY + 60, 160);

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
          architecture.view
        </span>
        <span
          className="rounded-full border px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider"
          style={{ borderColor: `${mode.color}40`, color: mode.color }}
        >
          {mode.label}
        </span>
      </div>

      <svg viewBox={`0 0 240 ${height}`} className="w-full" style={{ height: Math.min(height, 200) }}>
        <defs>
          <pattern id={`cgrid-${mode.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="240" height={height} fill={`url(#cgrid-${mode.id})`} />

        {/* Connections */}
        {mode.connections.map((conn, i) => {
          const from = nodeMap.get(conn.from)!;
          const to = nodeMap.get(conn.to)!;
          if (!from || !to) return null;
          return (
            <g key={i}>
              <motion.line
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                stroke={mode.color}
                strokeWidth={1.5}
                strokeLinecap="round"
                opacity={0.5}
                initial={shouldReduceMotion ? {} : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              />
              {!shouldReduceMotion && (
                <motion.circle
                  r={2}
                  fill={mode.color}
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [from.x, to.x],
                    cy: [from.y, to.y],
                    opacity: [0, 0.9, 0.9, 0],
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {mode.nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
          >
            <circle
              cx={node.x} cy={node.y} r={10}
              fill={`${mode.color}15`}
              stroke={mode.color}
              strokeWidth={1.5}
              opacity={0.8}
            />
            <circle cx={node.x} cy={node.y} r={3} fill={mode.color} />
            <text
              x={node.x} y={node.y + 22}
              textAnchor="middle"
              fill="rgba(255,255,255,0.5)"
              fontSize={8}
              fontFamily="IBM Plex Mono, monospace"
            >
              {node.label.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export function SolutionComposer() {
  const [activeId, setActiveId] = useState(modes[0]!.id);
  const shouldReduceMotion = useReducedMotion();
  const active = modes.find((m) => m.id === activeId)!;

  return (
    <section id="solutions" className="relative overflow-hidden bg-brand-ink py-14 lg:py-20">
      <div className="absolute inset-0 tech-grid opacity-25" />
      <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-sky/[0.03] blur-[100px]" />

      <div className="section-shell relative">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <Reveal delay={0.05}>
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
              Solution composition
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              We don't sell a technology.{" "}
              <span className="headline-gradient">We compose the right solution.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Most real operational problems require a combination of approaches. Astan selects and composes the right mix based on the problem — not a preferred technology.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left: mode selector + description */}
          <div>
            {/* Mode tabs */}
            <Reveal delay={0.2}>
              <div className="mb-8 flex flex-wrap gap-2">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveId(mode.id)}
                    className="rounded-lg border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                    style={{
                      borderColor: activeId === mode.id ? `${mode.color}60` : "rgba(255,255,255,0.08)",
                      backgroundColor: activeId === mode.id ? `${mode.color}12` : "rgba(255,255,255,0.02)",
                      color: activeId === mode.id ? mode.color : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Active mode detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="rounded-md border px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider"
                    style={{ borderColor: `${active.color}40`, color: active.color, backgroundColor: `${active.color}10` }}
                  >
                    {active.label}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">{active.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/75">{active.description}</p>

                {/* When to use */}
                <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
                    When Astan recommends this
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    {active.id === "build" && "No existing product fits the operational reality. Custom logic, data model, or workflow is required."}
                    {active.id === "buy" && "A mature product already solves the problem well. Rebuilding it would add cost without adding value."}
                    {active.id === "automate" && "Repetitive manual work is consuming team capacity. The process is defined and consistent enough to automate."}
                    {active.id === "integrate" && "Good systems already exist but don't communicate. The problem is connection, not capability."}
                    {active.id === "source" && "The solution requires hardware, specialist vendors, or external services that Astan coordinates rather than builds."}
                    {active.id === "hybrid" && "The problem is complex enough that no single approach covers it. The right answer is a composed architecture."}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* All modes grid (mobile) */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveId(mode.id)}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-left transition hover:border-white/[0.1]"
                >
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-wider"
                    style={{ color: mode.color }}
                  >
                    {mode.label}
                  </span>
                  <p className="mt-1 text-xs text-white/50">{mode.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right: architecture diagram */}
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <ComposerDiagram mode={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
