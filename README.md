# bukkyanny

Bukky Anny's personal website, built with Next.js.

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

## Home, About, Books, and SEO

Home (`/`), About (`/about`), and Books (`/books`) are implemented for review. Original client copy is preserved in `content/bukky-anny-original.txt`; About renders the complete introduction and eight story sections from `content/about.ts`. The earlier shortened excerpts remain in `content/personal-stories.ts` for reference.

Books reuses the existing mockups and Amazon destinations. The first three titles include their supplied cover subtitles; Bond Not Blood has no supplied subtitle. Catalogue cards show titles and supplied subtitles only and open `/books/slave-boss`, `/books/the-flags`, `/books/a-safe-place`, or `/books/bond-not-blood`. The author introduction uses the reference's three-lobed image silhouette.

Each book-detail page uses the reference's sticky cover and description layout, Amazon purchase link, publication details table, excerpt, related books, and closing feature. Descriptions and excerpts in `content/book-details.ts` are temporary Lorem ipsum copy for author review. Publisher, publication date, language, page count, and ISBN are unconfirmed and are labelled accordingly. Do not add ratings, prices, publisher facts, or Goodreads links without verified information. Detail-page metadata and Book structured data exclude placeholder copy and unconfirmed fields. Unknown book slugs return 404.

Testimonials are clearly labelled review placeholders, not published endorsements. Replace them with client-approved quotes before launch. YouTube project rows remain informational until their destinations are confirmed.

The Books page's Reader reviews section contains nine explicitly labelled fictional design samples, with illustrative names and locations in South Africa, Nigeria, and Europe. There are no portraits, ratings, or claimed review-platform sources. Replace or remove these samples in `components/books/reader-reviews.tsx` before publication. They are excluded from structured data.

Copy `.env.example` to `.env.local` and set `SITE_URL` only after the production domain is confirmed. It must be the HTTPS origin, without a path, query, or credentials. Rebuild after changing it.

- With no `SITE_URL`, both pages use `noindex, nofollow`, robots disallows crawling, and the sitemap contains no entries. Absolute canonical and structured-data image URLs are omitted.
- Development and Vercel preview deployments remain non-indexable, including when a production domain is configured.
- A production build with `SITE_URL` configured permits indexing and publishes canonical URLs and sitemap entries for Home, About, Books, and all four book-detail pages. Home includes Person, WebSite, and Book structured data; About includes AboutPage and Person structured data; Books includes a CollectionPage, Person, and an ItemList of the four books; each detail page includes its Book structured data. Add other pages to the sitemap as they are completed.
- All three pages use the generated 1200 × 630 branded social image at `/opengraph-image`.

After production launch, verify the domain in Google Search Console, inspect Home, submit `/sitemap.xml`, and monitor indexing and real-user Core Web Vitals. These account actions are not performed by the local build.
