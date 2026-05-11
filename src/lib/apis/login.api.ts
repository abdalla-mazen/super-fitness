import api from "@/axiosConfig";

export const login = async (email: string, password: string) => {
  try {
    // Response and passing the credentials
    const res = await api.post<AuthResponse>("/auth/signin", {
      email: email,
      password: password,
    });

    const { token, user } = res.data;

    console.log("Token:", token);
    console.log("User:", user);

    // Response data
    // const resData: SuccessResponse<User> = res.data;

    // Check if the token is in the response
    if (typeof window !== "undefined" && token) {
      localStorage.setItem("token", token);
    }

    // Return response data
    return res.data;
  } catch (error) {
    console.error("Login error:", error);
    return {
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
};
