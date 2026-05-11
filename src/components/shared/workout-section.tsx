import { Dumbbell } from "lucide-react";
import { SectionIcons, SectionTitle } from "./sections-header";
import { useWorkoutsProvider } from "../providers/workouts-provider/workouts.provider";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import ItemsList from "./items-list";

export default function Workouts() {
  // State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Hooks
  const { musclesGroup, isPending: isWorkoutsPending } = useWorkoutsProvider();

  // Set the initial selected category when data is loaded
  useEffect(() => {
    if (musclesGroup.length > 0 && !selectedCategory) {
      setSelectedCategory(musclesGroup[0]._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musclesGroup]);

  return (
    <div className="bg-[url('/assets/toWEBP/meals-page-bg.webp')] bg-cover bg-no-repeat w-full min-h-195">
      <div className="backdrop-blur-sm py-4 min-h-195">
        <div className="flex flex-col justify-evenly items-center min-h-195 -translate-y-20">
          {/* Workouts */}
          <SectionIcons
            src={"/assets/toWEBP/Workouts.webp"}
            alt="Workouts"
            icon={<Dumbbell width={30} height={19} className="rotate-45" />}
            title="Fitness workouts"
          />

          <div className="flex flex-col justify-between items-center w-full h-96 -translate-y-20">
            {/* Title */}
            <SectionTitle>
              Transform Your Body with Our Dynamic
              <span className="text-main"> Upcoming Workouts</span>
            </SectionTitle>

            {/* Muscles Filters */}
            <ul className="flex items-center gap-4 -translate-y-2">
              {!isWorkoutsPending &&
                musclesGroup?.map((muscleGroup: MuscleGroupType) => (
                  <li
                    key={muscleGroup._id}
                    className={cn(
                      "bg-opacity-20 px-4 py-2 rounded-full font-medium text-white cursor-pointer",
                      {
                        "bg-main": selectedCategory === muscleGroup._id,
                      },
                    )}
                    onClick={() => setSelectedCategory(muscleGroup._id)}
                  >
                    {muscleGroup.name}
                  </li>
                ))}
            </ul>

            {/* Muscles List */}
            <ItemsList className="translate-y-4" isWorkoutsList={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
