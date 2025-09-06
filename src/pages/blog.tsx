import React from "react";

export default function Blog() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <article className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">The Power of the Moon</h2>
        <p className="text-gray-700">
          Explore how moon phases can influence emotions and decisions. This is
          the first of many posts where we break down astrology into actionable
          insights.
        </p>
      </article>
      {/* Article schema for SEO */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "url": "https://ovomoon.com/blog",
      "name": "Ovomoon Blog",
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Understanding Moon Phases and Your Energy",
          "description": "The moon cycles through eight phases monthly. Each phase shifts emotional tone and energy.",
          "author": { "@type": "Organization", "name": "Ovomoon" },
          "publisher": { "@type": "Organization", "name": "Ovomoon" },
          "datePublished": "2025-01-01",
          "dateModified": "2025-01-01",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ovomoon.com/blog#post-1" }
        },
        {
          "@type": "BlogPosting",
          "headline": "How Astrology Shapes Daily Decision Making",
          "description": "Daily moon guidance gives timing cues. Act on high-energy days. Reflect on low-energy days.",
          "author": { "@type": "Organization", "name": "Ovomoon" },
          "publisher": { "@type": "Organization", "name": "Ovomoon" },
          "datePublished": "2025-01-01",
          "dateModified": "2025-01-01",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ovomoon.com/blog#post-2" }
        },
        {
          "@type": "BlogPosting",
          "headline": "Building Rituals Around the New Moon",
          "description": "Set intentions at the new moon. Keep them short and repeatable. Small consistent rituals win.",
          "author": { "@type": "Organization", "name": "Ovomoon" },
          "publisher": { "@type": "Organization", "name": "Ovomoon" },
          "datePublished": "2025-01-01",
          "dateModified": "2025-01-01",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ovomoon.com/blog#post-3" }
        }
      ]
    })
  }}
/>

    </main>
  );
}
