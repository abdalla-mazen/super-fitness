import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
  tokenKey?: string;
}

export default function ProtectedRoute({
  children,
  redirectTo = "/login",
  tokenKey = "token",
}: ProtectedRouteProps) {
  const token = localStorage.getItem(tokenKey);

  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
