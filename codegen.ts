import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
      {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
  },
  generates: {
    "./lib/types.ts": {
      plugins: ["typescript"],
      config: { defaultScalarType: "unknown" },
    },
    "./lib/schema.graphql": { plugins: ["schema-ast"] },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
