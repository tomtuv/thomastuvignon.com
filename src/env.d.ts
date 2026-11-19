/// <reference types="astro/client" />

import type { Runtime } from "@astrojs/cloudflare";

declare namespace App {
  interface Locals extends Runtime {
    cfContext: Runtime["cfContext"];
  }
}

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
