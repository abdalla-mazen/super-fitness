import "./i18n";
import "./index.css";
import i18n from "./i18n";
import App from "./app/App.tsx";
import RootLayout from "./app/layout.tsx";
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./app/homepage/homepage.tsx";
import ResetPassword from "./app/(auth)/resetpasswordpage/resetpasswordpage.tsx";
import LoginPage from "./app/(auth)/login/login-page.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./app/(auth)/auth-layout.tsx";
import RegisterPage from "./app/(auth)/register/page.tsx";
import KYCPage from "./app/(auth)/kyc/page.tsx";
import AccountPage from "./app/(account)/account/page.tsx";
import ChangePasswordPage from "./app/(account)/change-password/page.tsx";
import SecurityPage from "./app/(account)/account/security/page.tsx";
import HelpPage from "./app/(account)/account/help/page.tsx";
import PrivacyPolicyPage from "./app/(account)/account/privacy-policy/page.tsx";
import ProtectedRoute from "./components/shared/protected-route.tsx";
import UnprotectedRoute from "./components/shared/unprotected-route.tsx";
import MealsPage from "./app/meals/page.tsx";
import MealsProvider from "./components/providers/meals-provider/meals-provider.tsx";
import { KYCProvider } from "./components/providers/kyc-provider/kyc.provider.tsx";
import { ThemeProvider } from "./components/providers/theme-provider/theme.provider.tsx";
import WorkoutsProvider from "./components/providers/workouts-provider/workouts.provider.tsx";

// Lazy loaded components
const MealDetails = lazy(() => import("./app/meals/meal-details/page.tsx"));
const Meals = lazy(() => import("./app/meals/components/meals.tsx"));

// Change the document's language and direction based on i18n settings
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Theme provider */}
    <ThemeProvider>
      {/* KYC Provider */}
      <KYCProvider>
        {/* BrowserRouter */}
        <BrowserRouter>
          {/* Suspense to handle the async loading of translations */}
          <Suspense fallback={<div>Loading...</div>}>
            {/* Routes */}
            <Routes>
              {/* Root Layout */}
              <Route path="/" element={<RootLayout />}>
                <Route element={<App />}>
                  {/* Home */}
                  <Route
                    index
                    element={
                      <WorkoutsProvider>
                        <MealsProvider>
                          <ProtectedRoute>
                            <HomePage />
                          </ProtectedRoute>
                        </MealsProvider>
                      </WorkoutsProvider>
                    }
                  />

                  {/* Meals */}
                  <Route
                    path="meals"
                    element={
                      <MealsProvider>
                        <MealsPage />
                      </MealsProvider>
                    }
                  >
                    {/* Meals list */}
                    <Route
                      index
                      element={
                        <Suspense fallback={<div>Loading meals...</div>}>
                          <MealsProvider>
                            <Meals />
                          </MealsProvider>
                        </Suspense>
                      }
                    />

                    {/* Meal Details */}
                    <Route
                      path=":mealId/meal-details"
                      element={
                        <Suspense fallback={<div>Loading meal details...</div>}>
                          <MealsProvider>
                            <MealDetails />
                          </MealsProvider>
                        </Suspense>
                      }
                    />
                  </Route>

                  {/* Account */}
                  <Route
                    path="account"
                    element={
                      <ProtectedRoute>
                        <AccountPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* Security */}
                  <Route
                    path="/account/security"
                    element={
                      <ProtectedRoute>
                        <SecurityPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* Help */}
                  <Route
                    path="/account/help"
                    element={
                      <ProtectedRoute>
                        <HelpPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* Privacy policy */}
                  <Route
                    path="/account/privacy-policy"
                    element={
                      <ProtectedRoute>
                        <PrivacyPolicyPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* Auth Layout */}
                  <Route element={<AuthLayout />}>
                    {/* Login */}
                    <Route
                      path="/login"
                      element={
                        <UnprotectedRoute>
                          <LoginPage />
                        </UnprotectedRoute>
                      }
                    />

                    {/* Register */}
                    <Route
                      path="register"
                      element={
                        <UnprotectedRoute>
                          <RegisterPage />
                        </UnprotectedRoute>
                      }
                    />

                    {/* KYc */}
                    <Route
                      path="kyc"
                      element={
                        <UnprotectedRoute>
                          <KYCPage />
                        </UnprotectedRoute>
                      }
                    />

                    {/* Reset Password */}
                    <Route
                      path="reset-password"
                      element={
                        <UnprotectedRoute>
                          <ResetPassword />
                        </UnprotectedRoute>
                      }
                    />

                    {/* Change password */}
                    <Route
                      path="change-password"
                      element={
                        <ProtectedRoute>
                          <ChangePasswordPage />
                        </ProtectedRoute>
                      }
                    />
                  </Route>
                </Route>

                <Route path="*" element={<div>404 Not Found</div>} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </KYCProvider>
    </ThemeProvider>
  </StrictMode>,
);
