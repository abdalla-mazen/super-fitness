import { z } from "zod";

export const GenderSchema = z.object({
  gender: z.string().nonempty("Your gender is required"),
});

export const AgeSchema = z.object({
  age: z.number(),
});

export const WeightSchema = z.object({
  weight: z.number(),
});

export const HeightSchema = z.object({
  height: z.number(),
});

export const GoalSchema = z.object({
  goal: z.string(),
});

export const LevelSchema = z.object({
  activityLevel: z.string(),
});

export type GenderValue = z.infer<typeof GenderSchema>;
export type AgeValue = z.infer<typeof AgeSchema>;
export type WeightValue = z.infer<typeof WeightSchema>;
export type HeightValue = z.infer<typeof HeightSchema>;
export type GoalValue = z.infer<typeof GoalSchema>;
export type LevelValue = z.infer<typeof LevelSchema>;
