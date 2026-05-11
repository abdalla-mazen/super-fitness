import { newPassword } from "@/lib/apis/newpassword.api";
import type { ResetPasswordValues } from "@/lib/schemes/newpassword.schema";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";


export default function useResetPassword() {
  // Translation
const { t } = useTranslation();

  // Mutation
  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: async (values: ResetPasswordValues) => {
      const response = await newPassword(values.email, values.newPassword);
      // Handle Error
      if (!response) {
        throw new Error(t("error_server"));
      }
      return response;
    },
  });

  return { isPending, error, resetPassword: mutateAsync };
}
