export const dynamic = "force-static";

const baseUrl = "https://bestgearbuy.com";

export default function sitemap() {
  // ✅ Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/category/drones`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/category/smartwatches`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/category/soundbars`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/category/drills`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/category/earbuds`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/advertiser-discloser`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // ✅ Product review pages
  const productPages = [
    // Drones
    "dji-air-3",
    "dji-mini-4-pro",
    "dji-mavic-3",
    "autel-evo-lite",
    "skydio-2-plus",
    // Smartwatches
    "apple-watch-series-9",
    "samsung-galaxy-watch-6",
    "garmin-fenix-7",
    "fitbit-sense-2",
    "amazfit-gtr-4",
    // Soundbars
    "sonos-arc",
    "samsung-hw-q990b",
    "jbl-bar-5-1",
    "bose-smart-soundbar-900",
    "lg-s95qr",
    // Cordless Drills
    "dewalt-20v-max",
    "milwaukee-m18-fuel",
    "makita-xph12z",
    "ryobi-one-plus",
    "bosch-gsr18v",
    // Wireless Earbuds
    "sony-wf-1000xm4",
    "apple-airpods-pro-2",
    "bose-quietcomfort-earbuds",
    "sennheiser-momentum-3",
    "jabra-elite-85t",
  ].map((slug) => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ✅ Comparison/guide pages
  const comparisonPages = [
    "best-drones-2025",
    "smartwatch-comparison",
    "soundbar-buying-guide",
    "cordless-drill-comparison",
    "wireless-earbuds-guide",
  ].map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // ✅ Combine all pages
  return [...staticPages, ...productPages, ...comparisonPages];
}
