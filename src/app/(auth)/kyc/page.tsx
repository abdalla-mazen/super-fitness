import { useState, useRef } from "react";
import Step1Gender from "./_components/step1-gender";
import Step2Age from "./_components/step2-age";
import Step3Weight from "./_components/step3-weight";
import Step4Height from "./_components/step4-height";
import Step5Goal from "./_components/step5-goal";
import Step6Level from "./_components/step6-level";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "@/components/shared/toggle-language";

export default function KYCPage() {
  // Translation
  const { t } = useTranslation();

  // KYC steps
  const steps = [
    { id: 1, component: Step1Gender },
    { id: 2, component: Step2Age },
    { id: 3, component: Step3Weight },
    { id: 4, component: Step4Height },
    { id: 5, component: Step5Goal },
    { id: 6, component: Step6Level },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = steps[currentStep].component;

const stepRef = useRef<{ trigger: () => Promise<boolean> }>(null);

  // Next functionality
  const nextStep = async () => {
    if (stepRef.current?.trigger) {
      const valid = await stepRef.current.trigger();
      if (!valid) return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  // Prev functionality
  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  return (
    <div className="lg:w-[510px] w-[370px] text-dark dark:text-light text-center mx-auto mt-10 space-y-4">
      {/* Language Toggle */}
      <ToggleLanguage />

      <div className="flex justify-start mt-10">
        <Button className="bg-main text-light w-10" onClick={prevStep} disabled={currentStep === 0}>
          <ArrowLeft />
        </Button>
      </div>

      {/* Pass ref here */}
      <StepComponent ref={stepRef} />

      {currentStep < steps.length - 1 && (
        <div className="flex justify-center mt-8">
          <Button onClick={nextStep} className="bg-main text-light w-[343px] capitalize">
            {t("next")}
          </Button>
        </div>
      )}
    </div>
  );
}
