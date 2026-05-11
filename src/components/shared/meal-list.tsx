import { useEffect, useState } from "react";
import useMealsByCategory from "../../app/meals/hooks/use-meals-by-category";
import { useMealsProvider } from "@/components/providers/meals-provider/meals-provider";
import { cn } from "@/lib/utils";
import MealListItem from "./meal-list-item";

export default function MealsList() {
  // State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Hooks
  const { data: categories, isLoading: isCategoriesLoading } = useMealsProvider();
  console.log("Categories Data:", categories);

  // Set the initial selected category when data is loaded
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].strCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  // Fetch meals by selected category
  const { data: mealsData, isLoading: isMealsLoading } = useMealsByCategory(selectedCategory || "");
  console.log("Meals Data:", mealsData?.meals);

  return (
    <div>
      {/* Meals Left side */}
      <div className="flex flex-col gap-4 p-4 border-2 border-CharcoalGray rounded-md w-102 min-h-150 max-h-200 overflow-y-auto scrollbar-hide">
        {/* Category List */}
        <ul className="top-2 z-10 sticky flex justify-evenly items-center bg-CharcoalGray px-2 py-4 border-b rounded-sm">
          {!isCategoriesLoading &&
            categories?.map((category) => (
              <li
                key={category.idCategory}
                className={cn(
                  "bg-opacity-20 px-4 py-2 rounded-full font-medium text-white cursor-pointer",
                  {
                    "bg-main": selectedCategory === category.strCategory,
                  },
                )}
                onClick={() => setSelectedCategory(category.strCategory)}
              >
                {category.strCategory}
              </li>
            ))}
        </ul>

        {/* Meals List */}
        <MealListItem mealsData={mealsData!} isMealsLoading={isMealsLoading} />
      </div>
    </div>
  );
}
