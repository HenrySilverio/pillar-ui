import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { SwitchProps } from './Switch';


type SwitchStyleProps = {
  variant?: 'common' | 'contract';
  enabled: boolean;
  disabled?: boolean;
};
export default ({ variant, enabled, disabled }: SwitchStyleProps) => {
  const container = cva(
    'outline-none relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300',
    {
      variants: {
        variant: {
          common: classNames({
            'bg-[rgba(var(--primary))]': enabled,
            'bg-quaternary': !enabled,
            'opacity-50 cursor-not-allowed': disabled,
          }),
          contract: classNames({
            'bg-green-500': enabled && !disabled,
            'bg-red-500': !enabled && !disabled,
            'bg-disabled': disabled,
          }),
        },
      },
      defaultVariants: {
        variant: 'common',
      },
    }
  );

  return {
    Container: container({ variant: variant as 'common' | 'contract' }),
    Switch: classNames(
      'inline-block h-4 w-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out',
      enabled ? 'translate-x-6' : 'translate-x-1'
    ),
    Icon: classNames(
      'h-4 w-4',
      {
        'text-green-700': enabled && variant === 'contract' && !disabled,
        'text-red-500': !enabled && variant === 'contract' && !disabled,
        'text-disabled': disabled,
      }
    ),
  };
};