import React from "react";

export default function QA() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Q&A</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">What does Ovomoon offer?</h2>
        <p className="mt-2">
          Ovomoon provides personalized astrology and moon insights designed to
          align with your energy and emotions each day.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">How do I use daily moon guidance?</h2>
        <p className="mt-2">
          You can follow your daily guidance for clarity on decisions,
          relationships, and energy balance. Check in each morning for updates.
        </p>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does Ovomoon offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Ovomoon provides personalized astrology and moon insights designed to align with your energy and emotions each day."
                }
              },
              {
                "@type": "Question",
                "name": "How do I use daily moon guidance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "You can follow your daily guidance for clarity on decisions, relationships, and energy balance. Check in each morning for updates."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
