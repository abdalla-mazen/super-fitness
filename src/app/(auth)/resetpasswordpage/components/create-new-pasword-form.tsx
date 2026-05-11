import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoaderCircle } from "lucide-react";
import useResetPassword from "../hooks/use-reset-password";
import { useResetPasswordSchema, type ResetPasswordValues } from "@/lib/schemes/newpassword.schema";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import PasswordInput from "@/components/ui/password-input";

export default function CreateNewPaswordForm() {
  // Translation
  const { t } = useTranslation();

  // Mutation
  const { isPending, error, resetPassword } = useResetPassword();

  // Navigation
  const navigate = useNavigate();

  // Form
  const schema = useResetPasswordSchema();
  const form = useForm<ResetPasswordValues>({
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  // const { isValid, isSubmitted } = form.formState;

  //  Function
  const onSubmit = async (values: ResetPasswordValues) => {
    const res = await resetPassword(values);
    console.log(res);
    if (res?.data?.message === "success") {
      localStorage.removeItem("email");
      navigate("/login");
    }
  };

  // Effect
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      form.setValue("email", email);
    }
  }, [form]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-14 capitalize">
        {t("create_new_password")}
      </h1>

      {/* Form card */}
      <div className="w-[340px] sm:w-[400px] lg:max-w-[486px] mx-auto rounded-4xl border border-dark dark:border-light shadow p-5 md:p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <p className="text-center text-2xl">{t("new_password_title")}</p>
            <div className="flex flex-col space-y-4">
              {/* Password */}
              <PasswordInput placeholder={t("new_password")} name="password" />
              <PasswordInput placeholder={t("confirm_new_password")} name="newPassword" />

              {/* Error Validation */}
              {(form.formState.errors.password || form.formState.errors.newPassword) && (
                <>
                  <Alert className="text-center mb-2 border  border-red-500 bg-transparent text-red-600 ">
                    <AlertDescription className=" text-red-600 mx-auto">
                      {form.formState.errors.password?.message ||
                        form.formState.errors.newPassword?.message}
                    </AlertDescription>
                  </Alert>
                </>
              )}

              {/* Error from server */}
              {error && (
                <Alert className="text-center mb-2 border border-red-500 bg-transparent text-red-600 ">
                  <AlertDescription className=" text-red-600 mx-auto">
                    {error.message}
                  </AlertDescription>
                </Alert>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full text-light capitalize  mt-3.5"
                disabled={isPending}
              >
                {isPending ? <LoaderCircle className="animate-spin" /> : t("reset_password")}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
