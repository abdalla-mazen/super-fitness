import { Shield, Lock, Eye, Key, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function SecurityPage() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-[url(/assets/toWEBP/auth-layout-bg.webp)]" />

      <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-xl bg-white/55 dark:bg-[#24242499]">
        <div className="container mx-auto px-4 py-10 max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <Shield className="w-20 h-20 text-main" />
            </div>
            <h1 className="font-Baloo text-5xl md:text-6xl font-extrabold mb-4 capitalize">
              {t("security")}
            </h1>
            <p className="text-lg opacity-80">{t("security-content")}</p>
          </div>

          {/* Security Sections */}
          <div className="space-y-6">
            {/* Data Encryption */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <Lock className="w-8 h-8 text-main  mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("data-encryption")}
                  </h2>
                  <p className="text-base leading-relaxed">{t("encryption-content")}</p>
                </div>
              </div>
            </div>

            {/* Password Security */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <Key className="w-8 h-8 text-main  mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("password-security")}
                  </h2>
                  <p className="text-base leading-relaxed mb-3">{t("password-security-content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>{t("password-li-1")}</li>
                    <li>{t("password-li-2")}</li>
                    <li>{t("password-li-3")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy Controls */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-main  mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("privacy-controls")}
                  </h2>
                  <p className="text-base leading-relaxed">{t("privacy-controls-content")}</p>
                </div>
              </div>
            </div>

            {/* Security Best Practices */}
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-main mt-1" />
                <div>
                  <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
                    {t("security-practices")}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>{t("security-practices-li-1")}</li>
                    <li>{t("security-practices-li-2")}</li>
                    <li>{t("security-practices-li-3")}</li>
                    <li>{t("security-practices-li-4")}</li>
                    <li>{t("security-practices-li-5")}</li>
                  </ul>
                </div>
              </div>
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
