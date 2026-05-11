import { cn } from "@/lib/utils";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Types
type CardProps = {
  src: string;
  strCategory: string;
  mealId: string;
  isHome?: boolean;
};

export default function MealWorkoutCard({ src, strCategory, mealId, isHome }: CardProps) {
  // Translation
  const { t } = useTranslation();
  const isRtl = localStorage.getItem("i18nextLng") === "ar";

  // Navigation
  const navigate = useNavigate();

  // Meal details handler
  const handleMealClick = (mealId: string) => {
    navigate(`/meals/${mealId}/meal-details`);
  };

  // Meal category handler
  const handleCategoryClick = () => {
    localStorage.setItem("selected_category", strCategory);
    navigate(`/meals`);
  };

  const formatedCategoryArray = strCategory.split(" ");
  const strFormatedCategory = formatedCategoryArray.slice(0, 2).join(" ");

  return (
    <div className={`relative cursor-pointer bg-stone-200 rounded-2xl w-85 lg:w-100 h-90 lg:h-100`}>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="bg-contain bg-no-repeat rounded-2xl w-full h-full"
      >
        <div
          className={cn(
            "bottom-0 absolute flex flex-col justify-between items-start backdrop-blur-xl p-3 rounded-b-2xl w-full h-24 font-Baloo",
            { "bg-white ": isHome },
          )}
        >
          <p
            className={cn("font-bold text-gray-900 dark:text-gray-100 text-2xl", {
              "dark:text-gray-800": isHome,
            })}
          >
            {strFormatedCategory}
          </p>
          <p
            className="flex justify-between items-center gap-2 font-medium text-main text-xl hover:text-2xl capitalize transition-all duration-150 cursor-pointer"
            onClick={isHome ? () => handleCategoryClick() : () => handleMealClick(mealId)}
          >
            {t("read-more")}
            {isRtl ? (
              <ArrowUpLeft size={28} className="bg-main p-2 rounded-full text-gray-900" />
            ) : (
              <ArrowUpRight size={28} className="bg-main p-2 rounded-full text-gray-900" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
