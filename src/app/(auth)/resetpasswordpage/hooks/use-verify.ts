import { verifyAction } from "@/lib/apis/otp.api";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";


type CodeValues = {
  resetCode: string;
};

export default function useVerify() {
// Translation
const { t } = useTranslation(); 

  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: async (values: CodeValues) => {
      const response = await verifyAction(values.resetCode);

      // Handle Error
      if (!response) {
          throw new Error(t("error_server"));
      }

      if ("error" in response) {
        throw new Error(
          typeof response.error === "string"
            ? response.error
            : "Something went wrong"
        );
      }

      return response;
    },
  });
  return { isPending, error, verify: mutateAsync };
}
