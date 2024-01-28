# Website Asosasi Pemimpin Digital Indonesia

An open source website built using the latest features in Astro v4 with shadcn/ui using template from [@miickasmt](https://twitter.com/miickasmt) .

![blog](public/og.png)

## About this project

This project as an experiment to see how a modern app (with features like authentication, subscriptions, API routes, Markdown, Content Collections ...etc) would work in Astro v4 and shadcn/ui.

## Project Structure

```
├── public/
│   └── fonts/
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── hooks/
│   ├── icons/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── types/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## Features

- Config files
- Views Transitions
- Routing and Layouts
- React components & hooks
- UI Components built using **shadcn/ui**
- Documentation and blog using **MDX** and **Content Collections**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**
- 100/100 Lighthouse performance
- Minimal styling (make it your own!)

_Not implemented yet :_

- RSS Feed support
- Sitemap support
- Data Fetching
- SEO component
- API Routes and Middlewares
- Authentication using **Auth.js**
- ORM using **Prisma**
- Database on **PlanetScale**
- Subscriptions using **Stripe**

## Roadmap

- [x] ~Dark mode~
- [x] ~Add Markdown & MDX support~
- [x] ~Sheet mobile nav~
- [ ] Dropdown mobile nav
- [ ] Build **auth pages**
- [ ] Build **dashboard pages**
- [ ] Add search support for blog
- [ ] Add OG image for blog and others
- [ ] Add SEO component & metadata
- [ ] Subscriptions using Stripe

## Running Locally

1. Install dependencies using pnpm:

```sh
npm install
```

2. Start the development server:

```sh
npm run dev
```

## Credit

This theme is based off of the example app [Taxonomy](https://tx.shadcn.com/) of shadcn.

## License

Licensed under the [MIT license](https://github.com/mickasmt/astro-nomy/blob/main/LICENSE.md).
