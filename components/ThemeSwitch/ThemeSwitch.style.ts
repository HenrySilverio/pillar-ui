import classNames from 'classnames';

export type ThemeSwitchStyleProps = {
  isDark: boolean;
};

export default ({ isDark }: ThemeSwitchStyleProps) => {
  const Container = classNames(
    'h-8 w-20 rounded-full px-1 flex items-center transition-all duration-300 outline-none',
    {
      'bg-gray-200 justify-start': !isDark,
      'bg-black justify-end': isDark,
      'ring-2 ring-offset-1 ring-[#9C4EFF]': true,
    }
  );

  const Thumb = classNames(
    'h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300',
    {
      'bg-white': !isDark,
      'bg-zinc-800': isDark,
    }
  );

  const Icon = classNames('w-4 h-4', {
    'text-yellow-400': !isDark,
    'text-yellow-200': isDark,
  });

  return {
    Container,
    Thumb,
    Icon,
  };
};