import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen font-Baloo">
      {/* Background */}
      <div className="absolute inset-0 bg-[url(/assets/toWEBP/auth-layout-bg.webp)] bg-cover bg-center" />

      {/* Content */}
      <div className="z-10 relative flex bg-white/55 dark:bg-dark/60 backdrop-blur-[66px] min-h-screen">
        {/* Left side (Logo) */}
        <div className="hidden lg:flex justify-center items-center border-main ltr:border-r rtl:border-l w-1/2">
          <div className="flex flex-col justify-center items-center gap-14 px-8">
            <img src="/assets/toWEBP/logo.webp" alt="Logo" className="w-60 h-36" />
            <img
              src="/assets/toWEBP/auth-layout-logo.webp"
              alt="auth logo"
              className="max-w-full max-h-[480px]"
            />
          </div>
        </div>

        {/* Right side (Auth pages) */}
        <div className="flex justify-center items-center py-4 w-full lg:w-1/2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
