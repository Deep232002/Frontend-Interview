const API_URL = "http://localhost:3001/blogs"

export const getBlogs = async () => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error("Failed to fetch blogs")
  return res.json()
}

export const getBlogById = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error("Blog not found")
  return res.json()
}

export const createBlog = async (blog: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
  if (!res.ok) throw new Error("Failed to create blog")
  return res.json()
}
