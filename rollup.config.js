import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/js/main.js",
  output: {
    file: "src/js/bundle.js",
    format: "umd",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    resolve(),
    commonjs(),
    terser(),
  ],
};
