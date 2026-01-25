import React from 'react';
import { useNavigate } from 'react-router-dom';

type Blog = {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
};

type FeatureProps = {
  blog: Blog;
};

const Feature: React.FC<FeatureProps> = ({ blog }) => {
  const navigate = useNavigate();

  // Format date to "Month Day, Year"
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      className="bg-white flex items-center gap-4 cursor-pointer"
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      {/* Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />

      {/* Text */}
      <div className="flex flex-col justify-center">
        <p className="text-gray-500 text-xs">{formattedDate}</p>
        <h2 className="text-sm font-semibold line-clamp-2">{blog.title}</h2>
      </div>
    </div>
  );
};

export default Feature;
