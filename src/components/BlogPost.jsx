import React from "react";
import { useParams, Link } from "react-router-dom";
import book1 from "../assets/banner-books/book1.jpg";
import book2 from "../assets/banner-books/book2.jpg";
import book4 from "../assets/banner-books/book4.jpg";
import book5 from "../assets/banner-books/book5.jpg";

const blogPosts = [
  { id: 1, title: "Top 5 Books Every Trader Should Read", date: "March 24, 2025", author: "Emmy_TraderPro", image: book1, content: "Discover the most insightful books to enhance your trading skills..." },
  { id: 2, title: "The Future of Digital Bookstores", date: "March 20, 2025", author: "Niyonsenga Emmanuel", image: book2, content: "How technology is shaping the future of book sales..." },
  { id: 3, title: "How to Build a Successful Online Book Business", date: "March 15, 2025", author: "Emmy_TraderPro", image: "https://source.unsplash.com/600x400/?business,books", content: "Learn the strategies to make an online bookstore profitable..." },
  { id: 4, title: "Why Reading Books is Essential for Entrepreneurs", date: "March 10, 2025", author: "Niyonsenga Emmanuel", image: book4, content: "Explore the habits of successful entrepreneurs who read daily..." },
  { id: 5, title: "The Impact of E-books on Modern Reading Culture", date: "March 5, 2025", author: "Emmy_TraderPro", image: book5, content: "How digital books are transforming the way we consume knowledge..." },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h1 className="text-center text-2xl text-red-500">Post Not Found</h1>;
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img src={post.image} alt={post.title} className="w-full max-h-60 object-cover rounded-lg mb-4" />
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600 text-sm">{post.date} | By {post.author}</p>
        <p className="mt-4 text-gray-800">{post.content}</p>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedPosts.map((related) => (
            <Link to={`/blog/${related.id}`} key={related.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={related.image} alt={related.title} className="w-full max-h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{related.title}</h3>
              <p className="text-sm text-gray-500">{related.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
