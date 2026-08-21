"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Reveal } from "../motion";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We study how your operations actually work — the workflows, tools, handoffs, and workarounds — to find where friction is concentrated.",
    diagram: {
      nodes: [
        { id: "ops", label: "Operations", x: 50, y: 40, status: "error" as const },
        { id: "team", label: "Team", x: 160, y: 40, status: "error" as const },
        { id: "tools", label: "Tools", x: 105, y: 110, status: "error" as const },
      ],
      connections: [
        { from: "ops", to: "team", broken: true },
        { from: "team", to: "tools", broken: true },
      ],
      label: "Friction identified",
      labelColor: "rgba(239,68,68,0.8)",
    },
  },
  {
    number: "02",
    title: "Validate",
    description:
      "We confirm the business problem is real, measurable, and worth solving before any technology decisions are made.",
    diagram: {
      nodes: [
        { id: "problem", label: "Problem", x: 50, y: 40, status: "pending" as const },
        { id: "impact", label: "Impact", x: 160, y: 40, status: "pending" as const },
        { id: "scope", label: "Scope", x: 105, y: 110, status: "pending" as const },
      ],
      connections: [
        { from: "problem", to: "impact", broken: false },
        { from: "impact", to: "scope", broken: false },
      ],
      label: "Problem confirmed",
      labelColor: "rgba(251,191,36,0.8)",
    },
  },
  {
    number: "03",
    title: "Architect",
    description:
      "We design the solution architecture: what to build, buy, automate, integrate, and what supporting technology is needed.",
    diagram: {
      nodes: [
        { id: "build", label: "Build", x: 30, y: 30, status: "idle" as const },
        { id: "buy", label: "Buy", x: 120, y: 30, status: "idle" as const },
        { id: "automate", label: "Automate", x: 200, y: 30, status: "idle" as const },
        { id: "arch", label: "Architecture", x: 115, y: 110, status: "active" as const },
      ],
      connections: [
        { from: "build", to: "arch", broken: false },
        { from: "buy", to: "arch", broken: false },
        { from: "automate", to: "arch", broken: false },
      ],
      label: "Solution designed",
      labelColor: "rgba(42,62,244,0.9)",
    },
  },
  {
    number: "04",
    title: "Compose",
    description:
      "We assemble the right combination of custom software, platforms, AI, automation, integrations, and third-party systems into one coherent solution.",
    diagram: {
      nodes: [
        { id: "custom", label: "Custom", x: 30, y: 40, status: "active" as const },
        { id: "platform", label: "Platform", x: 115, y: 40, status: "active" as const },
        { id: "ai", label: "AI", x: 200, y: 40, status: "active" as const },
        { id: "solution", label: "Solution", x: 115, y: 110, status: "active" as const },
      ],
      connections: [
        { from: "custom", to: "solution", broken: false },
        { from: "platform", to: "solution", broken: false },
        { from: "ai", to: "solution", broken: false },
      ],
      label: "Components assembled",
      labelColor: "rgba(93,211,255,0.8)",
    },
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Astan leads technical delivery from development through launch, including training, handoff, and the operational context your team needs to run it.",
    diagram: {
      nodes: [
        { id: "dev", label: "Dev", x: 50, y: 40, status: "success" as const },
        { id: "test", label: "Test", x: 160, y: 40, status: "success" as const },
        { id: "launch", label: "Live", x: 105, y: 110, status: "success" as const },
      ],
      connections: [
        { from: "dev", to: "test", broken: false },
        { from: "test", to: "launch", broken: false },
      ],
      label: "System delivered",
      labelColor: "rgba(34,197,94,0.8)",
    },
  },
  {
    number: "06",
    title: "Improve",
    description:
      "The system evolves. We monitor performance, gather feedback, and refine the solution as your operations grow and change.",
    diagram: {
      nodes: [
        { id: "monitor", label: "Monitor", x: 50, y: 40, status: "active" as const },
        { id: "feedback", label: "Feedback", x: 160, y: 40, status: "active" as const },
        { id: "refine", label: "Refine", x: 105, y: 110, status: "active" as const },
      ],
      connections: [
        { from: "monitor", to: "feedback", broken: false },
        { from: "feedback", to: "refine", broken: false },
        { from: "refine", to: "monitor", broken: false },
      ],
      label: "Continuous improvement",
      labelColor: "rgba(93,211,255,0.8)",
    },
  },
];

type NodeStatus = "idle" | "active" | "error" | "success" | "pending";

const nodeColors: Record<NodeStatus, { bg: string; border: string; dot: string }> = {
  idle: { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.1)", dot: "rgba(255,255,255,0.3)" },
  active: { bg: "rgba(42,62,244,0.15)", border: "rgba(42,62,244,0.5)", dot: "rgba(42,62,244,0.9)" },
  error: { bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.4)", dot: "rgba(239,68,68,0.8)" },
  success: { bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.4)", dot: "rgba(34,197,94,0.8)" },
  pending: { bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.4)", dot: "rgba(251,191,36,0.8)" },
};

