import styles from "./ToggleThemeButton.module.css";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import clsx from "clsx";
import { useContext } from "react";
import { DarkModeContexte } from "../context/ThemeProvider"

export const ToggleThemeButton = () => {
  // Dark Mode - Exercise
  const { setMode, isDark, isLight } = useContext(DarkModeContexte);

  const toggleTheme = () => {
    return setMode((curr) => (curr === "dark" ? "" : "dark"));
  };

  return (
    <div className="overflow-hidden relative p-2 rounded-full border-primary">
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={clsx("relative h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: isLight,
          [styles.exit]: isDark,
        })}
      />
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={clsx("absolute top-2 h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: isDark,
          [styles.exit]: isLight,
        })}
      />
    </div>
  );
};
