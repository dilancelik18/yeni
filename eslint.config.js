// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      // İstersen burada kurallar ekleyebilirsin
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
