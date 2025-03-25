import React from "react";
import { Link } from "react-router-dom";
import book1 from "../assets/banner-books/book1.jpg";
import book2 from "../assets/banner-books/book2.jpg";
import book4 from "../assets/banner-books/book4.jpg";
import book5 from "../assets/banner-books/book5.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Books Every Trader Should Read",
    date: "March 24, 2025",
    author: "Emmy_TraderPro",
    image: book1,
    content: "Discover the most insightful books to enhance your trading skills...",
  },
  {
    id: 2,
    title: "The Future of Digital Bookstores",
    date: "March 20, 2025",
    author: "Niyonsenga Emmanuel",
    image: book2,
    content: "How technology is shaping the future of book sales...",
  },
  {
    id: 3,
    title: "How to Build a Successful Online Book Business",
    date: "March 15, 2025",
    author: "Emmy_TraderPro",
    image: "https://source.unsplash.com/600x400/?business,books",
    content: "Learn the strategies to make an online bookstore profitable...",
  },
  {
    id: 4,
    title: "Why Reading Books is Essential for Entrepreneurs",
    date: "March 10, 2025",
    author: "Niyonsenga Emmanuel",
    image: book4,
    content: "Explore the habits of successful entrepreneurs who read daily...",
  },
  {
    id: 5,
    title: "The Impact of E-books on Modern Reading Culture",
    date: "March 5, 2025",
    author: "Emmy_TraderPro",
    image: book5,
    content: "How digital books are transforming the way we consume knowledge...",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen my-10 bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">📚 Our Blog</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm">
              {post.date} | By {post.author}
            </p>
            <p className="mt-4 text-gray-700">{post.content.substring(0, 100)}...</p>
            <Link to={`/blog/${post.id}`} className="text-blue-500 mt-2 block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
