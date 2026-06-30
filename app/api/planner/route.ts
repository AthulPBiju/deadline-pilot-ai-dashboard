import { plannerAgent } from "@/lib/ai-orchestrator";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { task } = await req.json();

    const result = await plannerAgent(task);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
      console.error("Planner API Error:");
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error instanceof Error ? error.message : String(error),
        },
        { status: 500 }
      );
    }
}