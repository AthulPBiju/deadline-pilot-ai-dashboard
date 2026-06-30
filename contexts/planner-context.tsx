"use client";

import { createContext, useContext, useState } from "react";
import { PlannerResponse } from "@/lib/types";

type PlannerContextType = {
  plannerResult: PlannerResponse | null;
  setPlannerResult: (result: PlannerResponse | null) => void;
};

const PlannerContext = createContext<PlannerContextType | undefined>(undefined);

export function PlannerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plannerResult, setPlannerResult] =
    useState<PlannerResponse | null>(null);

  return (
    <PlannerContext.Provider
      value={{
        plannerResult,
        setPlannerResult,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
}

export function usePlanner() {
  const context = useContext(PlannerContext);

  if (!context) {
    throw new Error("usePlanner must be used inside PlannerProvider");
  }

  return context;
}