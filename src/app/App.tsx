import { KYCProvider } from "@/components/providers/kyc-provider/kyc.provider";
import { ThemeProvider } from "@/components/providers/theme-provider/theme.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router";

export default function App() {
  // React Query setup
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <KYCProvider>
        {/* React Query Provider*/}
        <QueryClientProvider client={queryClient}>
          {/* React Query Devtools */}
          <ReactQueryDevtools initialIsOpen={false} />

          {/* The rest of the application */}
          <Outlet />
        </QueryClientProvider>
      </KYCProvider>
    </ThemeProvider>
  );
}
