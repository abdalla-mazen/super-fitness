declare type MuscleGroupType = {
  _id: string;
  name: string;
};

declare type MuscleByGroupType = {
  _id: string;
  name: string;
  image: string;
};

declare type WorkoutsByMuscleGroupType = {
  muscles: MuscleByGroupType[];
};
