import ToggleLanguage from "@/components/shared/toggle-language";
import { useTranslation } from "react-i18next";
import ChangePasswordForm from "./_components/change-password-form";

export default function ChangePasswordPage() {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-14 min-w-1/2 max-w-1/2 text-center text-dark dark:text-white">
      {/* Language Toggle */}
      <ToggleLanguage />

      {/* Welcome text */}
      <div className="flex flex-col gap-2 md:gap-4 font-Baloo">
        <h1 className="font-normal text-xl capitalize">{t("welcome")}</h1>
        <h2 className="font-extrabold text-2xl md:text-4xl capitalize">{t("change-password")}</h2>
      </div>

      {/* Register form */}
      <ChangePasswordForm />
    </div>
  );
}
