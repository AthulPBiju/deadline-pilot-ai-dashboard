export type ScheduleItem = {
  time: string;
  task: string;
};

export type PlannerResponse = {
  title: string;
  priority: "High" | "Medium" | "Low";
  estimatedHours: number;
  difficulty: "Easy" | "Medium" | "Hard";

  deadlineRisk: number;
  confidence: number;
  focusSessions: number;
  bestStartTime: string;

  subtasks: string[];
  schedule: ScheduleItem[];

  advice: string;
};