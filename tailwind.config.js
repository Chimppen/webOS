module.exports = {
  mode:'jit',
  purge: [
    './src/**/*.svelte',
    './apps/**/*.svelte',
    './src/**/*.js',
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
