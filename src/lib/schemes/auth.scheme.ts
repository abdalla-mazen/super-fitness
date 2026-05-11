import { z } from "zod";

// Login Scheme
export const loginScheme = z.object({
  email: z.email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginScheme = z.infer<typeof loginScheme>;
