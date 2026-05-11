import type { MealByCategory } from "@/lib/types/meals";
import { useNavigate } from "react-router-dom";

export default function MealListItem({
  mealsData,
  isMealsLoading,
}: {
  mealsData: { meals: MealByCategory[] };
  isMealsLoading: boolean;
}) {
  // Navigation
  const navigate = useNavigate();

  // Handler
  const handleMealClick = (mealId: string) => {
    navigate(`/meals/${mealId}/meal-details`);
  };

  return (
    <div className="flex flex-col gap-4 divide-y">
      {!isMealsLoading &&
        mealsData?.meals?.map((meal: MealByCategory) => {
          const strMeal = meal.strMeal.split(" ");
          const formattedStrMeal = strMeal.slice(0, 3).join(" ");
          return (
            <div
              key={meal.idMeal}
              onClick={() => handleMealClick(meal.idMeal)}
              className="flex gap-2 bg-opacity-20 backdrop-blur-2xl p-4 cursor-pointer"
            >
              <img className="rounded-xl w-20 h-22" src={meal.strMealThumb} alt={meal.strMeal} />
              <h3 className="font-bold text-white">{formattedStrMeal}</h3>
            </div>
          );
        })}
    </div>
  );
}
