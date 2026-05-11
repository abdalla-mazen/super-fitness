import { useMutation } from "@tanstack/react-query";
import { registerKYCAction } from "../../../lib/apis/register-kyc.api";

export default function useRegisterKYC() {
  const { error, isPending, mutate } = useMutation({
    mutationFn: async (values: RegisterKYCValues) => {
      const response = await registerKYCAction(values);

      if ("error" in response) {
        throw new Error(response.error);
      }

      // return response;
      location.href = "/login";

      return response;
    },
  });

  return { isPending, error, registerKYC: mutate };
}
