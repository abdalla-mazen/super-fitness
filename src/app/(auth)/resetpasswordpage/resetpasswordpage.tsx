import { useState } from "react";
import OtpForm from "./components/otp-form";
import CreateNewPaswordForm from "./components/create-new-pasword-form";
import ForgetPassword from "./components/forget-password-form";
import ToggleLanguage from "@/components/shared/toggle-language";

export default function ResetPassword() {
  // State
  const [step, setStep] = useState<number>(0);

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-w-1/2 max-w-1/2 text-center">
      <ToggleLanguage />
      {step === 0 && <ForgetPassword step={step} setStep={setStep} />}
      {step === 1 && <OtpForm step={step} setStep={setStep} />}
      {step === 2 && <CreateNewPaswordForm />}
    </div>
  );
}
