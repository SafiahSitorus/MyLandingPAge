import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
        <div className="flex gap-4">
          {["/", "/projects", "/blog"].map((path, i) => {
            const label = path === "/" ? "Home" : path.replace("/", "");
            return (
              <Link
                key={i}
                to={path}
                className={`capitalize hover:text-blue-600 ${
                  pathname === path ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
