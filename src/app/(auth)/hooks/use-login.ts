import { login } from "@/lib/apis/login.api";
import type { LoginScheme } from "@/lib/schemes/auth.scheme";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async ({ email, password }: LoginScheme) => {
      const response = await login(email, password);

      if ("error" in response) {
        throw new Error(response.error);
      }

      // return response;
      location.href = "/";

      return response;
    },
  });

  return { isPending, error, login: mutate };
}
