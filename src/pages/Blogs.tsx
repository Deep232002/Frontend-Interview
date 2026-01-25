import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "../api/blogs"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton"


export default function Blogs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (isLoading) return <BlogSkeleton />
  if (error) return <p className="text-red-500">Failed to load blogs</p>

  return (
    <div className="w-[90%] m-auto grid md:grid-cols-3 gap-6">
      {data.map((blog: any) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}
