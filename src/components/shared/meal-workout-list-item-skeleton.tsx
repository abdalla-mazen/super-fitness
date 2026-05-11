export default function MealWorkoutListItemSkeleton() {
  // how many skeleton rows you want
  const skeletonItems = Array.from({ length: 6 });

  return (
    <div className="flex flex-col gap-3 divide-y divide-white/10">
      {skeletonItems.map((_, index) => (
        <div key={index} className="flex items-center gap-3 p-3 animate-pulse">
          {/* image skeleton */}
          <div className="bg-white/10 rounded-lg w-16 h-16" />

          {/* text skeleton */}
          <div className="flex flex-col flex-1 gap-2">
            <div className="bg-white/10 rounded w-3/4 h-4" />
            <div className="bg-white/5 rounded w-1/2 h-3" />
          </div>
        </div>
      ))}
    </div>
  );
}
