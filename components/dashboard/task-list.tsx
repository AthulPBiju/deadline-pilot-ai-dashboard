"use client";

import { useState, useEffect } from "react";
import { Check, Plus } from "lucide-react";

import { tasks as initialTasks, type Task } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";
import { usePlanner } from "@/contexts/planner-context";

const priorityStyle: Record<Task["priority"], string> = {
  High: "bg-destructive/15 text-destructive",
  Medium: "bg-warning/15 text-warning",
  Low: "bg-muted text-muted-foreground",
};

export function TaskList() {
  const { plannerResult } = usePlanner();

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  useEffect(() => {
    if (!plannerResult) return;

    const aiTasks: Task[] = plannerResult.subtasks.map((task: string) => ({
      title: task,
      tag: "AI Planner",
      priority: plannerResult.priority,
      done: false,
    }));

    setTasks(aiTasks);
  }, [plannerResult]);

  const toggle = (index: number) => {
    setTasks((prev) =>
      prev.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  };

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Task List</h2>
          <p className="text-xs text-muted-foreground">
            {remaining} remaining today
          </p>
        </div>

        <button className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary">
          <Plus className="size-3.5" />
          Add task
        </button>
      </div>

      <ul className="mt-4 flex-1 space-y-2">
        {tasks.map((task, i) => (
          <li key={`${task.title}-${i}`}>
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-secondary/50"
            >
              <span
                className={cn(
                  "grid size-5 shrink-0 place-items-center rounded-md border transition-colors",
                  task.done
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background/40"
                )}
              >
                {task.done && (
                  <Check
                    className="size-3.5"
                    strokeWidth={3}
                  />
                )}
              </span>

              <span
                className={cn(
                  "flex-1 text-sm",
                  task.done &&
                    "text-muted-foreground line-through"
                )}
              >
                {task.title}
              </span>

              <span className="hidden text-xs text-muted-foreground sm:block">
                {task.tag}
              </span>

              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[0.7rem] font-medium",
                  priorityStyle[task.priority]
                )}
              >
                {task.priority}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}