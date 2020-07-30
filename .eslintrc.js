module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "jsx-a11y"
  ],
  extends: [
  '@react-native-community',
  "plugin:react/recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:jsx-a11y/recommended",
  'airbnb-typescript'
  ],
  rules: {
    'prettier/prettier': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": ["ts", ".tsx", ".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "no-undef": "error",
    "arrow-parens": ["warn", "as-needed"],
    "comma-dangle": ["warn", "never"],
    "object-curly-newline": ["warn", { "consistent": true }],
    "no-case-declarations": 0,
    "import/prefer-default-export": 0,
  },
};
