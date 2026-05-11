import { useTranslation } from "react-i18next";

export default function ScrollingTicker() {
  // Translation
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Variables
  const items = [
    t("liveClasses"),
    t("outdoorOnlineTrainers"),
    t("personalTraining"),
    t("personalTrainers"),
    t("liveClasses"),
    t("outdoorOnlineTrainers"),
    t("personalTraining"),
    t("personalTrainers"),
  ];

  return (
    <div className="bg-main py-4 overflow-hidden">
      <div className={`flex ${isRTL ? "flex-row-reverse" : ""} animate-scroll`}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center whitespace-nowrap">
            <span className="text-white font-bold text-xl px-8">{item}</span>
            <span className="text-white text-2xl">✦</span>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex items-center whitespace-nowrap">
            <span className="text-white font-bold text-xl px-8">{item}</span>
            <span className="text-white text-2xl">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
