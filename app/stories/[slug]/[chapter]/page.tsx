import { storyData } from "@/lib/storyData"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string; chapter: string }>
}) {
  const { slug, chapter } = await params
  const chapterIndex = parseInt(chapter, 10) - 1
  const story = storyData[slug]

  if (!story || isNaN(chapterIndex) || chapterIndex < 0 || chapterIndex >= story.chapters.length) {
    notFound()
  }

  const current = story.chapters[chapterIndex]
  const isFirst = chapterIndex === 0
  const isLast = chapterIndex === story.chapters.length - 1

  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      {/* Thin top bar with story name and chapter count */}
      <nav className="bg-white/60 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link
            href={`/stories/${slug}`}
            className="text-amber-700 hover:text-amber-900 text-sm font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 inline -mt-0.5" />
            {story.title}
          </Link>
          <span className="text-amber-500 text-sm">
            {chapterIndex + 1} / {story.chapters.length}
          </span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 pt-6 pb-12">
        {/* The illustration -- the star of the show */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-amber-100 bg-white">
          <Image
            src={current.image || "/placeholder.svg"}
            alt={`Illustration for ${current.title}`}
            width={800}
            height={600}
            className="w-full aspect-[4/3] object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZmRmOGYwIi8+Cjwvc3ZnPg=="
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Story text -- warm, readable, like a book page */}
        <div className="mt-6 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-900 font-serif mb-3">
            {current.title}
          </h2>
          <p className="text-lg sm:text-xl text-amber-950 leading-relaxed font-serif">
            {current.content}
          </p>
        </div>

        {/* Navigation -- simple, gentle */}
        <div className="mt-10 flex items-center gap-4">
          {isFirst ? (
            <div className="flex-1" />
          ) : (
            <Link
              href={`/stories/${slug}/${chapterIndex}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </Link>
          )}

          {isLast ? (
            <Link
              href={`/stories/${slug}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors"
            >
              The End
            </Link>
          ) : (
            <Link
              href={`/stories/${slug}/${chapterIndex + 2}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}
