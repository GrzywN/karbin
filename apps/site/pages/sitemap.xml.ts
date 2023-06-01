import { readdirSync } from 'fs';
import { join } from 'path';

const POSTS_PATH =
  process.env.NODE_ENV === 'production'
    ? 'var/task/content/articles'
    : join(process.cwd(), 'content/articles');
const BASE_URL = process.env.SITE_URL || 'https://karolbinkowski.me';
const EXTERNAL_DATA_URL = `${BASE_URL}/article`;

function generateSiteMap(posts: string[]) {
  const locales = ['en', 'pl'];
  const defaultLocale = 'en';
  const sitemapItems = [];

  sitemapItems.push(createSitemapItem(BASE_URL));
  sitemapItems.push(createSitemapItem(`${BASE_URL}/about`));
  sitemapItems.push(createSitemapItem(`${BASE_URL}/work`));
  sitemapItems.push(createSitemapItem(`${BASE_URL}/articles`));

  for (const slug of posts) {
    for (const locale of locales) {
      const url = `${EXTERNAL_DATA_URL}/${locale}/${slug}`;
      sitemapItems.push(createSitemapItem(url));
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${sitemapItems.join('\n')}
   </urlset>
 `;
}

function createSitemapItem(url: string) {
  return `
       <url>
           <loc>${url}</loc>
       </url>
     `;
}

function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const posts = readdirSync(POSTS_PATH).map((path) =>
    path.replace(/\.mdx?/, '')
  );

  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
