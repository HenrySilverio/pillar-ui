import { cva } from 'class-variance-authority';
import classNames from 'classnames';

type SwitchStyleProps = {
  variant?: 'common' | 'contract';
  enabled: boolean;
  disabled?: boolean;
};

export default ({ variant = 'common', enabled, disabled }: SwitchStyleProps) => {
  const container = classNames(
    'relative inline-flex items-center h-[24px] w-[44px] rounded-full transition-colors duration-300 outline-none',
    'focus:ring-2 focus:ring-offset-1 focus:ring-[#9C4EFF]',
    {
      'bg-[rgba(var(--primary))]': variant === 'common' && enabled && !disabled,
      'bg-quaternary': variant === 'common' && !enabled && !disabled,
      'bg-green-500': variant === 'contract' && enabled && !disabled,
      'bg-red-500': variant === 'contract' && !enabled && !disabled,
      'bg-disabled cursor-not-allowed opacity-60': disabled,
    }
  );

  const switchCircle = classNames(
    'absolute left-[2px] top-[2px] h-[20px] w-[20px] rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out',
    {
      'translate-x-[20px]': enabled,
      'translate-x-0': !enabled,
    }
  );

const icon = classNames(
  'absolute inset-0 flex items-center justify-center h-full w-full transition-colors duration-200',
  {
    'text-green-600': variant === 'contract' && enabled && !disabled,
    'text-red-600': variant === 'contract' && !enabled && !disabled,
    'text-disabled': disabled,
  }
);

  return {
    Container: container,
    Switch: switchCircle,
    Icon: icon,
  };
};