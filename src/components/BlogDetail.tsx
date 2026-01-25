import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "../api/blogs"

interface BlogDetailProps {
  id: string;
}

export default function BlogDetail({ id }: BlogDetailProps) {
  

  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  })

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading blog...</p>
  }

  if (error || !data) {
    return <p className="text-center text-red-500">Error loading blog</p>
  }

  return (
    <div className="bg-white mx-auto max-w-3xl space-y-6">
      <img
        src={data.coverImage}
        alt={data.title}
        className="h-64 w-full rounded-xl object-cover"
      />

      <h1 className="text-3xl font-bold">{data.title}</h1>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {data.category.map((c: string) => (
          <span
            key={c}
            className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {c}
          </span>
        ))}
      </div>

      <p className="text-gray-600">{data.description}</p>

      <p className="leading-relaxed text-gray-800 whitespace-pre-line">
        {data.content}
      </p>
    </div>

  )
}
