import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('text-gray-primary text-sm font-normal', {
  variants: {
    variant: {
      primary: 'text-gray-primary',
      secondary: 'text-gray-secondary',
      tertiary: 'text-gray-tertiary',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      xl: 'text-xl',
      title1: 'text-xl',
      title2: 'text-lg',
      title3: 'text-md',
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
});

export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements['p'];

const Typography = ({
  children,
  element = 'p',
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any;
  return (
    <Element className={`${textVariants(rest)} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
