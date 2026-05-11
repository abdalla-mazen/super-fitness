import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import PasswordInput from "@/components/ui/password-input";
import { ChangePasswordSchema, type ChangePasswordValues } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useChangePassword } from "../../hooks/use-change-password";
import ErrorMessage from "@/components/shared/error-message";
import { LoaderCircle } from "lucide-react";

export default function ChangePasswordForm() {
  // Translation
  const { t } = useTranslation();

  // Change password query
  const { isPending, error, change } = useChangePassword();

  // Form
  const form = useForm<ChangePasswordValues>({
    defaultValues: {
      password: "",
      newPassword: "",
      reNewPassword: "",
    },
    resolver: zodResolver(ChangePasswordSchema),
  });

  // On submit function
  const onSubmit = (values: ChangePasswordValues) => {
    change({
      password: values.password,
      newPassword: values.newPassword,
    });
  };

  return (
    <div className="text-center text-white  w-[350px] sm:w-[400px] lg:max-w-[486px]  py-10 rounded-[3rem] border border-dark dark:border-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 text-secondary flex justify-center items-center flex-col"
        >
          {/* Old password */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder={t("old-password")}
                    className="pl-10 placeholder:text-[#D3D3D3]"
                  />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New password */}
          <FormField
            name="newPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder={t("new-password")}
                    className="pl-10 my-2 placeholder:text-[#D3D3D3]"
                  />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Re new password */}
          <FormField
            name="reNewPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder={t("repassword")}
                    className="pl-10 placeholder:text-[#D3D3D3]"
                  />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error Message */}
          <div className="w-[343px] mt-4">{error && <ErrorMessage message={error?.message} />}</div>

          <Button type="submit" disabled={isPending} className="mt-6 text-white">
            {t("change-password")}{" "}
            {isPending && <LoaderCircle className="me-2 animate-spin" size={16} />}
          </Button>
        </form>
      </Form>
    </div>
  );
}
