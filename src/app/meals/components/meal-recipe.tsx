import { useState } from "react";
import { useMealDetail } from "../hooks/use-meal-detail";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MealRecipe() {
  // Translation
  const { t } = useTranslation();

  // Hooks
  const [showMore, setShowMore] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const { mealId } = useParams<{ mealId: string }>();
  const { data, isLoading } = useMealDetail(mealId!);
  const meal = data?.meals[0];

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal?.[`strIngredient${i}` as keyof typeof meal];
    const measure = meal?.[`strMeasure${i}` as keyof typeof meal];
    if (ing) ingredients.push({ ing, measure });
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Image */}
      <div
        className="relative rounded-md h-[300px] md:h-[450px] overflow-hidden"
        style={{
          backgroundImage: `url(${meal?.strMealThumb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={() => setShowDetails((p) => !p)}
          className="top-2 ltr:right-2 rtl:left-2 absolute bg-dark/60 p-2 rounded-md text-white"
        >
          {showDetails ? t("hide-details") : t("show-details")}
        </button>

        {showDetails && (
          <div className="bottom-0 absolute inset-x-0 bg-dark/70 p-4 max-h-full overflow-y-auto font-Baloo text-stone-200 scrollbar-hide">
            <h2 className="mb-2 font-bold text-2xl md:text-4xl">{meal?.strMeal}</h2>

            <p className="text-sm md:text-base">
              {showMore
                ? meal?.strInstructions
                : meal?.strInstructions?.split(" ").slice(0, 20).join(" ") + "..."}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {/* <Link
                to={meal?.strYoutube || "#"}
                target="_blank"
                className="bg-main px-4 py-2 rounded-md"
              >
                {t("watch-video")}
              </Link> */}

              <button
                onClick={() => setShowMore((p) => !p)}
                className="px-4 py-2 border rounded-md capitalize"
              >
                {showMore ? t("read-less") : t("read-more")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Ingredients */}
      <div>
        <h3 className="mb-4 font-semibold text-2xl">Ingredients</h3>

        <ul className="gap-3 grid grid-cols-1 sm:grid-cols-2">
          {!isLoading &&
            ingredients.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-CharcoalGray p-3 rounded-md text-white"
              >
                <span>{item.ing}</span>
                <span className="text-main">{item.measure}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
