import { forgotPassword } from "@/lib/apis/forget.api";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export default function useForget() {
  // Translation
  const { t } = useTranslation();

  //   Mutation action
  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: async (values: { email: string }) => {
      const response = await forgotPassword(values.email);

      // Handle Error
      if (!response) {
           throw new Error(t("error_server"));
      }

      if ("error" in response) {
        throw new Error(
          typeof response.error === "string"
            ? response.error
            : t("something_went_wrong")
        );
      }

      return response;
    },
  });
  return { isPending, error, forget: mutateAsync };
}
