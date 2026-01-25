import { Link } from "react-router-dom"

type Blog = {
  id: string
  title: string
  description: string
  coverImage: string
  category: string[]
  date: string
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="space-y-3 p-4">
        <h2 className="text-lg font-bold line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-3">
          {blog.description}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {blog.category.map((c) => (
            <span
              key={c}
              className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-500">
            {new Date(blog.date).toDateString()}
          </span>

          <Link
            to={`/blogs/${blog.id}`}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}
