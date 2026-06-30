import { CheckCircle2, Sparkles, AlarmClock, MessageSquare } from "lucide-react"
import { activity, type Activity } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const iconMap: Record<Activity["type"], { icon: typeof CheckCircle2; style: string }> = {
  complete: { icon: CheckCircle2, style: "bg-success/15 text-success" },
  ai: { icon: Sparkles, style: "bg-primary/15 text-primary" },
  deadline: { icon: AlarmClock, style: "bg-destructive/15 text-destructive" },
  comment: { icon: MessageSquare, style: "bg-accent/15 text-accent" },
}

export function RecentActivity() {
  return (
    <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
      <h2 className="text-base font-semibold">Recent Activity</h2>

      <ul className="mt-4 flex-1 space-y-4">
        {activity.map((a, i) => {
          const { icon: Icon, style } = iconMap[a.type]
          return (
            <li key={i} className="flex gap-3">
              <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", style)}>
                <Icon className="size-[1.05rem]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-snug">{a.text}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{a.detail}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{a.time}</span>
            </li>
          )
        })}
      </ul>

      <button className="mt-4 w-full rounded-xl border border-border bg-secondary/50 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
        View all activity
      </button>
    </div>
  )
}
