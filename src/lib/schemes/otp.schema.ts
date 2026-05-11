import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useCreateOtpSchema = () =>{
// Translation
const { t } = useTranslation();

  return z.object({
    resetCode: z
    .string()
    .min(6, (t("invalid_otp")))
    .max(6, (t("invalid_otp")))
    .regex(/^[0-9]+$/, (t("otp_required"))),
  });
}

export type OtpSchemaType = z.infer<ReturnType<typeof useCreateOtpSchema>>;