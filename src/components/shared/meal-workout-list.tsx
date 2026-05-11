import { useEffect, useState } from "react";
import useMealsByCategory from "../../app/meals/hooks/use-meals-by-category";
import { useMealsProvider } from "@/components/providers/meals-provider/meals-provider";
import { cn } from "@/lib/utils";
import MealWorkoutListItem from "@/components/shared/meal-workout-list-item";

export default function MealsList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: categories, isLoading: isCategoriesLoading } = useMealsProvider();

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories, selectedCategory]);

  const { data: mealsData, isLoading: isMealsLoading } = useMealsByCategory(selectedCategory || "");

  return (
    <div className="flex flex-col gap-4 p-4 border border-CharcoalGray rounded-md w-full max-h-[50vh] lg:max-h-[80vh] overflow-y-auto scrollbar-hide">
      {/* Categories */}
      <ul className="top-0 z-10 sticky flex flex-wrap justify-center gap-2 bg-CharcoalGray p-2 rounded-md">
        {!isCategoriesLoading &&
          categories.map((category) => (
            <li
              key={category.idCategory}
              onClick={() => setSelectedCategory(category.strCategory)}
              className={cn(
                "px-4 py-2 rounded-full text-white transition cursor-pointer",
                selectedCategory === category.strCategory
                  ? "bg-main"
                  : "bg-white/10 hover:bg-white/20",
              )}
            >
              {category.strCategory}
            </li>
          ))}
      </ul>

      {/* Meals */}
      <MealWorkoutListItem mealsData={mealsData!} isMealsLoading={isMealsLoading} />
    </div>
  );
}
