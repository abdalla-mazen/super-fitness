import type { MealByCategory } from "@/lib/types/meals";
import { useNavigate } from "react-router-dom";
import MealWorkoutListItemSkeleton from "./meal-workout-list-item-skeleton";

export default function MealWorkoutListItem({
  mealsData,
  isMealsLoading,
}: {
  mealsData: { meals: MealByCategory[] };
  isMealsLoading: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 divide-y divide-white/10">
      {isMealsLoading && <MealWorkoutListItemSkeleton />}
      {!isMealsLoading &&
        mealsData?.meals?.map((meal) => {
          const formattedName = meal.strMeal.split(" ").slice(0, 3).join(" ");

          return (
            <div
              key={meal.idMeal}
              onClick={() => navigate(`/meals/${meal.idMeal}/meal-details`)}
              className="flex items-center gap-3 hover:bg-white/10 p-3 transition cursor-pointer"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-lg w-16 h-16 object-cover"
              />
              <h3 className="font-semibold text-white text-sm md:text-base">{formattedName}</h3>
            </div>
          );
        })}
    </div>
  );
}
