"use client";

import { motion, useReducedMotion } from "framer-motion";

export type NodeStatus = "idle" | "active" | "error" | "success" | "pending";

type SystemNodeProps = {
  id: string;
  label: string;
  x: number;
  y: number;
  status?: NodeStatus;
  size?: "sm" | "md" | "lg";
  delay?: number;
  showPulse?: boolean;
};

const statusColors: Record<NodeStatus, { bg: string; border: string; text: string; glow: string }> = {
  idle: {
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    text: "rgba(255,255,255,0.6)",
    glow: "transparent",
  },
  active: {
    bg: "rgba(42,62,244,0.15)",
    border: "rgba(42,62,244,0.5)",
    text: "rgba(255,255,255,0.9)",
    glow: "rgba(42,62,244,0.3)",
  },
  error: {
    bg: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.5)",
    text: "rgba(239,68,68,0.9)",
    glow: "rgba(239,68,68,0.2)",
  },
  success: {
    bg: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.5)",
    text: "rgba(34,197,94,0.9)",
    glow: "rgba(34,197,94,0.2)",
  },
  pending: {
    bg: "rgba(251,191,36,0.1)",
    border: "rgba(251,191,36,0.4)",
    text: "rgba(251,191,36,0.9)",
    glow: "rgba(251,191,36,0.15)",
  },
};

const sizes = {
  sm: { node: 8, font: 9, padding: 6 },
  md: { node: 10, font: 10, padding: 8 },
  lg: { node: 12, font: 11, padding: 10 },
};

export function SystemNode({
  label,
  x,
  y,
  status = "idle",
  size = "md",
  delay = 0,
  showPulse = false,
}: SystemNodeProps) {
  const shouldReduceMotion = useReducedMotion();
  const colors = statusColors[status];
  const sizeConfig = sizes[size];

  return (
    <motion.g
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Glow effect */}
      {(status === "active" || status === "success") && !shouldReduceMotion && (
        <motion.circle
          cx={x}
          cy={y}
          r={sizeConfig.node + 8}
          fill={colors.glow}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Pulse ring for active nodes */}
      {showPulse && !shouldReduceMotion && (
        <motion.circle
          cx={x}
          cy={y}
          r={sizeConfig.node}
          fill="none"
          stroke={colors.border}
          strokeWidth={1}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Main node circle */}
      <circle
        cx={x}
        cy={y}
        r={sizeConfig.node}
        fill={colors.bg}
        stroke={colors.border}
        strokeWidth={1.5}
      />

      {/* Inner dot */}
      <circle cx={x} cy={y} r={3} fill={colors.text} />

      {/* Label */}
      <text
        x={x}
        y={y + sizeConfig.node + 14}
        textAnchor="middle"
        fill={colors.text}
        fontSize={sizeConfig.font}
        fontFamily="IBM Plex Mono, monospace"
        fontWeight={500}
        letterSpacing="0.05em"
      >
        {label.toUpperCase()}
      </text>
    </motion.g>
  );
}
