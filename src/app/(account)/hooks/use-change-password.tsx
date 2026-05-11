import { changePasswordApi } from "@/lib/apis/change-password.api";
import { useMutation } from "@tanstack/react-query";

export function useChangePassword() {
  const { error, isPending, mutate } = useMutation({
    mutationFn: async (payload: ChangePasswordPayload) => {
      const response = await changePasswordApi(payload);

      if ("error" in response) {
        throw new Error(response.error);
      }

      // return response;
      localStorage.removeItem("token");
      location.href = "/login";

      return response;
    },
  });

  return { isPending, error, change: mutate };
}
