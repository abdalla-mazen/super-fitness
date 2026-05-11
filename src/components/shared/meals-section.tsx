import { Trans } from "react-i18next";
import MealsList from "./items-list";
import { SectionIcons, SectionTitle } from "./sections-header";
import { Dumbbell } from "lucide-react";

export default function MealsSection({ isHome }: { isHome: boolean }) {
  return (
    <div className="bg-[url('/assets/toWEBP/meals-bg.webp')] bg-cover bg-no-repeat py-6 w-full h-340 lg:h-270 2xl:h-170">
      <div className="flex flex-col justify-evenly items-center gap-8">
        {/* Healthy */}
        <SectionIcons
          src={"/assets/toWEBP/Healthy.webp"}
          alt="Healthy"
          icon={<Dumbbell width={34} height={19} className="rotate-45" />}
          title="Healthy Nutritions"
        />

        <div className="flex flex-col justify-between items-center backdrop-blur-lg pt-10 w-full h-96 -translate-y-14">
          <SectionTitle>
            <Trans
              i18nKey="section-title"
              components={{ highlight: <span className="text-main" /> }}
            />
          </SectionTitle>

          {/* Meals List */}
          <MealsList isHome={isHome} isMealsList={true} />
        </div>
      </div>
    </div>
  );
}
