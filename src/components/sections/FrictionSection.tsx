"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Reveal } from "../motion";

type FrictionPattern = {
  id: string;
  label: string;
  icon: string;
  description: string;
  signals: string[];
  cost: string;
  color: string;
};

const frictionPatterns: FrictionPattern[] = [
  {
    id: "manual-ops",
    label: "Manual Operations",
    icon: "⚙",
    description: "Repetitive human tasks that should be automated — data entry, report generation, status updates — consuming hours that compound into weeks.",
    signals: ["Staff doing the same task daily", "Errors from copy-paste workflows", "Bottleneck when one person is absent"],
    cost: "20–40% of team capacity",
    color: "rgba(251,191,36,0.7)",
  },
  {
    id: "data-silos",
    label: "Disconnected Systems",
    icon: "⬡",
    description: "Tools that don't talk to each other force manual reconciliation. Every sync is a failure point. Every export is a delay.",
    signals: ["Exporting CSVs between platforms", "Duplicate data entry across tools", "No single source of truth"],
    cost: "Hours lost per sync cycle",
    color: "rgba(239,68,68,0.7)",
  },
  {
    id: "visibility-gap",
    label: "Visibility Gaps",
    icon: "◎",
    description: "Decisions made without real-time data. Leaders flying blind on operations, inventory, pipeline, or team performance.",
    signals: ["Waiting for end-of-week reports", "Gut-feel decisions on critical ops", "Surprises that should have been predictable"],
    cost: "Delayed decisions, missed signals",
    color: "rgba(93,211,255,0.7)",
  },
  {
    id: "scale-ceiling",
    label: "Scale Ceiling",
    icon: "△",
    description: "Systems built for 10 people breaking under 50. Infrastructure that worked at launch becoming the constraint on growth.",
    signals: ["Performance degrades as volume grows", "Workarounds piling on workarounds", "Onboarding new staff takes weeks"],
    cost: "Growth capped by infrastructure",
    color: "rgba(42,62,244,0.8)",
  },
];

