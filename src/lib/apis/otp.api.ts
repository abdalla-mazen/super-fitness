import axios from "axios";
import type {
  ForgotPasswordErrorResponse,
  ForgotPasswordSuccessResponse,
} from "../types/forget-password";

export const verifyAction = async (resetCode: string) => {
  try {
    const response: ForgotPasswordSuccessResponse = await axios.post(
      `${import.meta.env.VITE_API}/auth/verifyResetCode`,
      { resetCode }
    );

    return response;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "error" in error) {
      const err = error as ForgotPasswordErrorResponse;
      console.log(err.error);
    }
  }
};
