import { useKYC } from "@/components/providers/kyc-provider/kyc.provider";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Form } from "@/components/ui/form";
import NumberPicker from "@/components/ui/number-picker";
import { AgeSchema, type AgeValue } from "@/lib/schemas/kyc.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step2Age() {
  // Translation
  const { t } = useTranslation();

  // Context to save ( register , KYC ) data
  const { data, updateData } = useKYC();

  // Form
  const form = useForm<AgeValue>({
    defaultValues: { age: data.age ?? 25 },
    resolver: zodResolver(AgeSchema),
  });

  const age = form.watch("age");

  useEffect(() => {
    updateData({ age });
  }, [age]);

  return (
    <div className="text-center">
      {/* Progress */}
      <CircularProgress current={2} total={6} />

      {/* Tell us */}
      <h1 className="capitalize font-extrabold text-4xl md:text-5xl mt-1">
        {t("how-old")}
        <span className="text-lg font-normal block mt-2">{t("help-us")}</span>
      </h1>

      <Form {...form}>
        <form>
          {/* Age */}
          <NumberPicker
            name="age"
            control={form.control}
            unit={t("years-old")}
            min={10}
            max={100}
          />
        </form>
      </Form>
    </div>
  );
}
