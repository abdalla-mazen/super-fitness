import { useTranslation } from "react-i18next";
import z from "zod";

// Forget Schema
export const useForgetPasswordSchema = () => {
  // Translation
  const { t } = useTranslation();
  // Schema
  return z.object({
    email: z.email(t("invalid_email")).nonempty(t("email_required")),
  });
};
// type  Forget Schema
export type ForgetValues = z.infer<ReturnType<typeof useForgetPasswordSchema>>;
