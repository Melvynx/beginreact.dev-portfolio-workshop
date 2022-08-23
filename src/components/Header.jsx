import { SocialNetworks } from "./atom/SocialNetwork";
import { socialNetworks } from "../lib/social-network-data";
import { useTheme } from "../context/ThemeProvider";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import clsx from "clsx";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className="flex py-8">
      <span className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Jean-Pierre Smith
      </span>
      <SocialNetworks className="ml-auto" socialNetworks={socialNetworks} />
      <ToggleThemeButton />
    </header>
  );
};

const ToggleThemeButton = () => {
  const { isDark, isLight, toggleTheme } = useTheme();

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
