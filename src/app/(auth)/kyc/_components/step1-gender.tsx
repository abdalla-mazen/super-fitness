import { useKYC } from "@/components/providers/kyc-provider/kyc.provider";
import { CircularProgress } from "@/components/ui/circular-progress";
import { GenderSchema, type GenderValue } from "@/lib/schemas/kyc.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mars, Venus } from "lucide-react";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { Form, FormField, FormItem, FormMessage, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export type StepRef = {
  trigger: () => Promise<boolean>;
};

type Step1GenderProps = Record<never, never>;

const Step1Gender = forwardRef<StepRef, Step1GenderProps>((_, ref) => {
  const { t } = useTranslation();
  const { data, updateData } = useKYC();

  const form = useForm<GenderValue>({
    defaultValues: {
      gender: data.gender || "",
    },
    resolver: zodResolver(GenderSchema),
  });

  const selectedGender = form.watch("gender");

  useEffect(() => {
    if (selectedGender) {
      updateData({ gender: selectedGender });
    }
  }, [selectedGender, updateData]);

  useImperativeHandle(ref, () => ({
    trigger: form.trigger,
  }));

  return (
    <div className="text-center">
      <CircularProgress current={1} total={6} />

      <h1 className="mt-1 mb-10 font-extrabold text-4xl md:text-5xl uppercase">
        {t("tell-us")}
        <span className="block mt-2 font-normal text-lg capitalize">{t("know-gender")}</span>
      </h1>

      <Form {...form}>
        <form className="space-y-8">
          <FormField
            name="gender"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormControl>
                  <div className="flex justify-center gap-12 text-CharcoalGray dark:text-light">
                    <button
                      type="button"
                      onClick={() => field.onChange("male")}
                      className={cn(
                        "flex flex-col items-center gap-4 transition-all duration-300",
                        selectedGender === "male"
                          ? "scale-110"
                          : "scale-100 opacity-60 hover:opacity-80",
                      )}
                    >
                      <div
                        className={cn(
                          "flex flex-col justify-center items-center border-2 rounded-full w-24 h-24 transition-all duration-300",
                          selectedGender === "male" &&
                            "border-2 border-main shadow-lg shadow-orange-500/70",
                        )}
                      >
                        <Mars className="w-9 h-14" strokeWidth={2} />
                        <span className="mb-2">{t("male")}</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => field.onChange("female")}
                      className={cn(
                        "flex flex-col items-center gap-4 transition-all duration-300",
                        selectedGender === "female"
                          ? "scale-110"
                          : "scale-100 opacity-60 hover:opacity-80",
                      )}
                    >
                      <div
                        className={cn(
                          "flex flex-col justify-center items-center border-2 rounded-full w-24 h-24 transition-all duration-300",
                          selectedGender === "female" &&
                            "border-2 border-main shadow-lg shadow-orange-500/70",
                        )}
                      >
                        <Venus className="w-9 h-14" strokeWidth={2} />
                        <span className="mb-2">{t("female")}</span>
                      </div>
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
});

Step1Gender.displayName = "Step1Gender";

export default Step1Gender;
