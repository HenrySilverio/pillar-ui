import classNames from "classnames";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: 'ligth' | 'dark' | 'black';
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const colorClassMap = {
  ligth: 'bg-ligth',
  dark: 'bg-dark',
  black: 'bg-black',
}

const Divider = ({
  width,
  height='h-[1px]',
  children,
  bgColor,
  ...res
}: DividerProps) => {
  const colorClass = colorClassMap[bgColor || 'black'];
  const barClass = classNames(
    children ? 'w-1/3' : 'w-1/2',
    height,
    colorClass,
  )
  return (
  <div className={classNames(width, 'flex items-center justify-center')}>
    <div className={barClass}></div>
    {children && <div className="px-3">{children}</div>}
    <div className={barClass}></div>
  </div>
)
};
export default Divider;