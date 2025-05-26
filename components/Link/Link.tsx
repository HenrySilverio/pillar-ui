export type LinkProps = {
  children?: React.ReactNode;
  disabled: boolean;
  className?: string;
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, disabled, className, ...res }: LinkProps) => {
  return <a
  href={disabled ? undefined : href}
  className={`text-primary aria-disabled:text-disabled ${className}`}
  aria-disabled={disabled}
  {...res}
  >
    {children}
    </a>
}

export default Link;