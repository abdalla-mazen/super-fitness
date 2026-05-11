import useMealsCategories from "@/app/meals/hooks/use-meals-categories";
import type { MealType } from "@/lib/types/meals";
import { createContext, useContext, useMemo } from "react";

type MealsContextType = {
  data: MealType[];
  isPending: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  isLoading: boolean;
};

const MealsContext = createContext<MealsContextType | null>(null);

export default function MealsProvider({ children }: { children: React.ReactNode }) {
  const { data, isPending, error, isLoading } = useMealsCategories();

  const mealsCategories = useMemo(() => data?.categories?.slice(0, 3) || [], [data?.categories]);

  const value = useMemo(() => ({ data: mealsCategories, isPending, error, isLoading }), [mealsCategories, isPending, error, isLoading]);
  return <MealsContext.Provider value={value}>{children}</MealsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMealsProvider() {
  const context = useContext(MealsContext);

  if (!context) {
    throw new Error("useMealsProvider must be used within a MealsProvider");
  }

  return context;
}
