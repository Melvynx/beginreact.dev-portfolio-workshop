import clsx from 'clsx';
import { MdOutlineModeNight, MdOutlineWbSunny } from 'react-icons/md';
import { useTheme } from '../context/ThemeProvider';
import { FULL_NAME, SOCIAL_NETWORKS } from '../lib/config';
import { SocialNetworks } from './atom/SocialNetwork';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className="flex py-8">
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        {FULL_NAME}
      </span>
      <SocialNetworks className="ml-auto" socialNetworks={SOCIAL_NETWORKS} />
      <ToggleThemeButton />
    </header>
  );
};

const ToggleThemeButton = () => {
  const { isDark, isLight, toggleTheme } = useTheme();

  return (
    <div className="relative p-2 overflow-hidden rounded-full border-primary">
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={clsx('relative h-6 w-6 cursor-pointer text-primary', {
          [styles.enter]: isLight,
          [styles.exit]: isDark,
        })}
      />
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={clsx('absolute top-2 h-6 w-6 cursor-pointer text-primary', {
          [styles.enter]: isDark,
          [styles.exit]: isLight,
        })}
      />
    </div>
  );
};
