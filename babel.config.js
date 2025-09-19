module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@translations': './src/translations',
          '@domain': './src/domain',
          '@api': './src/api',
          '@store': './src/store',
          '@services': './src/services',
        },
      },
    ],
  ],
};
