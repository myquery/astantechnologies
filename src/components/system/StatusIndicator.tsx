"use client";

import { motion, useReducedMotion } from "framer-motion";

type StatusIndicatorProps = {
  status: "online" | "offline" | "warning" | "processing";
  label?: string;
  size?: "sm" | "md";
};

const statusConfig = {
  online: { color: "#22c55e", label: "Connected" },
  offline: { color: "#ef4444", label: "Disconnected" },
  warning: { color: "#fbbf24", label: "Warning" },
  processing: { color: "#5dd3ff", label: "Processing" },
};

export function StatusIndicator({ status, label, size = "md" }: StatusIndicatorProps) {
  const shouldReduceMotion = useReducedMotion();
  const config = statusConfig[status];
  const dotSize = size === "sm" ? 6 : 8;

  return (
    <div className="inline-flex items-center gap-2">
      <span className="relative flex items-center justify-center">
        {/* Pulse ring */}
        {(status === "online" || status === "processing") && !shouldReduceMotion && (
          <motion.span
            className="absolute rounded-full"
            style={{
              width: dotSize * 2,
              height: dotSize * 2,
              backgroundColor: config.color,
            }}
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        {/* Main dot */}
        <span
          className="relative rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: config.color,
          }}
        />
      </span>
      {label !== undefined && (
        <span
          className={`font-mono uppercase tracking-wider ${
            size === "sm" ? "text-[0.6rem]" : "text-[0.65rem]"
          }`}
          style={{ color: "var(--fg-muted)" }}
        >
          {label || config.label}
        </span>
      )}
    </div>
  );
}
