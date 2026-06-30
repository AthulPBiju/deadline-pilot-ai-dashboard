import { CalendarClock } from "lucide-react"
import { deadlines, type Deadline } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const riskStyle: Record<Deadline["risk"], { badge: string; bar: string; label: string }> = {
  high: { badge: "bg-destructive/15 text-destructive", bar: "bg-destructive", label: "High risk" },
  medium: { badge: "bg-warning/15 text-warning", bar: "bg-warning", label: "Medium" },
  low: { badge: "bg-success/15 text-success", bar: "bg-success", label: "On track" },
}

export function UpcomingDeadlines() {
  return (
    <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <CalendarClock className="size-[1.15rem] text-accent" />
        <h2 className="text-base font-semibold">Upcoming Deadlines</h2>
      </div>

      <div className="mt-5 flex-1 space-y-3">
        {deadlines.map((d) => {
          const r = riskStyle[d.risk]
          return (
            <div
              key={d.title}
              className="rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:bg-secondary/60"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{d.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {d.project} · {d.due}
                  </p>
                </div>
                <span className={cn("shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium", r.badge)}>
                  {r.label}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background/60">
                  <div className={cn("h-full rounded-full", r.bar)} style={{ width: `${d.progress}%` }} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{d.progress}%</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
