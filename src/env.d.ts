/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface Window {
  Alpine: import('alpinejs').Alpine;
}

interface ImportMetaEnv {
  readonly RESEND_API: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}