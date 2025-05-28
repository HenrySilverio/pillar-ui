import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react';
import { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import useStyle from './Switch.style';

export type SwitchProps = {
  defaultEnabled?: boolean;
  variant?: 'common' | 'contract';
  disabled?: boolean;
  onChange?: (enabled: boolean) => void;
} & Omit<HeadlessSwitchProps<'button'>, 'checked' | 'onChange'>;

const Switch = ({
  defaultEnabled = false,
  variant = 'common',
  disabled = false,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(defaultEnabled);
  const style = useStyle({ variant, enabled, disabled });

  const toggle = () => {
    const newEnabled = !enabled;
    setEnabled(newEnabled);
    onChange?.(newEnabled);
  };

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      className={style.Container}
      {...rest}
    >
      <span className="sr-only">switch toggle</span>
      {variant === 'common' && <span className={style.Switch} />}
      {variant === 'contract' && (
        <span className={style.Switch}>
          {enabled && (
            <CheckIcon className={style.Icon} aria-disabled={disabled} />
          )}
          {!enabled && (
            <XMarkIcon className={style.Icon} aria-disabled={disabled} />
          )}
        </span>
      )}
    </HeadlessSwitch>
  );
};

export default Switch;
