/** @type {import("stylelint").Config} */
const stylelintConfig = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-use-logical"],
  rules: { "csstools/use-logical": "always" },
};

export default stylelintConfig;
