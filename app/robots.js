export default function robots() {
  return {
    rules: [
        {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin","privacy"]
        }
    ],
    sitemap: `ardemyacademy.com/sitemap.xml`,
  }
}