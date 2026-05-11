import { getWorkoutsByMuscleGroup } from "@/lib/apis/workouts.api";
import { useQuery } from "@tanstack/react-query";

export function useWorkoutsByMuscleGroup(id: string) {
  const { data, isPending, error, isLoading } = useQuery({
    queryKey: ["workouts-by-muscle-group", id],
    queryFn: async () => getWorkoutsByMuscleGroup(id),
    enabled: !!id,
  });

  return { data, isPending, error, isLoading };
}
