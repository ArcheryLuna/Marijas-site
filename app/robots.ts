import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
    rules: [
        {
            userAgent: "*",
            disallow: ["/api/"],
            allow: ["/"],
            crawlDelay: 10,
        }
    ],
    sitemap: "https://lifeonmarsindica.com/sitemap.xml",
    host: "https://lifeonmarsindica.com"
});

export default robots;
