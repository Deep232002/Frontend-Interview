export default function BlogSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-xl border bg-white"
        >
          {/* Image placeholder */}
          <div className="h-48 w-full bg-gray-200" />

          {/* Text placeholders */}
          <div className="space-y-3 p-4">
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="h-3 w-full rounded bg-gray-200" />
            <div className="h-3 w-5/6 rounded bg-gray-200" />

            <div className="flex gap-2 pt-2">
              <div className="h-5 w-16 rounded-full bg-gray-200" />
              <div className="h-5 w-16 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
