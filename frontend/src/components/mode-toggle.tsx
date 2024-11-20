import React from "react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount, read the theme from localStorage or system preference
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const systemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (localTheme === "light" || localTheme === "dark") {
      setTheme(localTheme);
    } else if (systemThemeDark) {
      setTheme("dark");
    }
  }, []);

  // Update theme in localStorage and document
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Change to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
