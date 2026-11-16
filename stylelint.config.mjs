/** @type {import("stylelint").Config} */
const stylelintConfig = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "property-layout-mappings": ["flow-relative"],
    "unit-layout-mappings": "flow-relative",
    "value-keyword-layout-mappings": "flow-relative",
  },
  languageOptions: {
    directionality: {
      block: "top-to-bottom",
      inline: "left-to-right",
    },
  },
};

export default stylelintConfig;
