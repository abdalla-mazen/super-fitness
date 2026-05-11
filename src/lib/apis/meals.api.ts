import axios from "axios";
import type { MealDetailsResponse } from "../types/meals";

export const mealsCategories = async () => {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");

    if (response.status !== 200) {
      throw new Error("Something went wrong error deticted in the client");
    }

    const data = response.data;

    return data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
  }
};

// Meals by Category
export const mealsByCategory = async (category: string) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );

    if (response.status !== 200) {
      throw new Error("Something went wrong error deticted in the client");
    }

    const data = response.data;

    return data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("Error fetching meals by category:", error.message);
  }
};

// Meal Details by ID
export const mealDetailsById = async (mealId: string | null) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );

    if (response.status !== 200) {
      throw new Error("Something went wrong error deticted in the client");
    }

    const data = response.data as MealDetailsResponse;

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("Error fetching meal details by ID:", error.message);
  }
};
