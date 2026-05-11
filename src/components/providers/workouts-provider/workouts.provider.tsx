// import { useWorkoutsByMuscleGroup } from "@/app/workouts/hooks/use-workouts-by-muscle-group";
import { useWrokoutsMuscleGroups } from "@/app/workouts/hooks/use-workouts-muscle-groups";
import { createContext, useContext, useMemo } from "react";

type WorkoutsContextType = {
  musclesGroup: MuscleGroupType[];
  isPending: boolean;
  isLoading: boolean;
  error: Error | null;
};

const WorkoutsContext = createContext<WorkoutsContextType | null>(null);

export default function WorkoutsProvider({ children }: { children: React.ReactNode }) {
  const {
    data: musclesGroupData,
    isPending: musclesGroupIsPending,
    isLoading: musclesGroupIsLoading,
    error: musclesGroupError,
  } = useWrokoutsMuscleGroups();
  // const { data: workoutsData, isPending: workoutsIsPending, error: workoutsError, isLoading: workoutsIsLoading } = useWorkoutsByMuscleGroup();

  const musclesGroup = useMemo(() => musclesGroupData?.musclesGroup?.slice(0, 4) || [], [musclesGroupData?.musclesGroup]);

  // const value = { musclesGroup, isPending: musclesGroupIsPending || workoutsIsPending, isLoading: musclesGroupIsLoading || workoutsIsLoading, error: musclesGroupError || workoutsError };

  const value = useMemo(() => ({
    musclesGroup,
    isPending: musclesGroupIsPending,
    isLoading: musclesGroupIsLoading,
    error: musclesGroupError,
  }), [musclesGroup, musclesGroupIsPending, musclesGroupIsLoading, musclesGroupError]);
  return <WorkoutsContext.Provider value={value}>{children}</WorkoutsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWorkoutsProvider() {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("useWorkoutsProvider must be used within a WorkoutsProvider");
  }

  return context;
}
