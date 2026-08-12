import { useForm, FormProvider } from "react-hook-form";
import EmailInput from "@/components/shared/email-input";
import { Button } from "@/components/ui/button";
import { useForgetPasswordSchema, type ForgetValues } from "@/lib/schemes/forget.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import useForget from "../hooks/use-forget";
import type { Dispatch, SetStateAction } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useTranslation } from "react-i18next";

type FormValues = {
  email: string;
};
type ForgetFormProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

export default function ForgetPassword({ step, setStep }: ForgetFormProps) {
  // Translation
  const { t } = useTranslation();
  // Mutation
  const { isPending, forget, error } = useForget();

  // Form
  const schema = useForgetPasswordSchema();
  const form = useForm<ForgetValues>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });
  const { isValid, isSubmitted } = form.formState;

  // Function
  const onSubmit = async (data: FormValues) => {
    localStorage.setItem("email", data.email);
    const res = await forget(data);
    if (res?.message === "success") {
      setStep(step + 1);
    }
  };

  return (
    <>
      {/* Header */}
      <h1 className="text-2xl md:text-5xl font-extrabold mb-14 font-Baloo">
        {t("forget_password_title")}{" "}
      </h1>

      {/* Form card */}
      <div className="w-[340px] sm:w-[400px] lg:max-w-[486px] p-5 md:p-10 rounded-4xl border flex flex-col text-dark dark:text-white border-dark dark:border-white items-center shadow">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Email input */}
            <EmailInput />

            {/* Validation error */}
            {form.formState.errors.email && (
              <Alert className="text-center mb-2 border  border-red-500 bg-transparent text-red-600 ">
                <AlertDescription className=" text-red-600 mx-auto">
                  {form.formState.errors.email.message}
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

            {/* Send OTP */}
            <Button
              disabled={isPending || (!isValid && isSubmitted)}
              type="submit"
              className="mt-4 w-full
                 text-light py-2"
            >
              {isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <span className="flex items-center gap-2"> {t("send_otp")} </span>
              )}
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
