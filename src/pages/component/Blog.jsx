import React, { useState, useEffect } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 8));
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">⏳ Memuat...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
