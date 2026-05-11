declare type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo: string;
} & DatabaseProperties;

declare type RegisterKYCValues = Omit<UserData, keyof DatabaseProperties | "photo">;

declare type ChangePasswordPayload = {
  password: string;
  newPassword: string;
};

declare type AuthResponse = {
  token: string;
  user: UserData;
};
