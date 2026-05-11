import { useKYC } from "@/components/providers/kyc-provider/kyc.provider";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { goals } from "@/lib/constants/kyc.constant";
import { GoalSchema, type GoalValue } from "@/lib/schemas/kyc.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step5Goal() {
  // Translation
  const { t } = useTranslation();

  // Context to save ( register , KYC ) data
  const { data, updateData } = useKYC();

  // Form
  const form = useForm<GoalValue>({
    defaultValues: { goal: data.goal || "" },
    resolver: zodResolver(GoalSchema),
  });

  // Handle goal change function
  const handleGoalChange = (value: string) => {
    updateData({ goal: value });
  };

  return (
    <div className="text-center">
      {/* Progress */}
      <CircularProgress current={5} total={6} />

      {/* Tell us */}
      <h1 className="capitalize font-extrabold text-4xl md:text-5xl mt-1 text-dark dark:text-white">
        {t("goal")}
        <span className=" text-lg font-normal block mt-2">{t("help-us")}</span>
      </h1>

      <Form {...form}>
        <form>
          {/* Goal */}
          <FormField
            name="goal"
            control={form.control}
            render={() => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <RadioGroup
                    onValueChange={handleGoalChange}
                    defaultValue="Gain weight"
                    className="mx-auto mt-10"
                  >
                    {goals.map((goal) => (
                      <div
                        key={goal.value}
                        className="flex items-center justify-between gap-3 w-80 px-4 py-3 rounded-3xl border border-dark dark:border-white bg-[#D3D3D333]/50"
                      >
                        <Label htmlFor={goal.value}>{goal.label}</Label>
                        <RadioGroupItem value={goal.value} id={goal.value} />
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
