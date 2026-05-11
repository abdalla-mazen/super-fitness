import { Mail, PhoneIcon } from "lucide-react";
import ScrollingTicker from "./scrolling-ticker";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      {/* Scrolling bar */}
      <ScrollingTicker />

      {/* Footer content */}
      <div className="bg-[#F3F3F4] text-CharcoalGray dark:bg-[#232424] dark:text-[#F3F3F4] p-4 md:px-20 md:py-10 font-Baloo flex flex-col md:flex-row md:justify-between gap-6">
        {/* 1 */}
        <div className="w-72">
          <img src="/assets/toWEBP/logo.webp" className="w-20 h-14 mb-2" alt="" />
          <p>{t("footer-1")}</p>
        </div>

        {/* 2 */}
        <div className="w-60">
          <h1 className="uppercase font-black text-lg">{t("contact-us")}</h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <PhoneIcon className="w-4" />
            </div>

            <span>+91 123 456 789</span>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <Mail className="w-4" />
            </div>

            <span>info@gmail.com</span>
          </div>
        </div>

        {/* 3 */}
        <div className="w-60">
          <h1 className="uppercase font-black text-lg">{t("gym-time")}</h1>
          <div className="mt-6">
            <p>{t("gym-time-1")}</p>
            <p className="mt-2">{t("gym-time-2")}</p>
          </div>
        </div>

        {/* 4 */}
        <div className="w-60">
          <h1 className="uppercase font-black text-lg mb-6">{t("our-gym")}</h1>
          <span>{t("gym-location")}</span>
        </div>
      </div>
    </>
  );
}
