export type InputProps = {
  label?: string;
  multiline?: boolean;
  className?: string;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = (props: InputProps) => {
  const { multiline, label, ...rest } = props;
  if (multiline) {
    return (
      <textarea
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

const Input = ({
  label,
  className,
  ...res
}: InputProps & { className?: string }) => {
  return (
    <div className="relative">
      {label && <label className="absolute pt-1 pl-3 text-xs">{label}</label>}
      <InputOrTextArea
        className={`
      bg-dark text-gray-primary rounded-md p-3
         disabled:bg-disabled disabled:border-2 disabled:border-disabled
      ${label ? 'pt-6' : ''}
      ${className}`}
        {...res}
      />
    </div>
  );
};

export default Input;
