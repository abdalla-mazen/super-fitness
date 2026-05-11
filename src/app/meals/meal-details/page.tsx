import MealsList from "../../../components/shared/meal-workout-list";
import MealRecipe from "../components/meal-recipe";

export default function MealDetails() {
  return (
    <div className="flex lg:flex-row flex-col gap-4 backdrop-blur-2xl px-4 lg:px-16 py-4 min-h-screen lg:row-reverse">
      {/* Recipe */}
      <div className="w-full lg:w-[65%]">
        <MealRecipe />
      </div>

      {/* Meals list */}
      <div className="w-full lg:w-[35%]">
        <MealsList />
      </div>
    </div>
  );
}
