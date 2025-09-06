import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../posts";

export default function BlogIndex() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ovomoon Blog</h1>
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.slug}>
            <h2 className="text-2xl font-semibold">
              <Link to={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-gray-600">{p.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
