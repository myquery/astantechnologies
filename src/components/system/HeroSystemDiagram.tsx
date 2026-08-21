"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type SystemState = "disconnected" | "diagnosing" | "connecting" | "connected";

const nodes = [
  { id: "customer", label: "Customer", x: 110, y: 70 },
  { id: "orders",   label: "Orders",   x: 430, y: 70 },
  { id: "inventory",label: "Inventory", x: 110, y: 190 },
  { id: "payments", label: "Payments",  x: 270, y: 270 },
  { id: "erp",      label: "ERP",       x: 430, y: 190 },
  { id: "support",  label: "Support",   x: 270, y: 350 },
];

const connections = [
  { from: "customer", to: "orders" },
  { from: "orders", to: "inventory" },
  { from: "orders", to: "erp" },
  { from: "inventory", to: "erp" },
  { from: "payments", to: "erp" },
  { from: "support", to: "customer" },
  { from: "support", to: "orders" },
];

export function HeroSystemDiagram() {
  const shouldReduceMotion = useReducedMotion();
  const [systemState, setSystemState] = useState<SystemState>("disconnected");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || hasAnimated) {
      setSystemState("connected");
      return;
    }

    const sequence = [
      { state: "disconnected" as const, delay: 800 },
      { state: "diagnosing" as const, delay: 2000 },
      { state: "connecting" as const, delay: 2500 },
      { state: "connected" as const, delay: 2000 },
    ];

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const runSequence = () => {
      if (currentIndex < sequence.length) {
        const item = sequence[currentIndex];
        if (item) {
          setSystemState(item.state);
          currentIndex++;
          if (currentIndex < sequence.length) {
            timeoutId = setTimeout(runSequence, item.delay);
          } else {
            setHasAnimated(true);
          }
        }
      }
    };

    timeoutId = setTimeout(runSequence, 500);

    return () => clearTimeout(timeoutId);
  }, [shouldReduceMotion, hasAnimated]);

  const getNodeStatus = (nodeId: string) => {
    if (systemState === "disconnected") return "idle";
    if (systemState === "diagnosing") {
      // Highlight problem nodes
      if (["inventory", "payments", "support"].includes(nodeId)) return "error";
      return "idle";
    }
    if (systemState === "connecting") return "pending";
    return "active";
  };

  const getConnectionStatus = (index: number) => {
    if (systemState === "disconnected") return "disconnected";
    if (systemState === "diagnosing") {
      // Show some connections as broken
      if (index % 2 === 0) return "error";
      return "disconnected";
    }
    if (systemState === "connecting") return "connecting";
    return "connected";
  };

  const nodeColors = {
    idle: { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.1)", text: "rgba(255,255,255,0.4)" },
    active: { bg: "rgba(42,62,244,0.15)", border: "rgba(42,62,244,0.5)", text: "rgba(255,255,255,0.9)" },
    error: { bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.4)", text: "rgba(239,68,68,0.8)" },
    pending: { bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.4)", text: "rgba(251,191,36,0.8)" },
  };

  const connectionColors = {
    disconnected: "rgba(255,255,255,0.06)",
    error: "rgba(239,68,68,0.4)",
    connecting: "rgba(251,191,36,0.5)",
    connected: "rgba(42,62,244,0.6)",
  };

  return (
    <div className="relative w-full" style={{ aspectRatio: "16/11" }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <svg viewBox="0 0 540 420" className="w-full h-full">
        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from)!;
          const toNode = nodes.find((n) => n.id === conn.to)!;
          const status = getConnectionStatus(index);

          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={connectionColors[status]}
              strokeWidth={status === "connected" ? 2 : 1}
              strokeDasharray={status === "disconnected" ? "4 4" : "none"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: status === "disconnected" ? 0.3 : 1,
                opacity: 1,
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            />
          );
        })}

        {/* Data flow particles (only when connected) */}
        {systemState === "connected" &&
          !shouldReduceMotion &&
          connections.slice(0, 3).map((conn, index) => {
            const fromNode = nodes.find((n) => n.id === conn.from)!;
            const toNode = nodes.find((n) => n.id === conn.to)!;

            return (
              <motion.circle
                key={`signal-${conn.from}-${conn.to}`}
                r={3}
                fill="#5dd3ff"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [fromNode.x, toNode.x],
                  cy: [fromNode.y, toNode.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.8,
                  ease: "linear",
                }}
              />
            );
          })}

        {/* Nodes */}
        {nodes.map((node, index) => {
          const status = getNodeStatus(node.id);
          const colors = nodeColors[status];

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Glow for active nodes */}
              {status === "active" && !shouldReduceMotion && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={20}
                  fill="rgba(42,62,244,0.2)"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              {/* Error pulse */}
              {status === "error" && !shouldReduceMotion && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={12}
                  fill="none"
                  stroke="rgba(239,68,68,0.5)"
                  strokeWidth={1}
                  animate={{ opacity: [0.8, 0], scale: [1, 1.8] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              {/* Main node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={12}
                fill={colors.bg}
                stroke={colors.border}
                strokeWidth={1.5}
              />

              {/* Inner dot */}
              <circle cx={node.x} cy={node.y} r={4} fill={colors.text} />

              {/* Label */}
              <text
                x={node.x}
                y={node.y + 26}
                textAnchor="middle"
                fill={colors.text}
                fontSize={9}
                fontFamily="IBM Plex Mono, monospace"
                fontWeight={500}
                letterSpacing="0.08em"
              >
                {node.label.toUpperCase()}
              </text>
            </motion.g>
          );
        })}

        {/* Astan coordination layer (appears when connecting/connected) */}
        {(systemState === "connecting" || systemState === "connected") && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <rect
              x={215}
              y={155}
              width={110}
              height={28}
              rx={5}
              fill="rgba(42,62,244,0.15)"
              stroke="rgba(42,62,244,0.4)"
              strokeWidth={1}
            />
            <text
              x={270}
              y={174}
              textAnchor="middle"
              fill="rgba(42,62,244,0.9)"
              fontSize={8}
              fontFamily="IBM Plex Mono, monospace"
              fontWeight={600}
              letterSpacing="0.1em"
            >
              ASTAN
            </text>
          </motion.g>
        )}
      </svg>

      {/* Status indicator */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <motion.span
          className="relative flex h-2 w-2"
          animate={{
            backgroundColor:
              systemState === "connected"
                ? "#22c55e"
                : systemState === "diagnosing" || systemState === "connecting"
                ? "#fbbf24"
                : "rgba(255,255,255,0.3)",
          }}
          style={{ borderRadius: "50%" }}
        >
          {(systemState === "connecting" || systemState === "connected") && !shouldReduceMotion && (
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor:
                  systemState === "connected" ? "#22c55e" : "#fbbf24",
              }}
              animate={{ opacity: [0.5, 0], scale: [1, 2] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          )}
        </motion.span>
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/50">
          {systemState === "disconnected" && "Systems disconnected"}
          {systemState === "diagnosing" && "Diagnosing friction"}
          {systemState === "connecting" && "Establishing connections"}
          {systemState === "connected" && "Operations connected"}
        </span>
      </div>
    </div>
  );
}
