import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".open-next/**",
    ".wrangler/**",
    "cloudflare-env.d.ts",
  ]),
  {
    rules: {
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
    },
  },
]);

export default eslintConfig;
