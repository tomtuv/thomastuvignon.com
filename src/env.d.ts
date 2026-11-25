/// <reference types="astro/client" />

import type { Runtime } from "@astrojs/cloudflare";

declare namespace App {
  interface Locals extends Runtime {
    cfContext: Runtime["cfContext"];
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ImportMetaEnv extends Cloudflare.Env {}
}
