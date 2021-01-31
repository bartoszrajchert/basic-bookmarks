module.exports = {
  extends: ['airbnb-typescript', 'prettier/react', 'plugin:react-hooks/recommended'],
  plugins: ['prettier'],
  rules: {
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-plusplus': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": 'off'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['/*.*'],
};
