export const stats = [
  {
    label: "Total Tasks",
    value: "48",
    delta: "+6",
    trend: "up" as const,
    icon: "list",
    hint: "this week",
  },
  {
    label: "Completed",
    value: "31",
    delta: "+12%",
    trend: "up" as const,
    icon: "check",
    hint: "vs last week",
  },
  {
    label: "Upcoming Deadlines",
    value: "7",
    delta: "3 soon",
    trend: "warn" as const,
    icon: "clock",
    hint: "next 72h",
  },
  {
    label: "Productivity Score",
    value: "92",
    delta: "+4",
    trend: "up" as const,
    icon: "spark",
    hint: "AI rated",
  },
]

export type ScheduleItem = {
  time: string
  title: string
  meta: string
  status: "done" | "active" | "upcoming"
  accent: "primary" | "accent" | "success" | "warning"
}

export const schedule: ScheduleItem[] = [
  {
    time: "08:30",
    title: "Deep work — Q3 roadmap",
    meta: "Focus block · 90 min",
    status: "done",
    accent: "primary",
  },
  {
    time: "10:00",
    title: "Design review with team",
    meta: "Meeting · Figma",
    status: "done",
    accent: "accent",
  },
  {
    time: "13:00",
    title: "Ship onboarding flow",
    meta: "In progress · 2 subtasks left",
    status: "active",
    accent: "primary",
  },
  {
    time: "15:30",
    title: "Investor update draft",
    meta: "Writing · due today",
    status: "upcoming",
    accent: "warning",
  },
  {
    time: "17:00",
    title: "AI Coach reflection",
    meta: "Daily review · 10 min",
    status: "upcoming",
    accent: "success",
  },
]

export type Deadline = {
  title: string
  project: string
  due: string
  risk: "low" | "medium" | "high"
  progress: number
}

export const deadlines: Deadline[] = [
  {
    title: "Launch marketing site",
    project: "Growth",
    due: "Today · 6:00 PM",
    risk: "high",
    progress: 72,
  },
  {
    title: "API v2 documentation",
    project: "Platform",
    due: "Tomorrow",
    risk: "medium",
    progress: 45,
  },
  {
    title: "Mobile beta release",
    project: "Product",
    due: "In 3 days",
    risk: "low",
    progress: 88,
  },
  {
    title: "Series A deck polish",
    project: "Founders",
    due: "In 5 days",
    risk: "medium",
    progress: 30,
  },
]

export type Task = {
  title: string
  tag: string
  priority: "High" | "Medium" | "Low"
  done: boolean
}

export const tasks: Task[] = [
  { title: "Finalize pricing page copy", tag: "Marketing", priority: "High", done: false },
  { title: "Review pull request #482", tag: "Engineering", priority: "High", done: false },
  { title: "Sync with design on icons", tag: "Design", priority: "Medium", done: true },
  { title: "Prepare standup notes", tag: "Team", priority: "Low", done: true },
  { title: "Draft customer email", tag: "Success", priority: "Medium", done: false },
]

// Weekly productivity (0-100) for Mon..Sun
export const weekly = [
  { day: "Mon", value: 64 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 71 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 92 },
  { day: "Sat", value: 54 },
  { day: "Sun", value: 40 },
]

export type Activity = {
  text: string
  detail: string
  time: string
  type: "complete" | "ai" | "deadline" | "comment"
}

export const activity: Activity[] = [
  {
    text: "Completed “Design review with team”",
    detail: "On time · +8 focus points",
    time: "12m ago",
    type: "complete",
  },
  {
    text: "AI Coach rescheduled 2 tasks",
    detail: "Optimized for your peak hours",
    time: "48m ago",
    type: "ai",
  },
  {
    text: "Deadline approaching: Launch site",
    detail: "Risk increased to high",
    time: "1h ago",
    type: "deadline",
  },
  {
    text: "Maya commented on “API v2 docs”",
    detail: "“Looks great — one note on auth”",
    time: "3h ago",
    type: "comment",
  },
]

export const navItems = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "My Tasks", icon: "tasks" },
  { label: "AI Planner", icon: "planner" },
  { label: "AI Coach", icon: "coach" },
  { label: "Analytics", icon: "analytics" },
  { label: "Settings", icon: "settings" },
] as const
