function toRgba(variable) {
  return ({ opacityValue }) =>
    `rgba(var(${variable}), ${opacityValue ?? 1})`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: 'var(--screens-mobile)',
      tablet: 'var(--screens-tablet)',
      desktop: 'var(--screens-desktop)',
      ultrawide: 'var(--screens-ultrawide)',
    },
    extend: {
      colors: {
        primary: toRgba('--primary'),
        secondary: toRgba('--secondary'),
        tertiary: toRgba('--tertiary'),
        quaternary: toRgba('--quaternary'),
        hover: toRgba('--hover'),
        click: toRgba('--click'),

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
    },
  },
  plugins: [],
};