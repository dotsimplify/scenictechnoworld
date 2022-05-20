const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = "https://forexoverflow.io";
  const paths = [
    "404",
    "login",
    "signup",
    "about-us",
    "contact",
    "frequently-asked-questions",
    "index",
    "my-reading-list",
    "update-user-profile",
    "verify-email-via-otp",
    "videos-about-forex",
    "/legal/privacy-policy",
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map((url) => {
          const route = url.replace("index", "");
          const staticPath = `${baseUrl}/${route}`;
          return `
            <url>
              <loc>${staticPath}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}         
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