function FrictionNode({
  pattern,
  isActive,
  onClick,
  index,
}: {
  pattern: FrictionPattern;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
        isActive
          ? "border-white/20 bg-white/[0.06]"
          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] hover:bg-white/[0.04]"
      }`}
    >
      {/* Active indicator bar */}
      <motion.div
        className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full"
        style={{ background: pattern.color }}
        animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.4 }}
        transition={{ duration: 0.25 }}
      />

      <div className="flex items-start gap-4 pl-3">
        {/* Icon */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] font-mono text-lg transition-all duration-300"
          style={{ color: isActive ? pattern.color : "rgba(255,255,255,0.4)" }}
        >
          {pattern.icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-white/90">{pattern.label}</p>
          <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider" style={{ color: pattern.color }}>
            {pattern.cost}
          </p>
        </div>

        {/* Chevron */}
        <motion.svg
          className="mt-1 h-4 w-4 shrink-0 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </motion.svg>
      </div>
    </motion.button>
  );
}

function FrictionDetail({ pattern }: { pattern: FrictionPattern }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pattern.id}
      initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl border font-mono text-2xl"
          style={{ borderColor: `${pattern.color}40`, background: `${pattern.color}12`, color: pattern.color }}
        >
          {pattern.icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{pattern.label}</h3>
          <p className="font-mono text-[0.6rem] uppercase tracking-wider" style={{ color: pattern.color }}>
            Friction Pattern
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/75">{pattern.description}</p>

      {/* Signals */}
      <div className="mt-6">
        <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
          Signals to watch for
        </p>
        <ul className="space-y-2">
          {pattern.signals.map((signal, i) => (
            <motion.li
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="flex items-start gap-3 text-sm text-white/75"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: pattern.color }}
              />
              {signal}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Cost callout */}
      <div
        className="mt-6 rounded-xl border p-4"
        style={{ borderColor: `${pattern.color}25`, background: `${pattern.color}08` }}
      >
        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">Typical cost</p>
        <p className="mt-1 font-display text-base font-semibold" style={{ color: pattern.color }}>
          {pattern.cost}
        </p>
      </div>
    </motion.div>
  );
}

function FrictionVisualization({ activeId }: { activeId: string }) {
  const shouldReduceMotion = useReducedMotion();
  const active = frictionPatterns.find((p) => p.id === activeId)!;

  // Simple SVG friction visualization — a "blocked flow" diagram
  const nodes = [
    { x: 60, y: 80, label: "Input" },
    { x: 200, y: 80, label: "Process" },
    { x: 340, y: 80, label: "Output" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
      {/* Label */}
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">friction.map</span>
        <span
          className="rounded-full border px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider"
          style={{ borderColor: `${active.color}40`, color: active.color }}
        >
          {active.label}
        </span>
      </div>

      {/* SVG diagram */}
      <svg viewBox="0 0 400 160" className="w-full" style={{ height: 160 }}>
        {/* Grid */}
        <defs>
          <pattern id="friction-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="160" fill="url(#friction-grid)" />

        {/* Connection lines */}
        {nodes.slice(0, -1).map((node, i) => {
          const next = nodes[i + 1]!;
          const isBlocked = i === 1; // block between Process → Output
          return (
            <g key={i}>
              {/* Base line */}
              <line
                x1={node.x + 30}
                y1={node.y}
                x2={next.x - 30}
                y2={next.y}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth={1.5}
                strokeDasharray="4 4"
              />
              {/* Animated flow line */}
              {!isBlocked && (
                <motion.line
                  x1={node.x + 30}
                  y1={node.y}
                  x2={next.x - 30}
                  y2={next.y}
                  stroke={active.color}
                  strokeWidth={2}
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
              {/* Friction block marker */}
              {isBlocked && (
                <g>
                  <motion.line
                    x1={node.x + 30}
                    y1={node.y}
                    x2={(node.x + next.x) / 2 - 10}
                    y2={node.y}
                    stroke={active.color}
                    strokeWidth={2}
                    strokeLinecap="round"
                    opacity={0.5}
                    initial={shouldReduceMotion ? {} : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  />
                  {/* Block symbol */}
                  <motion.rect
                    x={(node.x + next.x) / 2 - 14}
                    y={node.y - 12}
                    width={28}
                    height={24}
                    rx={4}
                    fill={`${active.color}18`}
                    stroke={active.color}
                    strokeWidth={1.5}
                    initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    style={{ transformOrigin: `${(node.x + next.x) / 2}px ${node.y}px` }}
                  />
                  <motion.text
                    x={(node.x + next.x) / 2}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill={active.color}
                    fontSize={12}
                    fontFamily="IBM Plex Mono"
                    initial={shouldReduceMotion ? {} : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    ✕
                  </motion.text>
                  {/* Pulse on block */}
                  {!shouldReduceMotion && (
                    <motion.rect
                      x={(node.x + next.x) / 2 - 14}
                      y={node.y - 12}
                      width={28}
                      height={24}
                      rx={4}
                      fill="none"
                      stroke={active.color}
                      strokeWidth={1}
                      animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                      style={{ transformOrigin: `${(node.x + next.x) / 2}px ${node.y}px` }}
                    />
                  )}
                </g>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isOutput = i === nodes.length - 1;
          return (
            <g key={i}>
              <motion.rect
                x={node.x - 30}
                y={node.y - 20}
                width={60}
                height={40}
                rx={8}
                fill={isOutput ? `${active.color}10` : "rgba(255,255,255,0.04)"}
                stroke={isOutput ? `${active.color}40` : "rgba(255,255,255,0.08)"}
                strokeWidth={1.5}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              />
              <motion.text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fill={isOutput ? `${active.color}80` : "rgba(255,255,255,0.5)"}
                fontSize={9}
                fontFamily="IBM Plex Mono"
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                {node.label}
              </motion.text>
            </g>
          );
        })}

        {/* Friction label */}
        <motion.text
          x={270}
          y={120}
          textAnchor="middle"
          fill={active.color}
          fontSize={8}
          fontFamily="IBM Plex Mono"
          opacity={0.6}
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.7 }}
        >
          friction point
        </motion.text>
      </svg>
    </div>
  );
}

export function FrictionSection() {
  const [activeId, setActiveId] = useState(frictionPatterns[0]!.id);
  const activePattern = frictionPatterns.find((p) => p.id === activeId)!;

  return (
    <section id="friction" className="relative overflow-hidden bg-[var(--bg-alt)] py-14 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 tech-grid-dense opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[140px]" />

      <div className="section-shell relative">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <Reveal delay={0.05}>
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
              Where growth starts breaking
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              Friction is invisible{" "}
              <span className="headline-gradient">until it isn't.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Most operational problems don't announce themselves. They accumulate quietly — in workarounds, delays, and manual effort — until they become the ceiling on your growth.
            </p>
          </Reveal>
        </div>

        {/* Interactive layout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          {/* Left: pattern list */}
          <div className="space-y-3">
            {frictionPatterns.map((pattern, i) => (
              <FrictionNode
                key={pattern.id}
                pattern={pattern}
                isActive={activeId === pattern.id}
                onClick={() => setActiveId(pattern.id)}
                index={i}
              />
            ))}
          </div>

          {/* Right: detail + visualization */}
          <div className="flex flex-col gap-6">
            {/* Visualization */}
            <AnimatePresence mode="wait">
              <FrictionVisualization key={activeId} activeId={activeId} />
            </AnimatePresence>

            {/* Detail panel */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <AnimatePresence mode="wait">
                <FrictionDetail key={activeId} pattern={activePattern} />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white/80">Recognise any of these patterns?</p>
              <p className="mt-0.5 text-sm text-white/50">Astan diagnoses the root cause and designs the right solution — not just the obvious one.</p>
            </div>
            <a href="#contact" className="w-full sm:w-auto shrink-0 primary-button text-sm text-center">
              Let's diagnose it
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
