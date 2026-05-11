import { useKYC } from "@/components/providers/kyc-provider/kyc.provider";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LevelSchema, type LevelValue } from "@/lib/schemas/kyc.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useRegisterKYC from "../../hooks/use-register-kyc";
import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/shared/error-message";
import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { activityLevels } from "@/lib/constants/kyc.constant";
import { Link } from "react-router";

export default function Step6Level() {
  // Translation
  const { t } = useTranslation();

  // Context to save ( register , KYC ) data
  const { data, updateData } = useKYC();

  const { error, isPending, registerKYC } = useRegisterKYC();

  // Form
  const form = useForm<LevelValue>({
    defaultValues: { activityLevel: data.activityLevel || "" },
    resolver: zodResolver(LevelSchema),
  });

  const handleLevelChange = (value: string) => {
    updateData({ activityLevel: value });
  };

  const OnSubmit = () => {
    registerKYC(data as RegisterKYCValues);
  };

  return (
    <div className="text-center">
      {/* Progress */}
      <CircularProgress current={6} total={6} />

      {/* Tell us */}
      <h1 className="capitalize font-extrabold text-4xl md:text-5xl mt-1 text-dark dark:text-white">
        {t("level")}
        <span className=" text-lg font-normal block mt-2">{t("help-us")}</span>
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(OnSubmit)}>
          {/* Activity level */}
          <FormField
            name="activityLevel"
            control={form.control}
            render={() => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <RadioGroup
                    onValueChange={handleLevelChange}
                    defaultValue="level1"
                    className="mx-auto mt-10 mb-4 text-dark dark:text-[#D3D3D3]"
                  >
                    {activityLevels.map((level) => (
                      <div
                        key={level.value}
                        className="flex items-center justify-between gap-3 w-80 px-4 py-3 rounded-3xl border border-dark dark:border-[#D9D9D9] data-[state=checked]:border-main bg-[#D3D3D333]/50"
                      >
                        <Label htmlFor={level.value}>{level.label}</Label>
                        <RadioGroupItem value={level.value} id={level.value} />
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="flex justify-center mb-6 capitalize font-bold">
            <span>(if error occuered)</span>
            {t("back-to")}
            <Link to="/register" className="text-main underline ms-1">
              {t("register")}
            </Link>
          </p>

          {/* Error message */}
          {error && <ErrorMessage message={error?.message} />}

          <Button type="submit" className="capitalize bg-main w-[343px] mt-6" disabled={isPending}>
            {t("submit")} {isPending && <LoaderCircle className="me-2 animate-spin" size={16} />}
          </Button>
        </form>
      </Form>
    </div>
  );
}
