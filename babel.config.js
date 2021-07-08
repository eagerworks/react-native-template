module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@screens': './src/screens',
          '@store': './src/store',
          '@services': './src/services',
          '@styles': './src/styles',
          '@constants': './src/constants',
          '@models': './src/models',
          '@assets': './assets',
          '@icons': './assets/icons',
        },
      },
    ],
  ],
};
