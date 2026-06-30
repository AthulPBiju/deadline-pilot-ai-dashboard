import { Check } from "lucide-react"
import { schedule, type ScheduleItem } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const dot: Record<ScheduleItem["accent"], string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
}

export function ScheduleTimeline() {
  return (
    <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Today&apos;s Schedule</h2>
          <p className="text-xs text-muted-foreground">5 blocks · optimized by AI</p>
        </div>
        <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
          Mon, Jun 29
        </span>
      </div>

      <ol className="relative mt-5 flex-1 space-y-5 pl-2">
        <span
          className="absolute left-[0.6rem] top-1 h-[calc(100%-1rem)] w-px bg-border"
          aria-hidden="true"
        />
        {schedule.map((item) => (
          <li key={item.title} className="relative flex gap-4">
            <span
              className={cn(
                "relative z-10 mt-1 grid size-3.5 shrink-0 place-items-center rounded-full ring-4 ring-background",
                item.status === "done"
                  ? "bg-success"
                  : item.status === "active"
                    ? "bg-primary animate-pulse-ring"
                    : dot[item.accent],
              )}
            >
              {item.status === "done" && (
                <Check className="size-2.5 text-background" strokeWidth={3.5} />
              )}
            </span>
            <div
              className={cn(
                "flex-1 rounded-xl px-3 py-2 transition-colors",
                item.status === "active"
                  ? "border border-primary/30 bg-primary/10"
                  : "hover:bg-secondary/50",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <p
                  className={cn(
                    "text-sm font-medium",
                    item.status === "done" && "text-muted-foreground line-through",
                  )}
                >
                  {item.title}
                </p>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {item.time}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">{item.meta}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
