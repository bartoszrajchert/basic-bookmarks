/**
 * Useful resource:
 *  https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
 */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: {
        900: '#0A0A0A',
        DEFAULT: '#101010',
        800: '#171717',
        700: '#1C1C1C',
        600: '#282828',
        500: '#383838',
      },
      white: '#FFF',
      gray: '#E7E9EB',
    },
    fill: (theme) => theme('colors'),
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    fontSize: () => {
      const fontSizes = {
        '5xl': 40,
        '4xl': 36,
        '3xl': 32,
        '2xl': 28,
        xl: 24,
        lg: 20,
        base: 16,
        sm: 12,
        xs: 8,
      };

      for (let key in fontSizes)
        if (fontSizes.hasOwnProperty(key)) {
          fontSizes[key] /= 16;
          fontSizes[key] += 'rem';
        }

      return fontSizes;
    },
    letterSpacing: {
      normal: '0.02em',
    },
    boxShadow: {
      DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.08)',
    },
    borderRadius: (theme) => theme('fontSize'),
    spacing: {
      px: '1px',
      0: '0',
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      64: '4rem',
      80: '5rem',
    },
    extend: {},
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [],
};
