import axios from "axios";
import type {
  ForgotPasswordErrorResponse,
  ForgotPasswordSuccessResponse,
} from "../types/forget-password";

export const forgotPassword = async (email: string) => {
  try {
    const response: ForgotPasswordSuccessResponse = await axios.post(
       `${import.meta.env.VITE_API}/auth/forgotPassword`,
      { email }
    );

    return response;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "error" in error) {
      const err = error as ForgotPasswordErrorResponse;
      console.log(err.error);
    }
  }
};
