"use client";

import { SystemNode, type NodeStatus } from "./SystemNode";
import { SystemConnection, type ConnectionStatus } from "./SystemConnection";

export type DiagramNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  status?: NodeStatus;
};

export type DiagramConnection = {
  from: string;
  to: string;
  status?: ConnectionStatus;
  curved?: boolean;
  showSignal?: boolean;
};

type ArchitectureDiagramProps = {
  nodes: DiagramNode[];
  connections: DiagramConnection[];
  width?: number;
  height?: number;
  className?: string;
  baseDelay?: number;
};

export function ArchitectureDiagram({
  nodes,
  connections,
  width = 400,
  height = 300,
  className = "",
  baseDelay = 0,
}: ArchitectureDiagramProps) {
  // Create a map for quick node lookup
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{ width: "100%", height: "auto" }}
    >
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#grid)" />

      {/* Connections (rendered first, behind nodes) */}
      {connections.map((conn, index) => {
        const fromNode = nodeMap.get(conn.from);
        const toNode = nodeMap.get(conn.to);
        if (!fromNode || !toNode) return null;

        return (
          <SystemConnection
            key={`${conn.from}-${conn.to}`}
            from={{ x: fromNode.x, y: fromNode.y }}
            to={{ x: toNode.x, y: toNode.y }}
            status={conn.status}
            curved={conn.curved}
            showSignal={conn.showSignal}
            delay={baseDelay + index * 0.15}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, index) => (
        <SystemNode
          key={node.id}
          id={node.id}
          label={node.label}
          x={node.x}
          y={node.y}
          status={node.status}
          delay={baseDelay + index * 0.1}
          showPulse={node.status === "active"}
        />
      ))}
    </svg>
  );
}
