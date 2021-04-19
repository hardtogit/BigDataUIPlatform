const path = require('path');
module.exports = {
  chainWebpack(chain) {
    const ROOT = path.resolve(__dirname);
    const APP_PATH = path.join(ROOT, './src');
    chain.resolve.alias.merge({
      '@': APP_PATH,
      '@root': ROOT,
      '@hooks': path.join(APP_PATH, './hooks'),
      '@assets': path.join(APP_PATH, './assets'),
      '@components': path.join(APP_PATH, './components'),
      '@styles': path.join(APP_PATH, './styles'),
    });
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('@njleonzhang/postcss-px-to-rem')({
            unitToConvert: 'px',
            widthOfDesignLayout: 1920, // (Number) The width of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
          }),
        ],
      },
    },
  },
};
