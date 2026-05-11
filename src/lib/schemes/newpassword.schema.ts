import { useTranslation } from "react-i18next";
import z from "zod";

export const useResetPasswordSchema = () => {
  // Translation
const { t } = useTranslation(); 
  // Schema
  return z
    .object({
      email: z.email(t("invalid_email")).nonempty(t("email_required")),
      password: z.string(t("invalid_password")).nonempty(t("password_required")),
      newPassword: z.string(t("invalid_password")).nonempty(t("password_required")),
    })
    .refine((data) => data.password === data.newPassword, {
      message: t("password_not_match"),
      path: ["newPassword"],
    });
};
// type Reset Password
export type ResetPasswordValues = z.infer<
  ReturnType<typeof useResetPasswordSchema>
>;