type DiagramNodeEntry = { id: string; label: string; x: number; y: number; status: NodeStatus };

function StepDiagram({ step, visible }: { step: typeof steps[0]; visible: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const { diagram } = step;

  const nodeMap = new Map<string, DiagramNodeEntry>(
    (diagram.nodes as DiagramNodeEntry[]).map((n) => [n.id, n])
  );

  return (
    <motion.div
      key={step.number}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
          step.{step.number}
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-wider" style={{ color: diagram.labelColor }}>
          {diagram.label}
        </span>
      </div>

      <svg viewBox="0 0 240 150" className="w-full" style={{ height: 120 }}>
        <defs>
          <pattern id={`pgrid-${step.number}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="240" height="150" fill={`url(#pgrid-${step.number})`} />

        {/* Connections */}
        {diagram.connections.map((conn, i) => {
          const from = nodeMap.get(conn.from)!;
          const to = nodeMap.get(conn.to)!;
          return (
            <g key={i}>
              <line
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                stroke={conn.broken ? "rgba(239,68,68,0.3)" : "rgba(42,62,244,0.4)"}
                strokeWidth={1.5}
                strokeDasharray={conn.broken ? "3 3" : "none"}
                strokeLinecap="round"
              />
              {!conn.broken && !shouldReduceMotion && visible && (
                <motion.circle
                  r={2.5}
                  fill={diagram.labelColor}
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [from.x, to.x],
                    cy: [from.y, to.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {diagram.nodes.map((node, i) => {
          const colors = nodeColors[node.status];
          return (
            <motion.g
              key={node.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: visible ? 1 : 0.3, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <circle cx={node.x} cy={node.y} r={10} fill={colors.bg} stroke={colors.border} strokeWidth={1.5} />
              <circle cx={node.x} cy={node.y} r={3} fill={colors.dot} />
              <text
                x={node.x} y={node.y + 22}
                textAnchor="middle"
                fill="rgba(255,255,255,0.45)"
                fontSize={8}
                fontFamily="IBM Plex Mono, monospace"
              >
                {node.label.toUpperCase()}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry?.isIntersecting) setActiveStep(index); },
        { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [shouldReduceMotion]);

  return (
    <section id="how-we-work" className="relative overflow-hidden bg-brand-ink py-14 lg:py-20">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-sky/[0.03] blur-[120px]" />

      <div className="section-shell relative" ref={sectionRef}>
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <Reveal delay={0.05}>
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
              How we work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              From operational pain{" "}
              <span className="headline-gradient">to delivered solution.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Astan does not start with technology. We start with the problem. Every engagement follows a structured path from diagnosis through delivery.
            </p>
          </Reveal>
        </div>

        {/* Desktop: two-column sticky layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Left: steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.06]" />
            {/* Progress line */}
            <motion.div
              className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-primary to-brand-sky origin-top"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              animate={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <div className="space-y-0">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;
                return (
                  <div
                    key={step.number}
                    ref={(el) => { stepRefs.current[index] = el; }}
                    className="relative flex gap-8 pb-16 last:pb-0 cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Node on the line */}
                    <div className="relative z-10 mt-1 shrink-0">
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs font-semibold transition-all duration-300"
                        animate={{
                          borderColor: isActive ? "rgba(42,62,244,0.6)" : isPast ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.1)",
                          backgroundColor: isActive ? "rgba(42,62,244,0.15)" : isPast ? "rgba(34,197,94,0.08)" : "rgba(255,255,255,0.03)",
                          color: isActive ? "rgba(42,62,244,1)" : isPast ? "rgba(34,197,94,0.8)" : "rgba(255,255,255,0.3)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {isPast ? "✓" : step.number}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <motion.h3
                        className="font-display text-xl font-semibold transition-colors duration-300"
                        animate={{ color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.35)" }}
                      >
                        {step.title}
                      </motion.h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                            className="mt-3 text-sm leading-relaxed text-white/70 overflow-hidden"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: sticky diagram */}
          <div className="sticky top-32 self-start">
            <AnimatePresence mode="wait">
              <StepDiagram key={activeStep} step={steps[activeStep]!} visible={true} />
            </AnimatePresence>

            {/* Step counter */}
            <div className="mt-4 flex items-center justify-between px-1">
              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeStep ? 24 : 6,
                      backgroundColor: i === activeStep ? "rgba(42,62,244,0.8)" : i < activeStep ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-[0.6rem] text-white/40">
                {String(activeStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="space-y-4 lg:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs font-semibold text-white/70">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
