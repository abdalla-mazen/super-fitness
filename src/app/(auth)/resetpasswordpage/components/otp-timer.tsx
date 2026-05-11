import { useEffect, useState } from "react";
import useForget from "../hooks/use-forget";
import { useTranslation } from "react-i18next";

export default function ResendCode() {
  // Translation
  const { t } = useTranslation();

  // State
  const [timeLeft, setTimeLeft] = useState(60);
  const { forget } = useForget();
  useEffect(() => {
    // Decrease timer every 1s until it reaches 0
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Function
  const handleResend = () => {
    const email = localStorage.getItem("email");
    if (email) {
      forget({ email });
    }
    setTimeLeft(60);
  };

  return (
    <span className="text-base text-dark dark:text-white flex flex-col text-center mt-6">
      {t("resend_otp")}
      {timeLeft > 0 ? (
        <span className="text-main font-bold">{t("resend_in", { time: timeLeft })}</span>
      ) : (
        <button onClick={handleResend} className="text-main font-bold underline">
          {t("resend_otp_btn")}
        </button>
      )}
    </span>
  );
}
