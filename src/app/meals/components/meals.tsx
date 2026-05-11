import { useMealsProvider } from "@/components/providers/meals-provider/meals-provider";
import { useEffect, useState, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import MealCard from "@/components/shared/meal-workout-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/shared/sections-header";
import type { MealByCategory, MealType } from "@/lib/types/meals";
import useMealsByCategory from "../hooks/use-meals-by-category";
import { Trans, useTranslation } from "react-i18next";
import MealWorkoutSkeleton from "@/components/shared/meal-workout-skeleton";

export default function Meals() {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [selectedCategory, setSelectedCategory] = useState<string>(() =>
    typeof window !== "undefined" ? localStorage.getItem("selected_category") || "Beef" : "Beef",
  );
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const { data, isPending: isPendingProvider } = useMealsProvider();

  // Carousel effect
  useEffect(() => {
    if (!api) return;

    const onInit = () => {
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
    };

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("init", onInit);
    api.on("select", onSelect);

    return () => {
      api.off("init", onInit);
      api.off("select", onSelect);
    };
  }, [api]);
  const { data: mealsData, isPending, isLoading } = useMealsByCategory(selectedCategory || "");

  const chunkArray = useCallback(<T,>(array: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array?.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }, []);

  const mealsPages = useMemo(
    () => (mealsData ? chunkArray<MealByCategory>(mealsData.meals, 6) : []),
    [mealsData, chunkArray],
  );

  const handleFilter = useCallback((category: string) => {
    localStorage.setItem("selected_category", category);
    setSelectedCategory(category);
  }, []);

  return (
    <div dir={dir} className="flex flex-col backdrop-blur-2xl min-h-screen">
      <div className="flex flex-col items-center gap-6">
        {/* Section Title */}
        <SectionTitle>
          <Trans
            i18nKey="section-title"
            components={{
              highlight: <span className="text-main" />,
            }}
          />
        </SectionTitle>

        {/* Filters */}
        <ul
          className={cn(
            "flex flex-wrap justify-center items-center gap-3 sm:gap-4",
            dir === "rtl" && "flex-row-reverse",
          )}
        >
          {!isPendingProvider &&
            data?.map((meal: MealType) => (
              <li
                key={meal.idCategory}
                onClick={() => handleFilter(meal.strCategory)}
                className={cn(
                  "bg-white/20 px-4 py-2 rounded-full font-medium text-white transition-colors cursor-pointer",
                  selectedCategory === meal.strCategory && "bg-main",
                )}
              >
                {meal.strCategory}
              </li>
            ))}
        </ul>

        {/* Meals Carousel */}
        <div className="flex flex-col gap-4 w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
              direction: dir,
            }}
            className="mx-auto w-full lg:w-10/12 max-w-7xl"
          >
            {isLoading || isPending || !mealsData ? (
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <MealWorkoutSkeleton key={index} />
                ))}
              </div>
            ) : (
              <CarouselContent>
                {mealsPages.map((page, pageIndex) => (
                  <CarouselItem key={pageIndex} className="flex justify-center basis-full">
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
                      {page.map((meal) => (
                        <MealCard
                          key={meal.idMeal}
                          mealId={meal.idMeal}
                          src={meal.strMealThumb}
                          strCategory={meal.strMeal}
                        />
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            )}
          </Carousel>

          {/* Pagination Dots */}
          {mealsPages.length > 1 && (
            <div className="flex justify-center gap-2 my-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  title={`pagination-dot-${index}`}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "rounded-full h-2 transition-all touch-manipulation",
                    index === selectedIndex ? "w-6 bg-main" : "w-2 bg-white/50",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
