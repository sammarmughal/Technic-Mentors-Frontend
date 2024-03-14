const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// List your React app routes here
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/team', changefreq: 'weekly', priority: 0.8 },
  { url: '/our-portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/web-development-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/software-development-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/mobile-app-development-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/seo-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/digital-marketing-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/graphics-designing-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/education-management-system', changefreq: 'weekly', priority: 0.8 },
  { url: '/erp-solutions', changefreq: 'weekly', priority: 0.8 },
  { url: '/ecommerce-solutions', changefreq: 'weekly', priority: 0.8 },
  { url: '/point-of-sale', changefreq: 'weekly', priority: 0.8 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://technicmentors.com' });

  // Add routes to the sitemap
  routes.forEach(route => {
    sitemap.write(route);
  });

  // End the stream
  sitemap.end();

  // Convert the stream to a string
  const xml = await streamToPromise(sitemap).then(data => data.toString());

  // Write the sitemap to a file
  const sitemapPath = './public/sitemap.xml'; // Adjust the path as needed
  fs.writeFileSync(sitemapPath, xml);

  console.log(`Sitemap generated at ${sitemapPath}`);
}

// Run the function
generateSitemap();
