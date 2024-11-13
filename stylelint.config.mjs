/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-use-logical"],
  rules: { "csstools/use-logical": "always" },
};

export default config;
