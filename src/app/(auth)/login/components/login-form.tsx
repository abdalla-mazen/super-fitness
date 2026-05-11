import { loginScheme, type LoginScheme } from "@/lib/schemes/auth.scheme";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/password-input";
import ErrorMessage from "@/components/shared/error-message";
import useLogin from "../../hooks/use-login";
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";

export default function LoginForm() {
  // Translation
  const { t } = useTranslation();

  // Use the custom hook
  const { error, isPending, login } = useLogin();

  // Form setup
  const form = useForm<LoginScheme>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginScheme),
  });

  // Form submission handler
  const onSubmitHandler = (values: LoginScheme) => {
    login(values);
  };

  // Handling Error state
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="flex flex-col gap-4 p-5 md:p-10 border bg-light/10 dark:bg-dark/10 border-dark dark:border-light rounded-[3rem] text-dark dark:text-light">
      <p className="font-Baloo font-extrabold text-2xl text-center capitalize">{t("login")}</p>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-4">
          {/* Email form field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              // Form Item
              <FormItem>
                {/* Form Control */}
                <FormControl>
                  {/* Input field */}
                  <Input
                    icon={<Mail className="w-4 h-4" />}
                    type="email"
                    placeholder={t("email")}
                    {...field}
                  />
                </FormControl>
                {/* Form Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password form field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              // Form Item
              <FormItem>
                {/* Form Control */}
                <FormControl>
                  {/* Password input */}
                  <PasswordInput placeholder={t("password")} {...field} />
                </FormControl>
                {/* Form message */}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-center space-y-6 pt-2 -translate-y-4">
            {/* Forgot password */}
            <div className="w-full rtl:text-start text-end">
              <Link
                to="/reset-password"
                className="font-Baloo font-bold text-main text-base underline"
              >
                {t("forgot_password")}
              </Link>
            </div>

            {/* Error message */}
            {error && <ErrorMessage message={error.message} />}

            {/* Submit button */}
            <Button
              type="submit"
              loading={isPending}
              disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
              className="w-full capitalize text-light"
            >
              {t("login")}
            </Button>

            {/* Register */}
            <p className="-translate-y-2 text-dark dark:text-light">
              {t("no_account")}{" "}
              <Link to="/register" className="font-Baloo font-bold text-main text-base underline">
                {t("register")}
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
