import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import importX from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "import-x": importX,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "import-x/order": [
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
    },
  },
  globalIgnores([
    "dist/**",
    ".astro/**",
    ".wrangler/**",
    "cloudflare-env.d.ts",
    "graphql-env.d.ts",
  ]),
]);
