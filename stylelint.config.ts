import type { Config } from "stylelint";

const stylelintConfig: Config = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "property-layout-mappings": ["flow-relative"],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
    "unit-layout-mappings": "flow-relative",
    "value-keyword-layout-mappings": "flow-relative",
  },
  languageOptions: {
    directionality: {
      block: "top-to-bottom",
      inline: "left-to-right",
    },
  },
  overrides: [
    {
      files: ["**/*.astro"],
      customSyntax: "postcss-html",
    },
  ],
};

export default stylelintConfig;
