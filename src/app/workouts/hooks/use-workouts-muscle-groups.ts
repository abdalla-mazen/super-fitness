import { getWorkoutsMuscleGroups } from "@/lib/apis/workouts.api";
import { useQuery } from "@tanstack/react-query";

export function useWrokoutsMuscleGroups() {
  const { data, isPending, isLoading, error } = useQuery({
    queryKey: ["workouts-muscle-groups"],
    queryFn: async () => getWorkoutsMuscleGroups(),
  });

  return { data, isPending, isLoading, error };
}
