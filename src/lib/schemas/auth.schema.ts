import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstName: z.string().nonempty("Your is first name required"),
    lastName: z.string().nonempty("Your is last name required"),
    email: z.string().nonempty("Your email is required"),
    password: z.string().nonempty("Your password is required"),
    rePassword: z.string().nonempty("re-password is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export const ChangePasswordSchema = z
  .object({
    password: z.string().nonempty("Your old password is required"),
    newPassword: z.string().nonempty("Your new password is required"),
    reNewPassword: z.string().nonempty("Re new password is required"),
  })
  .refine((data) => data.newPassword === data.reNewPassword, {
    message: "Passwords do not match",
    path: ["reNewPassword"],
  });

export type RegisterValues = z.infer<typeof RegisterSchema>;
export type ChangePasswordValues = z.infer<typeof ChangePasswordSchema>;
