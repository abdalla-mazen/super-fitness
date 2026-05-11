export default function MealWorkoutSkeleton() {
  return (
    <div className="relative bg-stone-100 shadow-sm rounded-2xl w-85 lg:w-100 h-90 lg:h-100 overflow-hidden">
      {/* Skeleton image placeholder with shimmer animation */}
      <div className="absolute inset-0 bg-linear-to-r from-stone-200 via-stone-400 to-stone-200 animate-shimmer" />

      {/* Content overlay container */}
      <div className="right-0 bottom-0 left-0 absolute flex flex-col justify-between items-start bg-white/30 backdrop-blur-sm p-4 rounded-b-2xl w-full h-28">
        {/* Category text skeleton */}
        <div className="flex flex-col gap-2 w-full">
          <div className="bg-stone-500 rounded w-3/4 h-5 animate-pulse" />
        </div>

        {/* Read More button skeleton with spacing */}
        <div className="flex items-center gap-2 mt-1">
          <div className="bg-stone-500 rounded w-20 h-4 animate-pulse" />
          <div className="bg-stone-500 rounded-full w-5 h-5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
