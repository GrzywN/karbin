import { readdirSync } from 'fs';
import { join } from 'path';

const POSTS_PATH =
  process.env.NODE_ENV === 'production'
    ? 'var/task/content/articles'
    : join(process.cwd(), 'content/articles');
const BASE_URL = process.env.SITE_URL || 'https://karolbinkowski.me';
const EXTERNAL_DATA_URL = `${BASE_URL}/article`;

function generateSiteMap(posts: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/about</loc>
     </url>
     <url>
       <loc>${BASE_URL}/work</loc>
     </url>
     <url>
       <loc>${BASE_URL}/articles</loc>
     </url>
     ${posts
       .map((slug: string) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  return;
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
