import api from "@/axiosConfig";

export async function registerKYCAction(data: RegisterKYCValues): Promise<ApiResponse<UserData>> {
  try {
    const response = await api.post<ApiResponse<UserData>>(
      `${import.meta.env.VITE_API}/auth/signup`,
      data,
    );

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    return {
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
}
