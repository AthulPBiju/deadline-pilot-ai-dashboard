"use client";

import { useState } from "react";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { HeroCard } from "@/components/dashboard/hero-card";
import { StatCards } from "@/components/dashboard/stat-cards";
import { ScheduleTimeline } from "@/components/dashboard/schedule-timeline";
import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines";
import { TaskList } from "@/components/dashboard/task-list";
import { AICoachCard } from "@/components/dashboard/ai-coach-card";
import { RiskMeter } from "@/components/dashboard/risk-meter";
import { ProductivityChart } from "@/components/dashboard/productivity-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { AIAssistantButton } from "@/components/dashboard/ai-assistant-button";
import { AITaskInput } from "@/components/dashboard/ai-task-input";

import { usePlanner } from "@/contexts/planner-context";

export default function Page() {
  const [navOpen, setNavOpen] = useState(false);

  // Get AI Planner result from Context
  const { plannerResult } = usePlanner();

  return (
    <div className="flex min-h-screen">
      <Sidebar
        open={navOpen}
        onClose={() => setNavOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col gap-4 p-4">
        <Header onMenu={() => setNavOpen(true)} />

        <main className="flex flex-col gap-4 pb-4">
          {/* AI Task Input */}
          <AITaskInput />

          {/* Hero */}
          <HeroCard />

          {/* Stats */}
          <StatCards />

          {/* Schedule + AI Coach */}
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScheduleTimeline />
            </div>

            <AICoachCard />
          </div>

          {/* Productivity + Risk */}
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProductivityChart />
            </div>

            <RiskMeter
              risk={plannerResult?.deadlineRisk ?? 34}
            />
          </div>

          {/* Tasks + Deadlines */}
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TaskList />
            </div>

            <UpcomingDeadlines />
          </div>

          {/* Activity */}
          <RecentActivity />
        </main>
      </div>

      <AIAssistantButton />
    </div>
  );
}