import { SocialNetworks } from "./atom/SocialNetwork";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import clsx from "clsx";
import styles from "./Header.module.css";
import { FULL_NAME, SOCIAL_NETWORKS } from "../lib/config";

export const Header = () => {
  return (
    <header className="flex py-8">
      <span className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
        {FULL_NAME}
      </span>
      <SocialNetworks className="ml-auto" socialNetworks={SOCIAL_NETWORKS} />
      <ToggleThemeButton />
    </header>
  );
};

const ToggleThemeButton = () => {
  // Dark Mode - Exercise
  const isDark = false;
  const isLight = false;
  const toggleTheme = () => {};

  return (
    <div className=" border-primary rounded-full p-2 relative overflow-hidden">
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={clsx("cursor-pointer relative h-6 w-6 text-primary", {
          [styles.enter]: isLight,
          [styles.exit]: isDark,
        })}
      />
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={clsx("cursor-pointer absolute h-6 w-6 top-2 text-primary", {
          [styles.enter]: isDark,
          [styles.exit]: isLight,
        })}
      />
    </div>
  );
};
