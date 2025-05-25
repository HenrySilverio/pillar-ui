function toRgba(variable) {
  return ({ opacityValue }) => `rgba(var(${variable}), ${opacityValue ?? 1})`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mulish: 'Mulish, sans-serif',
    },
    fontSize: {
      xs: 'var(--font-xs)',
      sm: 'var(--font-sm)',
      md: 'var(--font-md)',
      lg: 'var(--font-lg)',
      xl: 'var(--font-xl)',
    },
    spacing: {
      none: 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      xs: 'var(--spacing-xs) /* 16px */',
      sm: 'var(--spacing-sm) /* 20px */',
      md: 'var(--spacing-md) /* 24px */',
      lg: 'var(--spacing-lg) /* 32px */',
      xl: 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
    },
    screens: {
      mobile: 'var(--screens-mobile)',
      tablet: 'var(--screens-tablet)',
      desktop: 'var(--screens-desktop)',
      ultrawide: 'var(--screens-ultrawide)',
    },
    extend: {
      colors: {
        primary: 'rgba(var(--primary),   <alpha-value>)',
        secondary: 'rgba(var(--secondary), <alpha-value>)',
        tertiary: 'rgba(var(--tertiary),  <alpha-value>)',
        quaternary: 'rgba(var(--quaternary),<alpha-value>)',
        hover: 'rgba(var(--hover),     <alpha-value>)',
        click: 'rgba(var(--click),     <alpha-value>)',
        icon: 'rgb(var(--icon))',
        outline: 'rgb(var(--outline))',
        divider: 'rgb(var(--divider))',
        white: 'rgb(var(--white))',
        'text-primary': 'rgb(var(--text-primary))',
        'text-secondary': 'rgb(var(--text-secondary))',
        'text-tertiary': 'rgb(var(--text-tertiary))',
        'text-disabled': 'rgb(var(--text-disabled))',
        'bg-disabled': 'rgb(var(--bg-disabled))',
        'boxes-inputs': 'rgb(var(--boxes-inputs))',
        'bg-light': 'rgb(var(--bg-light))',
        'bg-dark': 'rgb(var(--bg-dark))',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)',
      },
      borderRadius: {
        none: 'var(--border-radius-none) /* 0px */',
        sm: 'var(--border-radius-sm) /* 4px */',
        md: 'var(--border-radius-md) /* 8px */',
        lg: 'var(--border-radius-lg) /* 16px */',
      },
    },
  },
  plugins: [],
};
