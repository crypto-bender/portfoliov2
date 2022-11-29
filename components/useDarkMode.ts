import { useEffect, useState, useMemo } from "react";

const Props = {

}

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = useMemo(() => {
    return theme === "dark" ? "light" : "dark";
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return [colorTheme, setTheme] as const;
}

export default useDarkMode;