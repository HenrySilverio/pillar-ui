export type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`bg-primary text-white py-3 px-8 rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
