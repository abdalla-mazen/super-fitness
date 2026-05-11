// Token
declare type Token = {
  token: string;
};

// User  with token
declare type User = {
  user: {
    _id: string;
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
    createdAt: string;
  };
} & Token;
