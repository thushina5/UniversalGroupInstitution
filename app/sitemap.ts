import type { MetadataRoute } from "next";

const siteUrl = "https://www.universalinstitutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ["", "#about", "#courses", "#placements", "#faculty", "#gallery", "#contact"];
  return sections.map((section) => ({
    url: `${siteUrl}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.8,
  }));
}
