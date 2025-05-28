import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import useStyle from './ThemeSwitch.style';

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const style = useStyle({ isDark });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)} className={style.Container}>
      <span className={style.Thumb}>
        {isDark ? <MoonIcon className={style.Icon} /> : <SunIcon className={style.Icon} />}
      </span>
    </button>
  );
};

export default ThemeSwitch;