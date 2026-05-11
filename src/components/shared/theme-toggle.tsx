import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/theme-provider/theme.provider";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border bg-background hover:bg-muted transition"
    >
      {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
