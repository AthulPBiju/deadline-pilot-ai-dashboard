import { ListTodo, CheckCircle2, Clock, Sparkles, TrendingUp, TriangleAlert } from "lucide-react"
import { stats } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const iconMap = {
  list: ListTodo,
  check: CheckCircle2,
  clock: Clock,
  spark: Sparkles,
}

export function StatCards() {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => {
        const Icon = iconMap[s.icon as keyof typeof iconMap]
        const isWarn = s.trend === "warn"
        return (
          <div
            key={s.label}
            className="glass group rounded-2xl p-4 transition-colors hover:border-ring/40 sm:p-5"
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "grid size-10 place-items-center rounded-xl",
                  isWarn ? "bg-warning/15 text-warning" : "bg-primary/15 text-primary",
                )}
              >
                <Icon className="size-5" />
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                  isWarn ? "bg-warning/10 text-warning" : "bg-success/10 text-success",
                )}
              >
                {isWarn ? (
                  <TriangleAlert className="size-3" />
                ) : (
                  <TrendingUp className="size-3" />
                )}
                {s.delta}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground/70">{s.hint}</p>
          </div>
        )
      })}
    </section>
  )
}
