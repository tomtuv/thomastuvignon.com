/** @type {import('postcss-load-config').Config} */
const postcssConfig = {
  plugins: {
    /** @type {import('postcss-preset-env').pluginOptions} */
    "postcss-preset-env": {
      stage: 0,
      features: {
        "any-link-pseudo-class": false,
        "color-functional-notation": false,
        "custom-properties": false,
        "gap-properties": false,
        "logical-properties-and-values": false,
      },
    },
  },
};

export default postcssConfig;
