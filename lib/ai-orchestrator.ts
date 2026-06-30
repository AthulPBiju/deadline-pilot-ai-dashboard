import { ai } from "./gemini";
import { PlannerResponse } from "./types";

export async function plannerAgent(
  task: string
): Promise<PlannerResponse> {
  const prompt = `
You are DeadlinePilot OS Planner Agent.

You help users complete tasks before deadlines.

Return ONLY valid JSON.

No markdown.
No explanation.

Return exactly this schema:

{
  "title":"",
  "priority":"High",
  "estimatedHours":8,
  "difficulty":"Medium",
  "deadlineRisk":65,
  "confidence":92,
  "focusSessions":5,
  "bestStartTime":"6:00 PM",
  "subtasks":[
    "Task 1",
    "Task 2"
  ],
  "schedule":[
    {
      "time":"Today 6:00 PM",
      "task":"Task 1"
    }
  ],
  "advice":"..."
}

User Task:
${task}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let text = response.text ?? "";

  console.log("Raw Gemini Response:");
  console.log(text);

  text = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("Gemini did not return valid JSON.");
  }

  text = text.substring(start, end + 1);

  console.log("Parsed JSON:");
  console.log(text);

  try {
    return JSON.parse(text) as PlannerResponse;
  } catch (err) {
    console.error("JSON Parse Error:");
    console.error(text);
    throw err;
  }
}