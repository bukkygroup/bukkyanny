This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Home review and SEO

Home is the only completed page. Original client copy is preserved in `content/bukky-anny-original.txt`; selected personal excerpts for the future About page are in `content/personal-stories.ts`.

Testimonials are clearly labelled review placeholders, not published endorsements. Replace them with client-approved quotes before launch. YouTube project rows remain informational until their destinations are confirmed.

Copy `.env.example` to `.env.local` and set `SITE_URL` only after the production domain is confirmed. It must be the HTTPS origin, without a path, query, or credentials. Rebuild after changing it.

- With no `SITE_URL`, Home uses `noindex, nofollow`, robots disallows crawling, and the sitemap contains no entries. Absolute canonical and structured-data image URLs are omitted.
- Development and Vercel preview deployments remain non-indexable, including when a production domain is configured.
- A production build with `SITE_URL` configured permits indexing, publishes the Home canonical URL and sitemap entry, and adds absolute Person, WebSite, and Book references. Other pages must be added to the sitemap as they are completed.
- Home includes a generated 1200 × 630 branded social image at `/opengraph-image`.

After production launch, verify the domain in Google Search Console, inspect Home, submit `/sitemap.xml`, and monitor indexing and real-user Core Web Vitals. These account actions are not performed by the local build.
