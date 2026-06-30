"use client"

import { Sparkles, ArrowUpRight, Target } from "lucide-react"

function ScoreRing({ score }: { score: number }) {
  const r = 52
  const c = 2 * Math.PI * r
  const offset = c - (score / 100) * c
  return (
    <div className="relative grid size-32 shrink-0 place-items-center">
      <svg className="size-32 -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="oklch(1 0 0 / 10%)"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.58 0.22 285)" />
            <stop offset="100%" stopColor="oklch(0.62 0.18 245)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <span className="block text-3xl font-semibold leading-none">{score}</span>
        <span className="text-xs text-muted-foreground">/ 100</span>
      </div>
    </div>
  )
}

export function HeroCard() {
  return (
    <section className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div
        className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.58 0.22 285 / 35%), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="size-3.5" />
            AI Productivity Insight
          </div>
          <h1 className="mt-4 text-balance text-2xl font-semibold sm:text-3xl">
            Welcome back, Aria
          </h1>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            You&apos;re ahead of schedule today. Your peak focus window is{" "}
            <span className="text-foreground">1–3 PM</span> — I&apos;ve reserved it for
            shipping the onboarding flow.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-opacity hover:opacity-90">
              <Target className="size-4" />
              Start today&apos;s focus
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              View AI plan
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="glass flex w-full items-center gap-5 rounded-2xl p-5 md:w-auto">
          <ScoreRing score={92} />
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">AI Productivity Score</p>
              <p className="text-sm font-semibold text-success">Excellent · top 8%</p>
            </div>
            <div className="h-px w-full bg-border" />
            <div>
              <p className="text-xs text-muted-foreground">Today&apos;s focus</p>
              <p className="text-sm font-medium">Ship onboarding flow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
