import { useKYC } from "@/components/providers/kyc-provider/kyc.provider";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Form } from "@/components/ui/form";
import NumberPicker from "@/components/ui/number-picker";
import { HeightSchema, type HeightValue } from "@/lib/schemas/kyc.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step4Height() {
  // Translation
  const { t } = useTranslation();

  // Context to save ( register , KYC ) data
  const { data, updateData } = useKYC();

  // Form
  const form = useForm<HeightValue>({
    defaultValues: { height: data.height ?? 167 },
    resolver: zodResolver(HeightSchema),
  });

  const height = form.watch("height");

  useEffect(() => {
    updateData({ height });
  }, [height]);

  return (
    <div className="text-center">
      {/* /Progress */}
      <CircularProgress current={4} total={6} />

      {/* Tell us */}
      <h1 className="capitalize font-extrabold text-4xl md:text-5xl mt-1">
        {t("height")}
        <span className="text-lg font-normal block mt-2">{t("help-us")}</span>
      </h1>

      <Form {...form}>
        <form>
          {/* Heiht */}
          <NumberPicker name="height" control={form.control} unit={t("cm")} min={85} max={220} />
        </form>
      </Form>
    </div>
  );
}
