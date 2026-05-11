import { mealDetailsById } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export const useMealDetail = (mealId: string | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mealDetails", mealId],
    queryFn: async () => mealDetailsById(mealId),
  });
  return { data, isLoading, error };
};
