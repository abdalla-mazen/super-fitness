import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface UnprotectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
  tokenKey?: string;
}

export default function UnprotectedRoute({
  children,
  redirectTo = "/",
  tokenKey = "token",
}: UnprotectedRouteProps) {
  const token = localStorage.getItem(tokenKey);

  if (token) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
