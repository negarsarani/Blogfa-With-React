/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/index.css'],
  theme: {
    extend: {},
  },
  plugins: [
    // require('tailwindcss-pseudo-elements')({
    //   customPseudoClasses: ['foo'],
    //   customPseudoElements: ['bar'],
    //   contentUtilities: false,
    //   emptyContent: false,
    //   classNameReplacer: {
    //     'hover:before:text-black': 'hbt',
    //   },
    // }),
  ],
};
