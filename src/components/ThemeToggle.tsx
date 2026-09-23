import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";

export default function ThemeToggle() {
  const { t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label={t.nav.theme}
      title={t.nav.theme}
    >
      {resolvedTheme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
