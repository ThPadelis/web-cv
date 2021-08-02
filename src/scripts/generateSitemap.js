const fs = require("fs");
const globby = require("globby");

(async () => {
  // Fetch all routes based on patterns
  const pages = await globby([
    "src/views/**/*.vue", // All routes inside /pages
    "!src/views/PageNotFound.vue", // Ignore 404 page
  ]);

  pages.unshift("index"); // Index page

  const urlSet = pages
    .map((page) => {
      // Remove none route related parts of filename.
      const path = page
        .replace(/(src\/views\/)/, "")
        .replace(/(.vue)/, "")
        .toLocaleLowerCase();
      // Remove the word index from route
      const route = path === "index" ? "" : path;
      // Top priority for index and about pages
      const priority = ["index", "about"].includes(path) ? "1.0" : "0.5";
      // Build url portion of sitemap.xml
      return `<url><loc>https://padelis.theodosiou.me/${route}</loc><priority>${priority}</priority><changefreq>daily</changefreq></url>`;
    })
    .join("");

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  // Create sitemap file
  try {
    fs.writeFileSync("public/sitemap.xml", sitemap);

    console.log("Generated public/sitemap.xml");
  } catch (error) {
    console.log(error.toString());
  }
})();
