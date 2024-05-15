// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // 'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      'tahiti': '#3ab7bf',
      'oasis-light': '#daeaca',
      'oasis-dark': '#0d750c',
      'oasis-gray': '#dcdcdc',
      'flamingo': '#DA0063',
      'flame': '#F24726',
    },
  },
  plugins: [
    // require('flowbite/plugin')//  Included at style stage
  ],
}

