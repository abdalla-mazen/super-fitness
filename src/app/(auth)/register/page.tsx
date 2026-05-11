import { useTranslation } from "react-i18next";
import RegisterForm from "./_components/register-form";
import ToggleLanguage from "@/components/shared/toggle-language";

export default function RegisterPage() {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-14 min-w-1/2 max-w-1/2 text-center text-dark dark:text-light">
      {/* Language Toggle */}
      <ToggleLanguage />

      {/* Welcome text */}
      <div className="flex flex-col gap-2 md:gap-4 font-Baloo">
        <h1 className="font-normal text-xl capitalize">{t("welcome")}</h1>
        <h2 className="font-extrabold text-2xl md:text-4xl capitalize">{t("create-account")}</h2>
      </div>

      {/* Register form */}
      <RegisterForm />
    </div>
  );
}
