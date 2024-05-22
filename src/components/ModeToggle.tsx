import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    
    <Button
    variant="outline"
    size="icon"
    onClick={
      theme === "dark" ? () => setThemeState("theme-light") : () => setThemeState("dark")
    }
  >
    <SunIcon
      className={`h-[1.2rem] w-[1.2rem]  transition-all bg-transparent ${
        theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
      }`}
    />
    <MoonIcon
      className={`absolute h-[1.2rem] w-[1.2rem] transition-all bg-transparent ${
        theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
      }`}
    />
    <span className="sr-only">Toggle theme</span>
  </Button>
  )
}
