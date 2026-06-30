"use client";

import { useState } from "react";
import { usePlanner } from "@/contexts/planner-context";

export function AITaskInput() {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const { setPlannerResult } = usePlanner();

  async function analyze() {
    if (!task.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      const data = await res.json();

      if (data.success) {
        setPlannerResult(data.result);
      } else {
        alert(data.error);
      }
    } catch {
      alert("AI request failed.");
    }

    setLoading(false);
  }

  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-4">
        AI Task Planner
      </h2>

      <textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Example: Finish DBMS mini project before Friday"
        className="w-full rounded-xl p-4 text-black"
        rows={4}
      />

      <button
        onClick={analyze}
        className="mt-4 rounded-xl bg-purple-600 px-5 py-3 text-white"
      >
        {loading ? "Thinking..." : "Generate AI Plan"}
      </button>
    </div>
  );
}