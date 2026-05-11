import { ShieldAlert, FileText, Database, UserCheck, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-[url(/assets/toWEBP/auth-layout-bg.webp)]" />

      <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-xl bg-white/55 dark:bg-[#24242499]">
        <div className="container mx-auto px-4 py-10 max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <ShieldAlert className="w-20 h-20 text-main" />
            </div>
            <h1 className="font-Baloo text-5xl md:text-6xl font-extrabold mb-4 capitalize">
              {t("policy")}
            </h1>
            <p className="text-lg opacity-80">{t("policy-updated")}</p>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-6">
            {/* Information We Collect */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <Database className="w-8 h-8 text-main mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("info-we-collect")}
                  </h2>
                  <p className="text-base leading-relaxed mb-3">{t("info-we-collect-content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>{t("info-li-1")}</li>
                    <li>{t("info-li-2")}</li>
                    <li>{t("info-li-3")}</li>
                    <li>{t("info-li-4")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-main mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("how-we-use")}
                  </h2>
                  <p className="text-base leading-relaxed mb-3">{t("how-we-use-content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>{t("use-li-1")}</li>
                    <li>{t("use-li-2")}</li>
                    <li>{t("use-li-3")}</li>
                    <li>{t("use-li-4")}</li>
                    <li>{t("use-li-5")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-main mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("info-sharing")}
                  </h2>
                  <p className="text-base leading-relaxed mb-3">{t("info-sharing-content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>{t("sharing-li-1")}</li>
                    <li>{t("sharing-li-2")}</li>
                    <li>{t("sharing-li-3")}</li>
                    <li>{t("sharing-li-4")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <UserCheck className="w-8 h-8 text-main mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("your-rights")}
                  </h2>
                  <p className="text-base leading-relaxed mb-3">{t("your-rights-content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>{t("rights-li-1")}</li>
                    <li>{t("rights-li-2")}</li>
                    <li>{t("rights-li-3")}</li>
                    <li>{t("rights-li-4")}</li>
                    <li>{t("rights-li-5")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div>
                <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                  {t("data-retention")}
                </h2>
                <p className="text-base leading-relaxed">{t("data-retention-content")}</p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div>
                <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                  {t("children-privacy")}
                </h2>
                <p className="text-base leading-relaxed">{t("children-privacy-content")}</p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-main/10 border border-dark dark:border-white rounded-3xl p-6 text-center">
              <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">{t("contact-us")}</h2>
              <p className="text-base leading-relaxed">
                {t("contact-us-content")}
                <br />
                <span className="font-semibold">{t("contact-email")}</span>
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link
              to="/account"
              className="capitalize inline-block font-Baloo font-semibold text-lg hover:text-main transition-colors"
            >
              {t("back-to")}{" "}
              <span className="capitalize ms-2 bg-main px-3 py-1 rounded-full font-bold">
                {t("account")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
