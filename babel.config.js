module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          root: './',
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          contexts: './src/contexts',
          features: './src/features',
          hooks: './src/hooks',
          navigation: './src/navigation',
          services: './src/services',
          utils: './src/utils',
        },
      },
    ],
  ],
};
