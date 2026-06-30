"use client"

import { useState } from "react"
import { Sparkles, X, Send } from "lucide-react"

export function AIAssistantButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass-strong w-[min(22rem,calc(100vw-3rem))] origin-bottom-right rounded-3xl p-4 shadow-2xl shadow-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-4" />
              </span>
              <p className="text-sm font-semibold">Pilot Assistant</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="grid size-7 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Close assistant"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-3 rounded-2xl border border-border bg-secondary/50 p-3 text-sm leading-relaxed text-muted-foreground">
            Hi Aria 👋 I can replan your day, summarize deadlines, or draft your investor
            update. What should we tackle first?
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {["Replan my day", "Summarize risks", "Draft update"].map((s) => (
              <button
                key={s}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground transition-colors hover:bg-secondary"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-input bg-background/60 p-1.5">
            <input
              placeholder="Ask Pilot anything…"
              className="h-8 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90"
              aria-label="Send"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/40 transition-transform hover:scale-105 active:scale-95"
        aria-label="Open AI assistant"
      >
        <span className="absolute inset-0 rounded-2xl animate-pulse-ring" aria-hidden="true" />
        {open ? <X className="size-6" /> : <Sparkles className="size-6" />}
      </button>
    </div>
  )
}
