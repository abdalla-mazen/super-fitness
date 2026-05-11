import { useKYC } from "@/components/providers/kyc-provider/kyc.provider";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Form } from "@/components/ui/form";
import NumberPicker from "@/components/ui/number-picker";
import { WeightSchema, type WeightValue } from "@/lib/schemas/kyc.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step3Weight() {
  // Translation
  const { t } = useTranslation();

  // Context to save ( register , KYC ) data
  const { data, updateData } = useKYC();

  // Form
  const form = useForm<WeightValue>({
    defaultValues: { weight: data.weight ?? 90 },
    resolver: zodResolver(WeightSchema),
  });

  const weight = form.watch("weight");

  useEffect(() => {
    updateData({ weight });
  }, [weight]);

  return (
    <div className="text-center">
      {/* Progress */}
      <CircularProgress current={3} total={6} />

      {/* Tell us */}
      <h1 className="capitalize font-extrabold text-4xl md:text-5xl mt-1">
        {t("weight")}
        <span className="text-lg font-normal block mt-2">{t("help-us")}</span>
      </h1>

      <Form {...form}>
        <form>
          {/* Weight */}
          <NumberPicker name="weight" control={form.control} unit={t("kg")} min={35} max={170} />
        </form>
      </Form>
    </div>
  );
}
