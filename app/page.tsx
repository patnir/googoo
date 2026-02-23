import { getStoryList } from "@/lib/storyData"
import Image from "next/image"
import Link from "next/link"

const stories = getStoryList()

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero: characters + intro */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-6">
            Goo Goo Bear
          </h1>

          <div className="flex justify-center gap-6 sm:gap-10 mb-8">
            <div className="bg-white rounded-2xl p-3 sm:p-5 shadow-md border border-amber-100">
              <Image
                src="/goo-goo-bear.png"
                alt="Goo Goo - A friendly bear"
                width={400}
                height={400}
                className="w-[180px] sm:w-[260px] h-auto rounded-xl object-contain"
              />
            </div>
            <div className="bg-white rounded-2xl p-3 sm:p-5 shadow-md border border-amber-100">
              <Image
                src="/carolyn.png"
                alt="Carolyn - Goo Goo's best friend"
                width={400}
                height={400}
                className="w-[180px] sm:w-[260px] h-auto rounded-xl object-contain"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg text-amber-800 leading-relaxed max-w-md mx-auto font-serif">
            Join Goo Goo and Carolyn on gentle adventures through forests,
            meadows, and everyday moments full of wonder.
          </p>
        </header>

        {/* Story grid */}
        <main>
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 font-serif text-center mb-6">
            Stories
          </h2>

          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group"
              >
                <div className="flex items-center gap-4 sm:gap-5 bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100 hover:shadow-xl transition-all duration-200 p-3 sm:p-4">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={`Illustration for ${story.title}`}
                    width={200}
                    height={200}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-amber-900 font-serif group-hover:text-amber-700 transition-colors mb-1">
                      {story.title}
                    </h3>
                    <p className="text-amber-700 text-sm leading-relaxed font-serif line-clamp-2">
                      {story.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
