module.exports = {
  root: true,
  extends: [
    'airbnb',
    '@react-native-community',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'global-require': 0,
    'import/no-unresolved': [2, {caseSensitive: false}],
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react-hooks/exhaustive-deps': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          contexts: './src/contexts',
          features: './src/features',
          hooks: './src/hooks',
          navigation: './src/navigation',
          services: './src/services',
          utils: './src/utils',
        },
      },
    },
  },
};
