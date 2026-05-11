import i18n from "i18next";

import { Button } from "../ui/button";

export default function ToggleLanguage() {
  // Get current language from localStorage
  const lng = localStorage.getItem("i18nextLng") || "en";

  // Change language handler
  const toggleLanguage = () => {
    const newLng = lng === "en" ? "ar" : "en";
    i18n.changeLanguage(newLng);
  };

  return (
    <Button onClick={toggleLanguage} className="text-white" size="sm">
      {lng === "en" ? "العربية" : "English"}
    </Button>
  );
}
