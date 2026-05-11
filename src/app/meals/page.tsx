import NavBar from "@/components/shared/nav-bar";
import { Outlet } from "react-router-dom";

export default function MealsPage() {
  return (
    <div className="bg-[url('/assets/toWEBP/meals-page-bg.webp')] bg-white/60 dark:bg-CharcoalGray/50 bg-cover bg-no-repeat w-full min-h-screen">
      <div className="backdrop-blur-2xl">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
