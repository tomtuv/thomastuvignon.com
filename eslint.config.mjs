import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import reactCompiler from "eslint-plugin-react-compiler";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "react-compiler": reactCompiler,
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": "error",
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
          pathGroups: [
            {
              pattern: "*.css",
              patternOptions: { matchBase: true },
              group: "unknown",
              position: "after",
            },
          ],
        },
      ],
      "no-useless-rename": "error",
      "object-shorthand": "error",
      "react/no-unknown-property": "error",
      "react-compiler/react-compiler": "error",
    },
  },
];

export default eslintConfig;
