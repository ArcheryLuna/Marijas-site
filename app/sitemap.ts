import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    return [{
        url: "/",
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 1.0
    }]
}

export default sitemap;
