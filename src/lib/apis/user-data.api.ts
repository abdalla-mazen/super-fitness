import api from "@/axiosConfig";

export default async function userDataApi() {
  try {
    const response = await api.get<ApiResponse<UserData>>(`/auth/profile-data`);

    return response.data;
  } catch (error) {
    console.error("Get user data error:", error);
    return {
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
}
