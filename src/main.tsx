import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./layouts/Layout";   // ← make sure you created Layout.tsx
import QA from "./pages/qa";
import BlogIndex from "./pages/blog";
import PostPage from "./pages/post";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="qa" element={<QA />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
