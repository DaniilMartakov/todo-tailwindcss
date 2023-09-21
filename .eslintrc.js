module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'react/jsx-no-constructed-context-values': 0,
    'no-console': 0,
    'default-param-last': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/react-in-jsx-scope': 0,
    'max-len': 0,
    'no-shadow': 0,
    eqeqeq: 0,
  },
};
