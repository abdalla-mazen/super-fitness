import { editGoalApi, editLevelApi, editWeightApi } from "@/lib/apis/edit-profile.api";
import type { GoalValue, LevelValue, WeightValue } from "@/lib/schemas/kyc.schema";
import { useMutation } from "@tanstack/react-query";

export function useEditGoal() {
  const { error, isPending, mutate } = useMutation({
    mutationFn: async (values: GoalValue) => {
      const response = await editGoalApi(values);

      if ("error" in response) {
        throw new Error(response.error);
      }

      // return response;
      location.href = "/account";

      return response;
    },
  });

  return { goalIsPending: isPending, goalError: error, editGoal: mutate };
}

export function useEditLevel() {
  const { error, isPending, mutate } = useMutation({
    mutationFn: async (values: LevelValue) => {
      const response = await editLevelApi(values);

      if ("error" in response) {
        throw new Error(response.error);
      }

      // return response;
      location.href = "/account";

      return response;
    },
  });

  return { levelIsPending: isPending, levelError: error, editLevel: mutate };
}

export function useEditWeight() {
  const { error, isPending, mutate } = useMutation({
    mutationFn: async (values: WeightValue) => {
      const response = await editWeightApi(values);

      if ("error" in response) {
        throw new Error(response.error);
      }

      // return response;
      location.href = "/account";

      return response;
    },
  });

  return { weightIsPending: isPending, weightError: error, editWeight: mutate };
}
