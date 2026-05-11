interface CircularProgressProps {
  current: number;
  total: number;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({
  current,
  total,
  size = 64,
  strokeWidth = 3,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (current / total) * 100;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg
          width={size}
          height={size}
          className="absolute inset-0 transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            // stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-orange-500 transition-all duration-300"
          />
        </svg>

        {/* Text in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-lg text-white font-bold">
            {current}/{total}
          </div>
        </div>
      </div>
    </div>
  );
}
