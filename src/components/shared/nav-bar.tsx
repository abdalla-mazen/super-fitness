import { useState } from "react";
import { TextAlignEnd, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import IconButton from "./buttton-with-arrow";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";

export default function NavBar({ className }: { className?: string }) {
  // Translation
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // User token
  const token = localStorage.getItem("token");

  // State
  const [isOpen, setIsOpen] = useState(false);

  // Navigation
  const navLinks = [
    { id: "home", label: t("navHome"), href: "/" },
    { id: "meals", label: t("navHealthy"), href: "/meals" },
  ];

  return (
    <nav
      dir={isRTL ? "rtl" : "ltr"}
      className={cn("top-0 right-0 left-0 z-50 relative p-10 px-10 w-full", className)}
    >
      <div className="justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Link to="/">
              <img src="/assets/toWEBP/logo.webp" alt="Logo" className="w-20 h-14" />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:block">
            <div>
              <ul className="flex gap-2 rtl:row-reverse">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }: { isActive: boolean }) =>
                        cn(
                          "px-4 py-2 rounded-md font-Baloo font-bold text-xl transition-colors",
                          isActive
                            ? "text-main hover:text-orange-500"
                            : "text-CharcoalGray hover:text-orange-500 dark:text-white",
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3 space-x-3">
            {token ? (
              <Link
                to="/account"
                className="flex justify-center items-center bg-main hover:bg-orange-500 rounded-full w-12 h-12"
              >
                <User />
              </Link>
            ) : (
              <>
                <IconButton
                  text={t("login")}
                  bgColor="bg-main "
                  className="w-fit uppercase"
                  href="/login"
                />
                <IconButton
                  text={t("signup")}
                  bgColor="bg-transparent "
                  className="hover:bg-main border border-main w-fit text-main hover:text-white"
                  href="/register"
                />
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-main hover:bg-orange-600 rounded-full text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <TextAlignEnd className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden top-0 rtl:right-0 left-0 z-40 fixed bg-CharcoalGray backdrop-blur-sm w-2/3 overflow-y-auto">
            <div className="flex flex-col px-6 py-8 h-full">
              <div className="flex items-center mb-8">
                <img src="/assets/toWEBP/logo.webp" alt="" className="w-20 h-14" />
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "py-3 font-Baloo font-bold text-xl transition-colors",
                        isActive ? "text-main" : "text-gray-400 hover:text-white",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                {token ? (
                  <Link
                    to="/account"
                    className="flex justify-center items-center bg-main hover:bg-orange-500 rounded-full w-12 h-12"
                  >
                    <User />
                  </Link>
                ) : (
                  <div className="flex flex-col gap-3 font-Baloo font-bold text-gray-400 text-xl">
                    <Link className="w-fit hover:text-white capitalize" to="/register">
                      register
                    </Link>
                    <Link className="w-fit hover:text-white" to="/login">
                      login
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
