"use client";

import { motion, useReducedMotion } from "framer-motion";

export type ConnectionStatus = "disconnected" | "connecting" | "connected" | "error" | "data-flow";

type SystemConnectionProps = {
  from: { x: number; y: number };
  to: { x: number; y: number };
  status?: ConnectionStatus;
  delay?: number;
  curved?: boolean;
  showSignal?: boolean;
};

const connectionColors: Record<ConnectionStatus, { stroke: string; opacity: number }> = {
  disconnected: { stroke: "rgba(255,255,255,0.08)", opacity: 0.5 },
  connecting: { stroke: "rgba(251,191,36,0.6)", opacity: 0.8 },
  connected: { stroke: "rgba(42,62,244,0.6)", opacity: 1 },
  error: { stroke: "rgba(239,68,68,0.6)", opacity: 0.8 },
  "data-flow": { stroke: "rgba(93,211,255,0.7)", opacity: 1 },
};

export function SystemConnection({
  from,
  to,
  status = "disconnected",
  delay = 0,
  curved = false,
  showSignal = false,
}: SystemConnectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const colors = connectionColors[status];

  // Calculate path
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const curveOffset = curved ? 20 : 0;

  const pathD = curved
    ? `M ${from.x} ${from.y} Q ${midX} ${midY - curveOffset} ${to.x} ${to.y}`
    : `M ${from.x} ${from.y} L ${to.x} ${to.y}`;

  return (
    <g>
      {/* Background line (always visible, dim) */}
      <path
        d={pathD}
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth={1}
        strokeDasharray="4 4"
      />

      {/* Main connection line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={colors.stroke}
        strokeWidth={status === "connected" || status === "data-flow" ? 2 : 1.5}
        strokeLinecap="round"
        opacity={colors.opacity}
        initial={shouldReduceMotion ? {} : { pathLength: 0 }}
        animate={{ pathLength: status === "disconnected" ? 0 : 1 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Data flow signal */}
      {showSignal && status === "data-flow" && !shouldReduceMotion && (
        <motion.circle
          r={3}
          fill="#5dd3ff"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
            delay: delay + 0.5,
          }}
          style={{
            offsetPath: `path("${pathD}")`,
          }}
        />
      )}
    </g>
  );
}
