import { storyData } from "@/lib/storyData"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const story = storyData[slug]

  if (!story) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <Link
            href="/"
            className="text-amber-600 hover:text-amber-800 text-sm font-serif font-medium transition-colors"
          >
            Goo Goo Bear
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mt-2 font-serif">
            {story.title}
          </h1>
          <p className="text-amber-700 mt-3 max-w-xl mx-auto font-serif">{story.description}</p>
        </header>

        <main>
          <div className="flex flex-col gap-3 max-w-2xl mx-auto">
            {story.chapters.map((chapter, i) => (
              <Link
                key={i}
                href={`/stories/${slug}/${i + 1}`}
                className="group"
              >
                <div className="flex items-center gap-4 bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100 hover:shadow-xl transition-all duration-200 p-3 sm:p-4">
                  <Image
                    src={chapter.image || "/placeholder.svg"}
                    alt={`Illustration for ${chapter.title}`}
                    width={200}
                    height={200}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <p className="text-sm sm:text-base font-semibold text-amber-900 group-hover:text-amber-700 transition-colors font-serif">
                    {chapter.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/stories/${slug}/1`}
              className="inline-block py-3 px-8 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-serif font-semibold transition-colors"
            >
              Start Reading
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
