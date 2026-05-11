import Footer from "@/components/shared/footer";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      {/* Children */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
}
