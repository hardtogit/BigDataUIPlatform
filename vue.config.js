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
};
