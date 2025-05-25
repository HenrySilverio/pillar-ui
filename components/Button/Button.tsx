export type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`
        bg-primary
        hover:bg-[rgba(var(--hover),1)]
        text-white py-2 px-6 rounded-md
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
