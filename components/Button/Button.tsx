export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariantStyle(
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled'],
) {
  const generalStyle = 'rounded-md px-6 py-2';
  switch (variant) {
    case 'primary':
      return disabled
        ? `${generalStyle} bg-disabled text-disabled`
        : `${generalStyle} bg-primary text-white`;
    case 'secondary':
      return disabled
        ? `${generalStyle} bg-disabled text-disabled`
        : `${generalStyle} bg-quaternary text-primary`;
    case 'tertiary':
      return disabled
        ? `${generalStyle} bg-disabled text-disabled`
        : `${generalStyle} bg-transparent text-primary`;
    default:
      return disabled
        ? `${generalStyle} bg-disabled text-disabled`
        : `${generalStyle} bg-primary text-white`;
  }
}
const Button = ({
  variant = 'primary',
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${getVariantStyle(variant, disabled)} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
