import api from "@/axiosConfig";
import type { GoalValue, LevelValue, WeightValue } from "../schemas/kyc.schema";

export async function editGoalApi(values: GoalValue) {
  try {
    const response = await api.put<ApiResponse<UserData>>(`/auth/editProfile`, {
      goal: values.goal,
    });

    return response.data;
  } catch (error) {
    console.error("Edit user data error:", error);
    return {
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
}

export async function editLevelApi(values: LevelValue) {
  try {
    const response = await api.put<ApiResponse<UserData>>(`/auth/editProfile`, {
      activityLevel: values.activityLevel,
    });

    return response.data;
  } catch (error) {
    console.error("Edit user data error:", error);
    return {
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
}

export async function editWeightApi(values: WeightValue) {
  try {
    const response = await api.put<ApiResponse<UserData>>(`/auth/editProfile`, {
      weight: values.weight,
    });

    return response.data;
  } catch (error) {
    console.error("Edit user data error:", error);
    return {
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
}
