import { mealsByCategory } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export default function useMealsByCategory(category: string) {
  const { data, error, isPending, isLoading } = useQuery({
    queryKey: ["meals-by-category", category],
    queryFn: async () => await mealsByCategory(category),
  });

  return { data, error, isPending, isLoading };
}
