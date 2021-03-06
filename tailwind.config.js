/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
        serif: ['Source Serif Pro'],
        mono: ['Source Code Pro'],
        header: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        subheading: ['Inter', 'sans-serif'],
        description: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#172b4d',
        primary: '#1e8e42',
        secondary: '#718096',
        light: '#f4f5f7',
      },
      spacing: {
        '96': '24rem',
        '128': '27rem',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
