import api from "@/axiosConfig";

type ChangePasswordResponse = {
  message: string;
  token: string;
};

export async function changePasswordApi(values: ChangePasswordPayload) {
  try {
    const response = await api.patch<ApiResponse<ChangePasswordResponse>>(
      "/auth/change-password",
      values,
    );

    return response.data;
  } catch (error) {
    console.error("Change password error:", error);
    return {
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
}
