"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { usePlanner } from "@/contexts/planner-context";

export function AICoachCard() {
  const { plannerResult } = usePlanner();

  const advice =
    plannerResult?.advice ??
    "Generate an AI plan to receive personalized productivity recommendations.";

  return (
    <div className="glass relative h-full overflow-hidden rounded-3xl p-5 sm:p-6">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -bottom-16 -left-10 size-56 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.18 245 / 40%), transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <Sparkles className="size-[1.15rem]" />
          </span>

          <div>
            <h2 className="text-base font-semibold">AI Coach</h2>
            <p className="text-xs text-accent">Live Recommendation</p>
          </div>
        </div>

        {/* AI Advice */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {advice}
        </p>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-border bg-secondary/50 p-3">
            <p className="text-xs text-muted-foreground">Focus Sessions</p>
            <p className="mt-1 text-lg font-semibold">
              {plannerResult?.focusSessions ?? "--"}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-secondary/50 p-3">
            <p className="text-xs text-muted-foreground">Confidence</p>
            <p className="mt-1 text-lg font-semibold">
              {plannerResult ? `${plannerResult.confidence}%` : "--"}
            </p>
          </div>
        </div>

        {/* Best Start Time */}
        <div className="mt-3 rounded-xl border border-border bg-secondary/50 p-3">
          <p className="text-xs text-muted-foreground">
            Recommended Start Time
          </p>

          <p className="mt-1 text-lg font-semibold">
            {plannerResult?.bestStartTime ?? "--"}
          </p>
        </div>

        {/* Button */}
        <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          AI Optimized Plan
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}