module.exports = {
  extends: ['airbnb-typescript', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    "linebreak-style": "off",
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['/*.*'],
};
