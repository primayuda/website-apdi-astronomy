/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface Window {
  Alpine: import('alpinejs').Alpine;
}

interface ImportMetaEnv {
  readonly RESEND_API: string;
  readonly WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}