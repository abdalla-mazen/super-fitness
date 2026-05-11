import { useTranslation } from "react-i18next";
import LoginForm from "./components/login-form";
import ToggleLanguage from "@/components/shared/toggle-language";

export default function LoginPage() {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center gap-14 min-w-1/2 max-w-1/2 text-center text-dark dark:text-light">
      {/* Language Toggle */}
      <ToggleLanguage />

      {/* Welcome Text */}
      <div className="flex flex-col gap-4 font-Baloo">
        <p className="font-normal text-xl">{t("welcome")}</p>
        <h1 className="font-extrabold text-4xl">{t("welcome_back")}</h1>
      </div>

      {/* Login Form */}
      <LoginForm />
    </div>
  );
}
