import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";                 // original homepage
import Layout from "./layouts/layout";   // match your filename
import QA from "./pages/qa";
import BlogIndex from "./pages/blog";
import PostPage from "./pages/post";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Do NOT wrap home with Layout */}
        <Route path="/" element={<App />} />

        {/* Everything else uses Layout */}
        <Route element={<Layout />}>
          <Route path="qa" element={<QA />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
