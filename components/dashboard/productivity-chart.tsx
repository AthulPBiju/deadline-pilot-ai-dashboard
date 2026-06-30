"use client"

import { useState } from "react"
import { weekly } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const W = 520
const H = 200
const PAD = 16

export function ProductivityChart() {
  const [hover, setHover] = useState<number | null>(null)

  const max = 100
  const stepX = (W - PAD * 2) / (weekly.length - 1)
  const points = weekly.map((d, i) => ({
    x: PAD + i * stepX,
    y: H - PAD - (d.value / max) * (H - PAD * 2),
    ...d,
  }))

  const line = points.map((p) => `${p.x},${p.y}`).join(" ")
  const area = `${PAD},${H - PAD} ${line} ${W - PAD},${H - PAD}`
  const avg = Math.round(weekly.reduce((a, b) => a + b.value, 0) / weekly.length)

  return (
    <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Weekly Productivity</h2>
          <p className="text-xs text-muted-foreground">Avg score {avg} · trending up</p>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary/60 p-0.5 text-xs">
          <span className="rounded-md bg-primary px-2.5 py-1 font-medium text-primary-foreground">
            Week
          </span>
          <span className="px-2.5 py-1 text-muted-foreground">Month</span>
        </div>
      </div>

      <div className="relative mt-4 flex-1">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-full w-full"
          preserveAspectRatio="none"
          onMouseLeave={() => setHover(null)}
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.58 0.22 285 / 45%)" />
              <stop offset="100%" stopColor="oklch(0.58 0.22 285 / 0%)" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.62 0.18 245)" />
              <stop offset="100%" stopColor="oklch(0.58 0.22 285)" />
            </linearGradient>
          </defs>

          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1={PAD}
              x2={W - PAD}
              y1={PAD + g * (H - PAD * 2)}
              y2={PAD + g * (H - PAD * 2)}
              stroke="oklch(1 0 0 / 7%)"
              strokeDasharray="4 6"
            />
          ))}

          <polygon points={area} fill="url(#areaGrad)" />
          <polyline
            points={line}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((p, i) => (
            <g key={p.day}>
              <rect
                x={p.x - stepX / 2}
                y={0}
                width={stepX}
                height={H}
                fill="transparent"
                onMouseEnter={() => setHover(i)}
              />
              <circle
                cx={p.x}
                cy={p.y}
                r={hover === i ? 6 : 4}
                fill="oklch(0.16 0.02 274)"
                stroke="oklch(0.58 0.22 285)"
                strokeWidth="3"
              />
              {hover === i && (
                <g>
                  <rect
                    x={Math.min(Math.max(p.x - 22, 2), W - 46)}
                    y={Math.max(p.y - 30, 2)}
                    width="44"
                    height="20"
                    rx="6"
                    fill="oklch(0.24 0.03 274)"
                    stroke="oklch(1 0 0 / 12%)"
                  />
                  <text
                    x={Math.min(Math.max(p.x, 24), W - 24)}
                    y={Math.max(p.y - 16, 16)}
                    textAnchor="middle"
                    fontSize="11"
                    fill="oklch(0.96 0.01 270)"
                  >
                    {p.value}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-2 flex justify-between px-1">
        {weekly.map((d, i) => (
          <span
            key={d.day}
            className={cn(
              "text-xs",
              hover === i ? "font-medium text-foreground" : "text-muted-foreground",
            )}
          >
            {d.day}
          </span>
        ))}
      </div>
    </div>
  )
}
