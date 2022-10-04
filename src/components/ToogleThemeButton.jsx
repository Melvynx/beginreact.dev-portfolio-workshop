import clsx from 'clsx';
import { MdOutlineModeNight, MdOutlineWbSunny } from 'react-icons/md';
import styles from './Header.module.css';

export const ToggleThemeButton = () => {
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
  