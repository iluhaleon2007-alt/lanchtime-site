export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        dishes: "readonly",
        document: "readonly",
        window: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["error", { "vars": "local" }],
      "no-var": "error",
      "prefer-const": "error",
      "eqeqeq": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-console": "warn"
    }
  }
];
