const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addWatchTarget("./src/js");
  eleventyConfig.addWatchTarget("./src/scss");

  eleventyConfig.addPassthroughCopy("./src/js/bundle.js");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/videos");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
