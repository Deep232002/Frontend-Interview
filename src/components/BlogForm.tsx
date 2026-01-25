import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "../api/blogs"

export default function BlogForm() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const data = (form.elements.namedItem("category") as HTMLTextAreaElement)
  .value
  .split(",")
  .map(item => item.trim().toUpperCase())
  .filter(Boolean);



    mutation.mutate({
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
      content: (form.elements.namedItem("content") as HTMLTextAreaElement).value,
      category: data, 
      date: new Date().toISOString(),
      coverImage: (form.elements.namedItem("coverImage") as HTMLTextAreaElement).value,
    })

    form.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-4 rounded-lg border bg-white p-6 shadow"
    >
      <h2 className="text-2xl font-bold">Create Blog</h2>

      <input
        name="title"
        placeholder="Title"
        required
        className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        name="coverImage"
        placeholder="coverImage-URL"
        required
        className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        name="category"
        placeholder="category"
        required
        className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />


      <textarea
        name="description"
        placeholder="Short description"
        rows={3}
        className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <textarea
        name="content"
        placeholder="Full blog content"
        rows={6}
        className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full rounded-md bg-black py-2 text-white hover:bg-gray-800 disabled:opacity-50"
      >
        {mutation.isPending ? "Creating..." : "Create Blog"}
      </button>

      {mutation.isError && (
        <p className="text-sm text-red-500">
          Failed to create blog
        </p>
      )}
    </form>
  )
}
