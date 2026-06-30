"use client"

import { Search, Bell, Menu, ChevronDown } from "lucide-react"

export function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="glass sticky top-0 z-30 flex items-center gap-3 rounded-2xl px-4 py-3 lg:gap-4">
      <button
        onClick={onMenu}
        className="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="size-5" />
      </button>

      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search tasks, projects, or ask AI…"
          className="h-10 w-full rounded-xl border border-input bg-secondary/60 pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
        />
      </div>

      <button
        className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/60 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Notifications"
      >
        <Bell className="size-[1.15rem]" />
        <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-accent ring-2 ring-background" />
      </button>

      <button className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-secondary/60 py-1.5 pl-1.5 pr-2 transition-colors hover:bg-secondary sm:pr-3">
        <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
          AR
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-sm font-medium leading-tight">Aria Rivera</span>
          <span className="block text-xs text-muted-foreground">Product Lead</span>
        </span>
        <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
      </button>
    </header>
  )
}
