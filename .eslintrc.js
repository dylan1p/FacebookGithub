module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier", "react"],
    rules: {
    "prettier/prettier": ["error"],
    "no-console": ["error", { allow: ["debug", "error"] }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      spread: true
    }
  },
  env: {
    node: true,
    browser: true,
    es6: true
  }
};
