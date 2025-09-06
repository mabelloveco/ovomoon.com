import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-xl font-bold">Ovomoon</Link>
          <div className="space-x-4">
            <Link to="/qa">Q&A</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto p-6">
          <Outlet /> {/* Page-specific content renders here */}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-4xl mx-auto p-4 text-sm">
          © {new Date().getFullYear()} Ovomoon
        </div>
      </footer>
    </div>
  );
}
