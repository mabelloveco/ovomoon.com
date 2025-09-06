import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import QA from "./pages/qa";
import Blog from "./pages/blog";

function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ovomoon</h1>
      <nav className="space-x-4">
        <Link to="/qa">Q&A</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <p className="mt-6">Home content.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
