module.exports = {
  extends: ['airbnb-typescript', 'prettier/react', 'plugin:react-hooks/recommended'],
  plugins: ['prettier'],
  rules: {
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-plusplus': 'off'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['/*.*'],
};
