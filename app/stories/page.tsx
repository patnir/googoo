import { getStoryList } from "@/lib/storyData"
import Image from "next/image"
import Link from "next/link"

const stories = getStoryList()

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif hover:text-amber-700 transition-colors">
              Goo Goo Stories
            </h1>
          </Link>
        </header>

        <main>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={`Illustration for ${story.title}`}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-amber-900 font-serif group-hover:text-amber-700 transition-colors mb-2">
                      {story.title}
                    </h2>
                    <p className="text-amber-700 text-sm leading-relaxed font-serif">
                      {story.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/"
              className="inline-block py-3 px-6 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
