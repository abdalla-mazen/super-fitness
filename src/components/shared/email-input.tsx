import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function EmailInput() {
  // Translation
  const { t } = useTranslation();

  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className="mb-4">
          <FormLabel htmlFor="email" className="text-2xl text-white mx-auto mb-2 block text-center">
            {t("enter_email")}
          </FormLabel>

          <FormControl>
            <div className="relative">
              <Input
                icon={<Mail className="h-4 w-4" />}
                type="email"
                placeholder={t("email")}
                {...field}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
