import { Button } from "@/components/ui/button"
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-6">
          <Link
            href={`/stories/${slug}`}
            className="text-green-700 hover:text-green-900 text-sm font-medium transition-colors"
          >
            {story.title}
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mt-1 font-serif">
            {current.title}
          </h1>
        </header>

        <main className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={current.image || "/placeholder.svg"}
              alt={`Illustration for ${current.title}`}
              width={800}
              height={600}
              className="w-full h-64 sm:h-80 md:h-96 object-contain bg-gradient-to-b from-green-50 to-blue-50"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZjFmNWY5Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LXNpemU9IjE2cHgiPkxvYWRpbmcuLi48L3RleHQ+Cjwvc3ZnPg=="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
            <p className="text-base md:text-lg text-green-800 leading-relaxed font-medium">
              {current.content}
            </p>
          </div>

          <div className="flex gap-3 pb-8">
            {isFirst ? (
              <Link href={`/stories/${slug}`} className="flex-1">
                <Button
                  size="lg"
                  className="w-full rounded-xl py-4 font-semibold text-base bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  All Chapters
                </Button>
              </Link>
            ) : (
              <Link href={`/stories/${slug}/${chapterIndex}`} className="flex-1">
                <Button
                  size="lg"
                  className="w-full rounded-xl py-4 font-semibold text-base bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </Button>
              </Link>
            )}

            {isLast ? (
              <Link href={`/stories/${slug}`} className="flex-1">
                <Button
                  size="lg"
                  className="w-full rounded-xl py-4 font-semibold text-base bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Back to Story
                </Button>
              </Link>
            ) : (
              <Link href={`/stories/${slug}/${chapterIndex + 2}`} className="flex-1">
                <Button
                  size="lg"
                  className="w-full rounded-xl py-4 font-semibold text-base bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
