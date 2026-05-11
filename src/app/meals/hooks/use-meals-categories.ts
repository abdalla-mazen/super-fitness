import { mealsCategories } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export default function useMealsCategories() {
  const { data, error, isPending, isLoading } = useQuery({
    queryKey: ["meals-categories"],
    queryFn: mealsCategories,
  });

  return { data, error, isPending, isLoading };
}
