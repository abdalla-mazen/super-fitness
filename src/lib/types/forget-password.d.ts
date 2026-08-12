export type ForgotPasswordSuccessResponse = {
  data: unknown;
  message: string;
  status?: string;
  info: string;
};

export type ForgotPasswordErrorResponse = {
  error: string;
};