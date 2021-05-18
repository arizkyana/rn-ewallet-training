module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          '@pages': './src/pages',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@containers': './src/containers',
          '@helpers': './src/helpers',
          '@libraries': './src/libraries',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
