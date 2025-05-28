import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react';
import { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

export type SwitchProps = {
  defaultEnabled?: boolean;
  variant?: 'common' | 'contract';
  disabled?: boolean;
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

const Switch = ({
  defaultEnabled: enabledByDeafult,
  variant = 'common',
  disabled,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDeafult || false);

  const toggle = () => {
    const newEnabled = !enabled;
    setEnabled(newEnabled);
    onChange?.(newEnabled);
  }

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      {...rest}
    >
      <span>switch toggle</span>
      {variant === 'common' && <span />}
      {variant === 'contract' && <span>
          {enabled && <CheckIcon aria-disabled={disabled} className="h-5 w-5 text-green-500" />}
          {!enabled || <XMarkIcon aria-disabled={disabled} className="h-5 w-5 text-red-500" />}
        </span>}
    </HeadlessSwitch>
  );
};

export default Switch;
