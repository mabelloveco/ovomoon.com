import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPost } from "../posts";

export default function PostPage() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <p>Post not found.</p>
        <Link to="/blog" className="underline">Back to blog</Link>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Ovomoon" },
    publisher: { "@type": "Organization", name: "Ovomoon" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://ovomoon.com/blog/${post.slug}` },
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Link to="/blog" className="underline">← Back to blog</Link>
      <article className="prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
