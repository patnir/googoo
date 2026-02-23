import { Button } from "@/components/ui/button"
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <Link
            href="/stories"
            className="text-green-700 hover:text-green-900 text-sm font-medium transition-colors"
          >
            All Stories
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mt-2 font-serif">
            {story.title}
          </h1>
          <p className="text-green-700 mt-3 max-w-xl mx-auto">{story.description}</p>
        </header>

        <main>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {story.chapters.map((chapter, i) => (
              <Link
                key={i}
                href={`/stories/${slug}/${i + 1}`}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                  <Image
                    src={chapter.image || "/placeholder.svg"}
                    alt={`Illustration for ${chapter.title}`}
                    width={300}
                    height={200}
                    className="w-full h-28 sm:h-32 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs sm:text-sm font-semibold text-green-800 group-hover:text-green-600 transition-colors leading-tight">
                      {chapter.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`/stories/${slug}/1`}>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Reading
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
