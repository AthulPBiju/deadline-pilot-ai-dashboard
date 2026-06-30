"use client";

import { ShieldAlert } from "lucide-react";

type RiskMeterProps = {
  risk?: number;
};

export function RiskMeter({
  risk = 34,
}: RiskMeterProps) {
  const r = 70;
  const c = Math.PI * r;
  const offset = c - (risk / 100) * c;

  const level =
    risk < 35
      ? {
          label: "Low",
          color: "text-success",
        }
      : risk < 65
      ? {
          label: "Moderate",
          color: "text-warning",
        }
      : {
          label: "High",
          color: "text-destructive",
        };

  return (
    <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <ShieldAlert className="size-[1.15rem] text-warning" />
        <h2 className="text-base font-semibold">
          Deadline Risk Meter
        </h2>
      </div>

      <div className="relative mt-2 flex flex-1 flex-col items-center justify-center">
        <svg
          viewBox="0 0 180 100"
          className="w-full max-w-[15rem]"
        >
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="oklch(1 0 0 / 10%)"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="url(#riskGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />

          <defs>
            <linearGradient
              id="riskGrad"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="oklch(0.7 0.16 160)"
              />
              <stop
                offset="55%"
                stopColor="oklch(0.78 0.15 75)"
              />
              <stop
                offset="100%"
                stopColor="oklch(0.62 0.21 18)"
              />
            </linearGradient>
          </defs>
        </svg>

        <div className="-mt-10 text-center">
          <p className="text-3xl font-semibold">
            {risk}%
          </p>

          <p
            className={`text-sm font-medium ${level.color}`}
          >
            {level.label} Risk
          </p>
        </div>
      </div>

      <p className="mt-2 text-center text-xs text-muted-foreground">
        Based on AI workload prediction.
      </p>
    </div>
  );
}