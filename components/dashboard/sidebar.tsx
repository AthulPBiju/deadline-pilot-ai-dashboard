"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  ListChecks,
  CalendarRange,
  Sparkles,
  BarChart3,
  Settings,
  Compass,
  X,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "My Tasks", icon: ListChecks },
  { label: "AI Planner", icon: CalendarRange },
  { label: "AI Coach", icon: Sparkles },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
]

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [active, setActive] = useState("Dashboard")

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          "glass-strong fixed inset-y-0 left-0 z-50 flex w-72 flex-col p-5 transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:rounded-3xl lg:my-4 lg:ml-4 lg:h-[calc(100vh-2rem)]",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <Compass className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">DeadlinePilot</p>
              <p className="text-xs text-accent">AI · 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground lg:hidden"
            aria-label="Close navigation"
          >
            <X className="size-4" />
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          <p className="px-3 pb-2 text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
            Workspace
          </p>
          {items.map(({ label, icon: Icon }) => {
            const isActive = active === label
            return (
              <button
                key={label}
                onClick={() => {
                  setActive(label)
                  onClose()
                }}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-primary" />
                )}
                <Icon
                  className={cn(
                    "size-[1.15rem] transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                  )}
                />
                {label}
              </button>
            )
          })}
        </nav>

        <div className="glass mt-4 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Zap className="size-4 text-warning" />
            Pro Plan
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Unlock unlimited AI planning and deadline forecasts.
          </p>
          <button className="mt-3 w-full rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Upgrade
          </button>
        </div>
      </aside>
    </>
  )
}
