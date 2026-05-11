import axios from "axios";
import type {
  ForgotPasswordErrorResponse,
  ForgotPasswordSuccessResponse,
} from "../types/forget-password";


export const newPassword = async (email: string, newPassword: string) => {
  try {
    const response: ForgotPasswordSuccessResponse = await axios.put(
         `${import.meta.env.VITE_API}/auth/resetPassword`,
      { email, newPassword }
    );

    return response;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "error" in error) {
      const err = error as ForgotPasswordErrorResponse;
      console.log(err.error);
    }
  }
};
