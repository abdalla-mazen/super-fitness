import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { LoaderCircle } from "lucide-react";
import { Controller, FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import useVerify from "../hooks/use-verify";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ResendCode from "./otp-timer";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useCreateOtpSchema } from "@/lib/schemes/otp.schema";

type CodeValues = {
  resetCode: string;
};
type OtpFormProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

export default function OtpForm({ step, setStep }: OtpFormProps) {
  // Translation
  const { t } = useTranslation();

  // Mutation
  const { isPending, error, verify } = useVerify();

  // Form
  const otpSchema = useCreateOtpSchema();
  const form = useForm<CodeValues>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(otpSchema),
    mode: "onTouched",
  });
  const { isValid, isSubmitted } = form.formState;

  // Function
  const onSubmit: SubmitHandler<CodeValues> = async (values) => {
    const res = await verify(values);
    console.log(res);
    if (res?.status === "Success") {
      setStep(step + 1);
    }
  };

  return (
    <div className="space-y-6 mx-auto w-full flex flex-col items-center text-dark dark:text-white">
      {/* Header */}
      <h1 className="text-2xl md:text-5xl mb-14 font-extrabold text-center capitalize">
        {t("otp_title")}
      </h1>

      {/* Form card */}
      <div className="w-[340px] sm:w-[400px] lg:max-w-[486px] bg-white/10 dark:bg-dark/10 p-5 md:p-10 rounded-4xl text-center border border-dark dark:border-light shadow">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <p className="text-center text-2xl ">{t("otp_description")}</p>

            {/* OTP with Controller */}
            <div className="flex justify-center  pt-8">
              <Controller
                name="resetCode"
                control={form.control}
                render={({ field }) => (
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                    </InputOTPGroup>

                    <InputOTPGroup>
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>

                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>

                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>

                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                    </InputOTPGroup>

                    <InputOTPGroup>
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />
            </div>

            {/* Validation error */}
            {form.formState.errors.resetCode && (
              <Alert className="text-center mb-2 border  border-red-500 bg-transparent text-red-600 ">
                <AlertDescription className=" text-red-600 mx-auto">
                  {form.formState.errors.resetCode.message}
                </AlertDescription>
              </Alert>
            )}

            {/* Error from server */}
            {error && (
              <Alert className="text-center mb-2 border  border-red-500 bg-transparent text-red-600 ">
                <AlertDescription className=" text-red-600 mx-auto">
                  {error.message}
                </AlertDescription>
              </Alert>
            )}

            {/* submit button */}
            <Button
              type="submit"
              className="capitalize text-light mt-10"
              disabled={isPending || (!isValid && isSubmitted)}
            >
              {isPending ? <LoaderCircle className="animate-spin" /> : t("confirm")}
            </Button>

            {/* Timer */}
            <ResendCode />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
