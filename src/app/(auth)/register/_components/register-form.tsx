import { Input } from "@/components/ui/input";
import { RegisterSchema, type RegisterValues } from "@/lib/schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useKYC } from "@/components/providers/kyc-provider/kyc.provider";
import PasswordInput from "@/components/ui/password-input";
import { useTranslation } from "react-i18next";

export default function RegisterForm() {
  // Translation
  const { t } = useTranslation();

  // Router
  const navigate = useNavigate();

  // Context to save ( register , KYC ) data
  const { updateData } = useKYC();

  // Form
  const form = useForm<RegisterValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  // On submit function
  const onSubmit = (values: RegisterValues) => {
    updateData(values);
    navigate("/kyc");
  };

  return (
    <div className="text-center bg-light/10 dark:bg-dark/10 text-dark dark:text-light p-5 md:p-10 rounded-[3rem] border border-dark dark:border-light">
      <h1 className="font-Baloo font-extrabold text-2xl text-center capitalize mb-4">
        {t("register")}
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex justify-center items-center flex-col"
        >
          {/* First name */}
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <Input
                    icon={<User className="w-4 h-4" />}
                    {...field}
                    placeholder={t("first-name")}
                    // className="pl-10 placeholder:text-dark"
                  />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last name */}
          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <Input
                    icon={<User className="w-4 h-4" />}
                    {...field}
                    placeholder={t("last-name")}
                    // className="pl-10 placeholder:text-dark"
                  />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <Input
                    icon={<Mail className="w-4 h-4" />}
                    {...field}
                    placeholder={t("email")}
                    // className="pl-10 placeholder:text-dark"
                  />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <PasswordInput {...field} placeholder={t("password")} className="w-[310px]" />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Re-password */}
          <FormField
            name="rePassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <PasswordInput {...field} placeholder={t("repassword")} className="w-[310px]" />
                </FormControl>

                {/* Feeadback */}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-80 flex justify-end mb-7">
            <Link
              to="/reset-password"
              className="font-Baloo font-bold text-main text-base underline block text-end "
            >
              {t("forgot_password")}
            </Link>
          </div>

          <Button type="submit" className="text-light">
            {t("register")}
          </Button>

          <span className="block mb-6 mt-2 capitalize">
            {t("have-account")}{" "}
            <Link to="/login" className="text-main underline">
              {t("login")}
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
}
