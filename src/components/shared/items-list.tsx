import { useMealsProvider } from "../providers/meals-provider/meals-provider";
import { cn } from "@/lib/utils";
import MealWorkoutSkeleton from "./meal-workout-skeleton";
import MealWorkoutCard from "./meal-workout-card";
import type { MealType } from "@/lib/types/meals";
import { memo } from "react";

const ItemsList = memo(function ItemsList({
  className,
  isMealsList = false,
  isHome,
}: {
  className?: string;
  isMealsList?: boolean;
  isWorkoutsList?: boolean;
  isHome?: boolean;
}) {
  // Hooks
  const { data: MealsData, isLoading: isMealsLoading } = useMealsProvider();

  return (
    <ul
      className={cn(
        "flex lg:flex-row flex-col flex-wrap justify-around items-center gap-4 mx-auto w-full lg:w-10/12 max-w-7xl h-fit",
        className,
      )}
    >
      {isMealsLoading && <MealWorkoutSkeleton />}
      {/* Meals List */}
      {isMealsList &&
        MealsData.map((meal: MealType) => (
          <li key={meal.idCategory}>
            <MealWorkoutCard
              isHome={isHome}
              src={meal.strCategoryThumb}
              strCategory={meal.strCategory}
              mealId={meal.idCategory}
            />
          </li>
        ))}
    </ul>
  );
});

export default ItemsList;
