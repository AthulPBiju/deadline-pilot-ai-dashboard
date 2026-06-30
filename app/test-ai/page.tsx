"use client";

import { useState } from "react";

export default function TestAIPage() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function analyzeTask() {
    if (!task.trim()) return;

    setLoading(true);
    setResult(null);

    try {
        const response = await fetch("/api/planner", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
        });

        const data = await response.json();

        if (data.success) {
            setResult(data.result);
        } else {
            setResult({
            title: "Error",
            priority: "",
            estimatedHours: 0,
            difficulty: "",
            subtasks: [],
            advice: data.error,
            });
        }
    } catch (err) {
        console.error(err);

        setResult({
            title: "Error",
            priority: "",
            estimatedHours: 0,
            difficulty: "",
            subtasks: [],
            advice: "Something went wrong.",
        });
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Planner Agent Test
      </h1>

      <textarea
        className="w-full rounded-lg p-4 text-black"
        rows={5}
        placeholder="Example: Complete DBMS mini project before Friday"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={analyzeTask}
        className="mt-5 rounded-lg bg-purple-600 px-6 py-3 hover:bg-purple-700"
      >
        {loading ? "Thinking..." : "Analyze Task"}
      </button>

        {result && (
            <div className="mt-8 rounded-lg bg-slate-900 p-6 space-y-4">
                <h2 className="text-2xl font-bold">{result.title}</h2>

                <p>
                    <strong>Priority:</strong> {result.priority}
                </p>

                <p>
                    <strong>Estimated Hours:</strong> {result.estimatedHours}
                </p>

                <p>
                    <strong>Difficulty:</strong> {result.difficulty}
                </p>

                <div>
                    <strong>Subtasks:</strong>

                    <ul className="list-disc pl-6 mt-2">
                        {result.subtasks.map((task: string, index: number) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>

                <p>
                    <strong>AI Advice:</strong> {result.advice}
                </p>
                <p>
                    <strong>Deadline Risk:</strong> {result.deadlineRisk}%
                </p>

                <p>
                    <strong>Confidence:</strong> {result.confidence}%
                </p>

                <p>
                    <strong>Best Start Time:</strong> {result.bestStartTime}
                </p>

                <p>
                    <strong>Focus Sessions:</strong> {result.focusSessions}
                </p>

                <div>
                    <strong>Suggested Schedule:</strong>


                    <ul className="list-disc pl-6 mt-2">
                        {result.schedule.map((item: any, index: number) => (
                            <li key={index}>
                                {item.time} — {item.task}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </main>
  );
}